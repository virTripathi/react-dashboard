import React from "react";
import { AdminNavbar } from "../AdminNavbar";
import { AdminSidebar } from "../AdminSidebar";
import { Button } from "@material-tailwind/react";
import { MdOutlineCalendarMonth } from "react-icons/md";

export default function Layout() {
  const years = [
    { value: "2024", label: "This Year", isSelected: true },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
  ];
  const locations = [
    { value: "in", label: "India" },
    { value: "ge", label: "Germany" },
    { value: "en", label: "England" },
  ];
  const statuses = [
    { value: "1", label: "Active" },
    { value: "0", label: "Inactive" },
  ];
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <AdminSidebar />
      <main style={{ width: "calc(100vw - 65px)" }}>
        <AdminNavbar />
        <div className="m-4">
          <section id="filters" className="flex justify-between items-start">
            <div className="w-2/3">
                <div className="flex gap-2 justify-start">
                    <div className="select-container">
                        <MdOutlineCalendarMonth className="!h-4 !w-4 absolute left-3 !top-1/4" />
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="3"
                        stroke="#272727"
                        class="size-6"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                        </svg>
                        <select className="dropdown w-40 !ps-8" name="year" id="year">
                        {years.map((year) => (
                            <option value={year.value}>{year.label}</option>
                        ))}
                        </select>
                    </div>
                    <div className="select-container">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="3"
                        stroke="#272727"
                        class="size-6"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                        </svg>
                        <select className="dropdown w-36" name="location" id="location">
                        <option value="" selected>Location</option>
                        {locations.map((location) => (
                            <option value={location.value}>{location.label}</option>
                        ))}
                        </select>
                    </div>
                    <div className="select-container">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="3"
                        stroke="#272727"
                        class="size-6"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                        </svg>
                        <select className="dropdown w-24" name="status" id="status">
                        <option value="" selected>Status</option>
                        {statuses.map((status) => (
                            <option value={status.value}>{status.label}</option>
                        ))}
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-3 grid-rows-2 gap-2 m-4">
                        <div className="">
                            <div className="p-4  bg-white">
                                <div className="card-header flex gap-2">
                                    <div className="icon p-4 h-[60px] w-[60px] rounded-full bg-theme flex justify-center items-center">
                                        <svg width="40" height="40" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_2_3519)">
                                            <path d="M7.17674 11.9818H7.53472C8.91293 11.9818 10.0406 13.1095 10.0406 14.4877V27.0169C10.0406 28.3951 8.91293 29.5227 7.53472 29.5227H7.17674C5.79853 29.5227 4.6709 28.3951 4.6709 27.0169V14.4877C4.6709 13.1095 5.79853 11.9818 7.17674 11.9818ZM17.2001 4.46432C18.5783 4.46432 19.7059 5.59195 19.7059 6.97017V27.0169C19.7059 28.3951 18.5783 29.5227 17.2001 29.5227C15.8219 29.5227 14.6943 28.3951 14.6943 27.0169V6.97017C14.6943 5.59195 15.8219 4.46432 17.2001 4.46432ZM27.2235 18.7834C28.6017 18.7834 29.7293 19.911 29.7293 21.2893V27.0169C29.7293 28.3951 28.6017 29.5227 27.2235 29.5227C25.8453 29.5227 24.7176 28.3951 24.7176 27.0169V21.2893C24.7176 19.911 25.8453 18.7834 27.2235 18.7834Z" fill="#FA18FF"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2_3519">
                                            <rect width="34.29" height="34.29" fill="white"/>
                                            </clipPath>
                                            </defs>
                                        </svg>

                                    </div>
                                    <div className="titles">
                                        <h3 className="font-medium text-gray-600 text-[16px] leading-5 tracking-tight">Total Service Provider</h3>
                                        <h1 className="bold text-black font-bold text-[28px] leading-8 tracking-tighter">Rs. xxx.xx</h1>
                                    </div>
                                </div>
                                <hr />
                                <div className="card-footer flex gap-2">
                                    <div className="icon h-8 w-8 rounded">
                                    <svg width="78" height="51" viewBox="0 0 78 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 49.5323C1.33333 46.1989 4 40.0323 12 42.0323C22 44.5323 26.5 41.0322 27.5 33.5322C28.5 26.0322 34.5 19.0322 43 20.0322C51.5 21.0322 58.5 24.0322 60.5 10.0322C62.1 -1.16776 71.8333 0.365574 76.5 2.53224" stroke="#FBBC05" stroke-width="2" stroke-linecap="round"/>
                                    </svg>
                                    </div>
                                    <div>
                                        <p><span>+5%</span> more from last week</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-8 bg-red-500"></div>
                        <div className="h-8 bg-red-500"></div>
                        <div className="h-8 bg-red-500"></div>
                        <div className="h-8 bg-red-500"></div>
                        <div className="h-8 bg-red-500"></div>
                </div>
            </div>
            <div className="w-1/3">
                <div className="flex gap-2 justify-end">
                    <Button className="blue-button">Assign Order</Button>
                    <Button className="blue-button">Add New Service Provider</Button>
                </div>
                <div>
                    abs
                </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
