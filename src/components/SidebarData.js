import React from "react";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import * as ImIcons from "react-icons/im";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";
import * as CgIcons from "react-icons/cg";
import * as GrIcons from "react-icons/gr";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icons: <AiIcons.AiOutlineHome />,
    cName: "nav-text",
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    icons: <AiIcons.AiOutlineDashboard />,
    cName: "nav-text",
  },
  {
    title: "Expenses",
    path: "/expenses",
    icons: <GiIcons.GiExpense />,
    cName: "nav-text",
  },
  {
    title: "Groups",
    path: "/groups",
    icons: <AiIcons.AiOutlineGroup />,
    cName: "nav-text",
  },
  {
    title: "Plan",
    path: "/plan",
    icons: <GrIcons.GrPlan />,
    cName: "nav-text",
  },
  {
    title: "User List",
    path: "/userlist",
    icons: <CgIcons.CgUserList />,
    cName: "nav-text",
  },
  {
    title: "Add default categoty",
    path: "/adddefaulcategory",
    icons: <BiIcons.BiCategory />,
    cName: "nav-text",
  },
  {
    title: "Leave feedback",
    path: "/leavefeedback",
    icons: <MdIcons.MdOutlineFeedback />,
    cName: "nav-text",
  },
  {
    title: "Profile",
    path: "/profile",
    icons: <CgIcons.CgProfile />,
    cName: "nav-text",
  },
  {
    title: "Exit",
    path: "/exit",
    icons: <IoIcons.IoMdExit />,
    cName: "nav-text",
  },
];
