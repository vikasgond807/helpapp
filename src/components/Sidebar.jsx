import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  // SubMenu,
  SidebarHeader,
} 
from "react-pro-sidebar";
import { FaGem } from "react-icons/fa";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import "../App.css"
const Sidebar = () => {
  return (
    <>
      <ProSidebar className="sidebar">
        <SidebarHeader>
          <h3 style={{ textAlign: "center" }} className="heading">
            DESTURE
          </h3>
        </SidebarHeader>
        <Menu iconShape="square">
          <MenuItem icon={<FaGem />}>
            <Link to="/helpapp">Login & Register</Link>
          </MenuItem>
          
          <MenuItem icon={<FaGem />}>
            <Link to="/detection">Detection & Execution</Link>
          </MenuItem>
          <MenuItem icon={<FaGem />}>
            <Link to="/default">Default Gesture</Link>
          </MenuItem>
          <MenuItem icon={<FaGem />}>
            <Link to="/addgesture">Add Gesture</Link>
          </MenuItem>
          <MenuItem icon={<FaGem />}>
            <Link to="/delete">Delete Gesture</Link>
          </MenuItem>
          <MenuItem icon={<FaGem />}>
            <Link to="/edit">Edit Gesture</Link>
          </MenuItem>
          
          <MenuItem icon={<FaGem />}>
            <Link to="/reset">Reset Gesture</Link>
          </MenuItem>
          <MenuItem icon={<FaGem />}>
            <Link to="/faq">FAQ's</Link>
          </MenuItem>
        </Menu>
      </ProSidebar>
    </>
  );
};

export default Sidebar;
