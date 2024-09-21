import React, {useState} from 'react';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import {
    Bars3Icon,
    QuestionMarkCircleIcon,
    Cog6ToothIcon
  } from "@heroicons/react/24/outline";

import { GoHome } from "react-icons/go";

export function AdminSidebar() {
  const { collapseSidebar } = useProSidebar();
  const [collapsed, setCollapsed] = useState(true);
  const toggleSidebar = () => {
      collapseSidebar();
      setCollapsed(!collapsed);
  };
  return (
  <Sidebar collapsedWidth='55px' collapsed={collapsed} backgroundColor='#ffffff' style={{height:'100%'}}>
        <Menu
        menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: '#13395e',
                color: '#b6c8d9',
              },
            },
          }}
        style={{height:'100%'}}>
            <div className='header-side h-1/10'>
                <MenuItem className='flex items-center' onClick={toggleSidebar}>
                <span className='flex justify-center items-center'>
                    <button className='pe-4'><Bars3Icon className="h-4 w-4"/></button>
                    <span></span>
                </span>
                </MenuItem>
            </div>
            <div className='mid-side h-3/4'>
                <MenuItem className='flex items-center selected'> 
                    <div  style={{position:'absolute',left:0, top:0, width:'3px', height:'100%', backgroundColor:'#000000', borderTopRightRadius:'10px', borderBottomRightRadius:'10px'}}></div>
                    <span className='flex justify-center items-center'>
                        <p className='pe-4'><GoHome className="h-4 w-4"/></p>
                        <span>Home</span>
                    </span>
                </MenuItem>
                <MenuItem className='flex items-center'> 
                <span className='flex justify-center items-center'>
                    <p className='pe-4'>
                        <svg className="h-4 w-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_593_74" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                <rect width="24" height="24" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_593_74)">
                                <path d="M4.50011 17.6923V7.60002L2.95011 4.2212C2.86551 4.0353 2.86039 3.84363 2.93474 3.6462C3.0091 3.44877 3.13923 3.30774 3.32511 3.22312C3.51101 3.13852 3.70268 3.13083 3.90011 3.20005C4.09753 3.26928 4.23854 3.39685 4.32316 3.58275L6.14239 7.55002H17.8578L19.677 3.58275C19.7616 3.39685 19.9026 3.26673 20.1001 3.19238C20.2975 3.11801 20.4892 3.12826 20.6751 3.22312C20.8609 3.30774 20.9911 3.44877 21.0654 3.6462C21.1398 3.84363 21.1347 4.0353 21.0501 4.2212L19.5001 7.60002V17.6923C19.5001 18.191 19.3235 18.617 18.9702 18.9701C18.617 19.3234 18.1911 19.5 17.6924 19.5H6.30781C5.80909 19.5 5.38313 19.3234 5.02993 18.9701C4.67672 18.617 4.50011 18.191 4.50011 17.6923ZM10.0001 12.75H14.0001C14.2129 12.75 14.3911 12.6782 14.5347 12.5346C14.6783 12.391 14.7501 12.2128 14.7501 12C14.7501 11.7872 14.6783 11.609 14.5347 11.4654C14.3911 11.3218 14.2129 11.25 14.0001 11.25H10.0001C9.78727 11.25 9.60907 11.3218 9.46548 11.4654C9.3219 11.609 9.25011 11.7872 9.25011 12C9.25011 12.2128 9.3219 12.391 9.46548 12.5346C9.60907 12.6782 9.78727 12.75 10.0001 12.75ZM6.30781 18H17.6924C17.7821 18 17.8558 17.9711 17.9135 17.9134C17.9712 17.8557 18.0001 17.782 18.0001 17.6923V9.05H6.00008V17.6923C6.00008 17.782 6.02894 17.8557 6.08664 17.9134C6.14434 17.9711 6.21806 18 6.30781 18Z" fill="black"/>
                            </g>
                        </svg>

                    </p>
                    <span>Some Module</span>
                </span>
                </MenuItem>
                <MenuItem className='flex items-center'> 
                <span className='flex justify-center items-center'>
                    <p className='pe-4'>
                        <svg className="h-4 w-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_593_80" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                <rect width="24" height="24" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_593_80)">
                                <path d="M6.35222 17.8907L4.45568 19.7445C4.18605 20.0081 3.87603 20.0677 3.52563 19.9235C3.17521 19.7792 3 19.5195 3 19.1444V5.67402C3 5.20624 3.16579 4.81029 3.49737 4.48617C3.82895 4.16206 4.23401 4 4.71256 4H19.2874C19.766 4 20.1711 4.16206 20.5026 4.48617C20.8342 4.81029 21 5.20624 21 5.67402V16.2166C21 16.6844 20.8342 17.0804 20.5026 17.4045C20.1711 17.7286 19.766 17.8907 19.2874 17.8907H6.35222ZM5.74738 16.5016H19.2874C19.3603 16.5016 19.4271 16.4719 19.4879 16.4126C19.5486 16.3532 19.579 16.2879 19.579 16.2166V5.67402C19.579 5.60277 19.5486 5.53746 19.4879 5.47809C19.4271 5.41873 19.3603 5.38905 19.2874 5.38905H4.71256C4.63968 5.38905 4.57286 5.41873 4.51212 5.47809C4.4514 5.53746 4.42103 5.60277 4.42103 5.67402V17.7838L5.74738 16.5016ZM7.26315 14.418H12.9474C13.149 14.418 13.3178 14.3515 13.4538 14.2185C13.5899 14.0856 13.6579 13.9205 13.6579 13.7235C13.6579 13.5264 13.5899 13.3614 13.4538 13.2284C13.3178 13.0954 13.149 13.029 12.9474 13.029H7.26315C7.06153 13.029 6.89271 13.0954 6.75668 13.2284C6.62065 13.3614 6.55264 13.5264 6.55264 13.7235C6.55264 13.9205 6.62065 14.0856 6.75668 14.2185C6.89271 14.3515 7.06153 14.418 7.26315 14.418ZM7.26315 11.6398H16.7369C16.9385 11.6398 17.1073 11.5734 17.2433 11.4404C17.3793 11.3074 17.4474 11.1424 17.4474 10.9453C17.4474 10.7482 17.3793 10.5832 17.2433 10.4503C17.1073 10.3173 16.9385 10.2508 16.7369 10.2508H7.26315C7.06153 10.2508 6.89271 10.3173 6.75668 10.4503C6.62065 10.5832 6.55264 10.7482 6.55264 10.9453C6.55264 11.1424 6.62065 11.3074 6.75668 11.4404C6.89271 11.5734 7.06153 11.6398 7.26315 11.6398ZM7.26315 8.8617H16.7369C16.9385 8.8617 17.1073 8.79522 17.2433 8.66225C17.3793 8.52929 17.4474 8.36427 17.4474 8.16719C17.4474 7.97011 17.3793 7.80509 17.2433 7.67212C17.1073 7.53916 16.9385 7.47267 16.7369 7.47267H7.26315C7.06153 7.47267 6.89271 7.53916 6.75668 7.67212C6.62065 7.80509 6.55264 7.97011 6.55264 8.16719C6.55264 8.36427 6.62065 8.52929 6.75668 8.66225C6.89271 8.79522 7.06153 8.8617 7.26315 8.8617Z" fill="black"/>
                            </g>
                        </svg>
                    </p>
                    <span>Message</span>
                </span>
                </MenuItem>
        </div>
          <div className='foot-side h-1/10'>
            <MenuItem className='flex items-center'>
                <span className='flex justify-center items-center'>
                    <button className='pe-4'>
                        <QuestionMarkCircleIcon  className="h-4 w-4"/>
                    </button>
                    <span>Service Provider</span>
                </span>
            </MenuItem>
            <MenuItem className='flex items-center'> 
                <span className='flex justify-center items-center'>
                    <button className='pe-4'>
                        <Cog6ToothIcon className="h-4 w-4"/> 
                    </button>
                    <span>Service Provider</span>
                </span>
            </MenuItem>
          </div>
        </Menu>
      </Sidebar>
  );
}