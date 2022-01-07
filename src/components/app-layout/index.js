import React, { useState } from "react";
import { Layout } from "antd";
import MenuList from "../menu-list";
import './style.less';

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
const { Header, Sider, Content } = Layout;

export default function APPLayout(props) {
    const { children } = props;
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div id="components-layout-demo-custom-trigger">
            <Layout>
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {collapsed
                        ? <MenuUnfoldOutlined className='trigger' onClick={() => setCollapsed(!collapsed)} />
                        : <MenuFoldOutlined className='trigger' onClick={() => setCollapsed(!collapsed)} />
                    }
                    <div className="logo" />
                </Header>
                <Layout className="site-layout">
                    <Sider trigger={null} collapsible={true} collapsed={collapsed}>
                        <MenuList />
                    </Sider>
                    <Layout>
                        <Content
                            className="site-layout-background"
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                minHeight: 280,
                            }}
                        >
                            {children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    );
}