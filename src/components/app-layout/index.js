import React, { useState } from "react";
import { Layout } from "antd";
import MenuList from "./menu-list.js";
import MainContent from "./main-content.js";
import { BrowserRouter, HashRouter } from "react-router-dom";
import './style.less';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

export default function APPLayout(props) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div id="components-layout-demo-custom-trigger">
            <BrowserRouter>
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
                                {/* <div>
                                <iframe
                                    ref={'iframe'}
                                    src={url}
                                />
                            </div> */}
                                {/* {children} */}
                                <MainContent />
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </BrowserRouter>
        </div>
    );
}