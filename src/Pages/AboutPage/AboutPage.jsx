import React from 'react'
import "../../Pages/AboutPage/AboutPage.scss";

import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';

  import { Layout, Menu } from 'antd';
  const { Header, Content, Footer, Sider } = Layout;

  const items = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
  ].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }));
  

export default function AboutPage() {
  return (
    <div className='about'>
        <Layout hasSider className='layouts'>
            <Sider className='siderPart'>
            <div className="logo">
            <a href="/">Simfrom</a>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
            </Sider>
        <Layout className="site-layout">
            <Header className="site-layout-background" >
            <Menu mode="horizontal" theme="dark" >
                <Menu.Item >item 1</Menu.Item>
                <Menu.Item>item 2</Menu.Item>
                <Menu.SubMenu title="sub menu">
                    <Menu.Item>item 3</Menu.Item>
                </Menu.SubMenu>
            </Menu>;
            </Header>
            <Content className="site-layout-content">
                <div className="site-layout-background">
                <p>long content</p>
                <p>long content</p>
               
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quia est laudantium. Vitae, sequi. Sunt ipsum magni dolores dignissimos tempore! </p>
                <p>long content</p>
               
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quia est laudantium. Vitae, sequi. Sunt ipsum magni dolores dignissimos tempore! </p>
                <p>long content</p>
               
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quia est laudantium. Vitae, sequi. Sunt ipsum magni dolores dignissimos tempore! </p>
                <p>long content</p>
               
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quia est laudantium. Vitae, sequi. Sunt ipsum magni dolores dignissimos tempore! </p>
                <p>long content</p>
               
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quia est laudantium. Vitae, sequi. Sunt ipsum magni dolores dignissimos tempore! </p>
                <p>long content</p>
               
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quia est laudantium. Vitae, sequi. Sunt ipsum magni dolores dignissimos tempore! </p>
                <p>long content</p>
               
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quia est laudantium. Vitae, sequi. Sunt ipsum magni dolores dignissimos tempore! </p>
                <p>long content</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quia est laudantium. Vitae, sequi. Sunt ipsum magni dolores dignissimos tempore! </p>
                <p>long content</p>
               

                <p>long content</p>
                <p>long content</p>
                </div>
            </Content>
            <Footer className="site-layout-footer">
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>
  </Layout>

    </div>
  )
}
