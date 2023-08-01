import React from "react";
import { Avatar, Menu } from "@mantine/core";
import { useNavigate } from "react-router-dom";
const ProfileMenu = ({user, logout}) => {
      const navigate = useNavigate();
  return (
    <div>
      <Menu>
        <Menu.Target>
          <Avatar src={user} radius={'xl'}/>
        </Menu.Target>
        <Menu.Dropdown>
            <Menu.Item >
                Favourites
            </Menu.Item>

            <Menu.Item >
                Bookings
            </Menu.Item>

            <Menu.Item onClick={()=>{
                localStorage.clear();
                logout();
            }}>
                Logout
            </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
