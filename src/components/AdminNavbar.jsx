import React from "react";

import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Badge,
    Input,
  } from "@material-tailwind/react";
  import { RiSettings2Line } from "react-icons/ri";
  import { RiNotification4Line } from "react-icons/ri";
  import {
    UserCircleIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
    ChatBubbleLeftEllipsisIcon
  } from "@heroicons/react/24/solid";
   
  // profile menu component
  const profileMenuItems = [
    {
      label: "My Profile",
      icon: UserCircleIcon,
    },
    {
      label: "Edit Profile",
      icon: Cog6ToothIcon,
    },
    {
      label: "Inbox",
      icon: InboxArrowDownIcon,
    },
    {
      label: "Help",
      icon: LifebuoyIcon,
    },
    {
      label: "Sign Out",
      icon: PowerIcon,
    },
  ];
  function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
   
    const closeMenu = () => setIsMenuOpen(false);
   
    return (
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end" className="ms-12" style={{marginLeft:'3rem'}}>
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-12 !normal-case text-black"
          >
            <Avatar
              variant="circular"
              size="sm"
              alt="Saikumar"
              className=""
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <p className="me-2">Hi, Saikumar </p>
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="p-1">
          {profileMenuItems.map(({ label, icon }, key) => {
            const isLastItem = key === profileMenuItems.length - 1;
            return (
              <MenuItem
                key={label}
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    );
  }

  const navListItems = [
    {
      icon: RiNotification4Line,
      badge:21,
      styles: {
        backgroundColor:'#EAEBFF',
        fill: '#252762',
      },
      badgeStyles: {
        backgroundColor: '#252762',
        border: '2.62px solid #EAEBFF',
        color: '#EAEBFF',
      }
      
    },
    {
      icon: ChatBubbleLeftEllipsisIcon,
      badge:63,
      styles: {
        backgroundColor:'#EAEBFF',
        fill: '#252762',
      },
      badgeStyles: {
        backgroundColor: '#252762',
        border: '2.62px solid #EAEBFF',
        color: '#EAEBFF',
      }
    },
    {
      icon: RiSettings2Line,
      badge:19,
      styles: {
        backgroundColor:'#FF5B5B26',
        fill: '#FF5B5B',
      },
      badgeStyles: {
        backgroundColor: '#FF5B5B',
        border: '2.62px solid #EAEBFF',
      }
    },
  ];
   
  function NavList() {
    return (
      <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
        {navListItems.map(({ badge, icon, styles, badgeStyles }, key) => (
          <Typography
            key={key}  // Always add a unique key for elements in a list
            as="a"
            href="#"
            variant="small"
            color="gray"
            className="font-medium text-blue-gray-500"
          >
            <MenuItem className="flex items-center gap-2 lg:rounded-full">
              {/* Badge content */}
              <Badge
                content={badge}
                color={badgeStyles.backgroundColor}  // Assuming Badge accepts `color` like this
                style={badgeStyles}                 // Inline badge styles
              >
                <div className="rounded-full flex justify-center items-center h-[42px] w-[42px]" style={{backgroundColor:styles.backgroundColor}}>
                  {/* Icon with correct style usage */}
                  {React.createElement(icon, {
                    className: "rounded-full h-[25px] w-[25px]",
                    style: styles,  // Corrected style prop
                  })}
                </div>
              </Badge>
            </MenuItem>
          </Typography>
        ))}
        <ProfileMenu />
      </ul>
    );
  }
  
   
  export function AdminNavbar() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);
   
    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
   
    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setIsNavOpen(false),
      );
    }, []);
   
    return (
      <Navbar className="max-w-screen-3xl w-full ms-2 p-2 rounded-none">
        <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
          >
            <div className="relative w-full gap-2 md:w-max">
              <Input
                type="search"
                aria-placeholder="Search anything..."
                placeholder="Search anything..."
                containerProps={{
                  className: "min-w-[288px]",
                }}
                className=" !border-t-blue-gray-300 pl-9 placeholder:opacity-100 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
                labelProps={{
                  // className: "before:content-none after:content-none",
                }}
              />
              <div className="!absolute left-3 top-[13px]">
                <svg
                  width="13"
                  height="14"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
                    fill="#CFD8DC"
                  />
                  <path
                    d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                    stroke="#CFD8DC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </Typography>
          <div className="hidden lg:block">
            
          </div>
          <NavList />
        </div>
        <MobileNav open={isNavOpen} className="overflow-scroll">
          <NavList />
        </MobileNav>
      </Navbar>
    );
  }