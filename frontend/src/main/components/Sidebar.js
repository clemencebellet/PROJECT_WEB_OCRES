import './Sidebar.css'
import React, { Component } from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

export default function Nav() {


    return (
        <div>
            <ProSidebarProvider>

                <Sidebar>
                    <Menu>
                        <SubMenu label="Charts">
                            <MenuItem> Pie charts </MenuItem>
                            <MenuItem> Line charts </MenuItem>
                        </SubMenu>
                        <MenuItem> Documentation </MenuItem>
                        <MenuItem> Calendar </MenuItem>
                    </Menu>
                </Sidebar>
            </ProSidebarProvider>
        </div>
    );
}
