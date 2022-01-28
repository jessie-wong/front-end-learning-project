import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const {SubMenu} = Menu;
export default function MenuList() {
    return (
        <Menu
            theme="dark"
            mode="inline"
            // defaultSelectedKeys={['mobx']}
            // defaultOpenKeys={['study']}
            style={{ height: 'calc(100vh - 64px)' }}
        >
            <SubMenu title="study" key='study'>
                <Menu.Item key='mobx-app'>
                    <Link to={'/mobx-app'}>
                        {'Mobx'}
                    </Link>
                </Menu.Item>
                <Menu.Item key='css-layout'>
                    <Link to={'/css-layout'}>
                        {'布局'}
                    </Link>
                </Menu.Item>
                <Menu.Item key='components-store'>
                    <Link to={'/components-store'}>
                        {'组件库'}
                    </Link>
                </Menu.Item>
                <Menu.Item key='other-app'>
                    <Link to={'/other-app'}>
                        {'Other'}
                    </Link>
                </Menu.Item>
            </SubMenu>
        </Menu>
    );
}