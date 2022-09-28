import React, { useState } from 'react';

import "../../Pages/HomePage/HomePage.scss";

import { Avatar } from "antd";
import { UserOutlined,InstagramOutlined,FacebookOutlined,TwitterOutlined,LinkedinOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";


import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
  } from '@ant-design/icons';
  
  const { Header, Content, Footer, Sider } = Layout;
  
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  
  const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
  ];
  




export default function HomePage() {
    const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className="Layout">
      <Header className="header">
        <div className="container">
          <div className="header-row">
            <div className="header-col">
              <a href="/" className="logo-part">
                Simfrom
              </a>
            </div>
            <div className="header-menu">
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={new Array(10).fill(null).map((_, index) => {
                const key = index + 1;
                return {
                    key,
                    label: `nav ${key}`,
                };
                })}
            />
            </div>
            <div className="header-col">
              <a href="/" className="profile">
                <Avatar icon={<UserOutlined />} />
              </a>
            </div>
          </div>
        </div>
      </Header>
      <Layout className="Layout-left">
        <Sider className='siderPart' collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)} >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <div className="right-side">
            <Content className="Content">
                <div className="content-row">
                    <div className="content-box">
                        <h3>Top Talent</h3>
                        <p>Thoroughly vetted team of talent that is incentivized to deliver.</p>
                    </div>
                    <div className="content-box">
                        <h3>Reporting</h3>
                        <p>Monitor the progress and health of your project based on key attributes like milestone tasks, bugs, blockers, and team happiness.</p>
                    </div>
                    <div className="content-box">
                        <h3>Managed Process</h3>
                        <p>Your dedicated Tech Lead does all the heavy-lifting of managing the project team so you can focus on what’s important.</p>
                    </div>
                </div>
            </Content>
            <Footer className="footer">
                <div className="ft-row">
                    <div className="ft-col">
                        <p className="para">Copyright © 2022 Simform. All Rights Reserved.</p>
                    </div>
                    <div className="icon-list">
                    <span className="avtar"><Avatar icon={<InstagramOutlined />} /></span> 
                    <span className="avtar"><Avatar icon={<FacebookOutlined />} /></span>
                    <span className="avtar"><Avatar icon={<TwitterOutlined />} /></span>
                    <span className="avtar"><Avatar icon={<LinkedinOutlined />} /></span>
                    </div>
                </div>
            </Footer>
        </div>   
        
      </Layout>
    </Layout>
  );
}
