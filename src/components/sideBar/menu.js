import {
  BellRinging,
  Broadcast,
  Calendar,
  CaretDown,
  ClipboardText,
  Gear,
  Headset,
  House,
  ShareNetwork,
  UserCircle,
  UserGear,
  UsersThree,
} from "phosphor-react";
import React from "react";
import ElectionButton from "./electionButton";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { updateSubTab, updateTab } from "../../redux/reduxSlice";


const Menu = () => {
  const navigate = useNavigate();
  const tab = useSelector((state)=>state.tab.value.tab);
  const dispatch  = useDispatch()

  



  const menuItems = [
    {
      key: 0,
      icon: <House size={32} weight={`${tab=== 'Home'? 'fill':'regular'}`}/>,
      title: "Home",
      onclick: () => {
        dispatch(updateSubTab(""))
        dispatch(updateTab("Home"));
        navigate("/home");
        
      },
    },
    {
      key: 1,
      icon: <Broadcast size={32} weight={`${tab=== 'Live Studios'? 'fill':'regular'}`}/>,
      title: "Live Studios",
      onclick: () => {
        dispatch(updateSubTab(""))
        dispatch(updateTab("Live Studios"));
        navigate("/live-studios");
      },
    },
    {
      key: 2,
      icon: <ClipboardText size={32} weight={`${tab=== 'Election'? 'fill':'regular'}`}/>,
      title: "Election",
      onclick: () => {
        
        dispatch(updateTab("Election"));
      },
    },
    {
      key: 3,
      icon: <Calendar size={32} weight={`${tab=== 'Upcoming Events'? 'fill':'regular'}`}/>,
      title: "Upcoming Events",
      onclick: () => {
        dispatch(updateSubTab(""))
        dispatch(updateTab("Upcoming Events"));
      },
    },
    {
      key: 4,
      icon: <UsersThree size={32} weight={`${tab=== 'Clique'? 'fill':'regular'}`}/>,
      title: "Clique",
      onclick: () => {
        dispatch(updateSubTab(""))
        dispatch(updateTab("Clique"));
      },
    },
    {
      key: 5,
      icon: <ShareNetwork size={32} weight={`${tab=== 'Connections'? 'fill':'regular'}`}/>,
      title: "Connections",
      onclick: () => {
        dispatch(updateSubTab(""))
        dispatch(updateTab("Connections"));
      },
    },
    {
      key: 6,
      icon: <BellRinging size={32} weight={`${tab=== 'Notifications'? 'fill':'regular'}`}/>,
      title: "Notifications",
      onclick: () => {
        dispatch(updateSubTab(""))
        dispatch(updateTab("Notifications"));
        navigate("/notification")
      },
    },
    {
      key: 7,
      icon: <Gear size={32} weight={`${tab=== 'Settings'? 'fill':'regular'}`}/>,
      title: "Settings",
      onclick: () => {
        dispatch(updateSubTab(""))
        dispatch(updateTab("Settings"));
        navigate("/settings")
      },
    },
    {
      key: 8,
      icon: <UserCircle size={32} weight={`${tab=== 'Profile'? 'fill':'regular'}`}/>,
      title: "Profile",
      onclick: () => {
        dispatch(updateSubTab(""))
        dispatch(updateTab("Profile"));
      },
    },
    {
      key: 9,
      icon: <UserGear size={32} weight={`${tab=== 'Admin'? 'fill':'regular'}`}/>,
      title: "Admin",
      onclick: () => {
        dispatch(updateSubTab(""))
        dispatch(updateTab("Admin"));
      },
    },
    {
      key: 10,
      icon: <Headset size={32} weight={`${tab=== 'Agent'? 'fill':'regular'}`}/>,
      title: "Agent",
      onclick: () => {
        dispatch(updateSubTab(""))
        dispatch(updateTab("Agent"));
      },
    },
  ];
  
  return (
    <div className="w-full h-full  flex flex-col justify-between gap-1 overflow-y-scroll " >
      {menuItems.map(({ key, icon, title, onclick }) => (
        <div
        key={key}
        className= {`flex flex-row justify-start gap-5 items-center cursor-pointer  p-2 ${tab === title ? 'font-bold':'font-normal'}`} 
        onClick={onclick}
      >
        {/* icon */}
        {icon}
        {key == 2 ? (
          <ElectionButton className="flex flex-row gap-16 items-center" />
        ) : (
          <div className="flex flex-row gap-16 items-center">{title}</div>
        )}
      </div>

       
      ))}
    </div>
  );
};

export default Menu;
