import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import React from "react";
export default function MenuList() {
    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['mobx']}>
            <SubMenu title="学习">
                <Menu.Item key='mobx'>{'Mobx'}</Menu.Item>
                <Menu.Item key='other'>{'other'}</Menu.Item>
            </SubMenu>
        </Menu>
    );
}