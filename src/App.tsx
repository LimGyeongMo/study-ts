import React, { useState } from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    CopyrightOutlined,
    CalendarOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import SiteList from "./components/siteList";
import CoinList from "./components/coinList";
import { Link, Route, Routes, useLocation } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const location = useLocation(); // 현재 URL 가져오기
    const selectedKey = location.pathname; // 현재 URL을 selectedKeys로 사용

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider
                theme="light"
                trigger={null}
                collapsible
                collapsed={collapsed}
            >
                <div
                    className="logo"
                    style={{
                        height: 32,
                        margin: 16,
                        background: "rgba(255, 255, 255, 0.3)",
                    }}
                />
                <div className="demo-logo-vertical" />
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={[selectedKey]}
                >
                    <Menu.Item key="/study" icon={<CalendarOutlined />}>
                        <Link to="/study">할 일</Link>
                    </Menu.Item>
                    <Menu.Item key="/coin-info" icon={<CopyrightOutlined />}>
                        <Link to="/coin-info">코인 정보</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        <Link to="/other">nav 3</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={
                            collapsed ? (
                                <MenuUnfoldOutlined />
                            ) : (
                                <MenuFoldOutlined />
                            )
                        }
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: "16px",
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        padding: "50px",
                        display: "inline-block",
                    }}
                >
                    <Routes>
                        <Route path="/" element={<SiteList />} />
                        <Route path="/study" element={<SiteList />} />
                        <Route path="/coin-info" element={<CoinList />} />
                        {/* <Route path="/other" element={<OtherPage />} /> */}
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;
{
    /* <SiteList /> */
}
