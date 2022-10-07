import React, { useState } from 'react';

import { Image } from "../../Assets/Image";
import Content from "../../Component/Content/Content";

import "../../Pages/Admin/Admin.scss";
import {
    DownOutlined,
    StepForwardOutlined,
    SearchOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
    AppstoreOutlined,
    CopyrightOutlined, 
    CheckSquareOutlined,
    ContactsOutlined,
    MessageOutlined,
    BookOutlined,
    ShoppingCartOutlined,
    UserOutlined  
  } from '@ant-design/icons';
  import {  Layout, Menu,Input,Dropdown,Space,Switch } from 'antd';
// import SubMenu from 'antd/lib/menu/SubMenu';
  const { Header, Footer, Sider } = Layout;
  
  
  const menu = (
    <Menu theme='dark'
      items={[
        {
          label: 'Chinese',
          key: '0',
          icon:<StepForwardOutlined />,
        },
        {
          label: 'Spanish',
          key: '1',
          icon:<StepForwardOutlined />,
        },
        {
          label: 'French',
          key: '3',
          icon:<StepForwardOutlined />,
        },
        {
            label: 'Italian',
            key: '4',
            icon:<StepForwardOutlined />,
        },
        {
            label: 'Arabic',
            key: '5',
            icon:<StepForwardOutlined />, 
        },
      ]}
    />
  );


  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      Image,
      children,
      label,
    };
  }
  
  
export default function Admin() {
  const [theme, setTheme] = useState('dark');
  const changeTheme = (value) => {
    setTheme(value ? 'light' : 'dark');
  };
    const [collapsed, setCollapsed] = useState(false);
    const items = [
      getItem('Dashboard', 'sub1', <MailOutlined />, [
        getItem('Crypto', '1'),
        getItem(' Crm', '2'),
        getItem('Listing', '3'),
      ]),
      getItem('Widgets', '4', <PieChartOutlined />),
      getItem('Metrics', '5', <DesktopOutlined />),
      getItem('Layouts', '6', <ContainerOutlined />),
      getItem('Mail App', '7', <MailOutlined />),
      getItem('Todo App', '8', <CheckSquareOutlined />),
      getItem('Contacts App', '9', <ContactsOutlined />),
      getItem('Chat App', '10', <MessageOutlined />),
      getItem('Notes', '11', <BookOutlined />),
      getItem('Algolia', '12', <ShoppingCartOutlined />),
      getItem('FireBase CRUD', '13', <ContainerOutlined />),
      getItem('Profile', '14', <UserOutlined />),
      getItem('Wall App', '15', <ContainerOutlined />),
      getItem('General', 'sub2', <AppstoreOutlined />, [
        getItem('Button', '16'),
        getItem('Icon', '17'),
      ]),
      getItem('Navigation', 'sub2', <AppstoreOutlined />, [
        getItem('Affix', '18'),
        getItem('Bradcrumb', '19'),
        getItem('Dropdown', '20'),
        getItem('Menu', '21'),
        getItem('Pagation', '22'),
        getItem('Steps', '23'),
      ]),
      getItem('Data Entry', 'sub2', <AppstoreOutlined />, [
        getItem('AutoComplete', '24'),
        getItem('Checkbox', '25'),
        getItem('Cascader', '26'),
        getItem('Datepiker', '27'),
        getItem('Form', '28'),
        getItem('Inputnumber', '29'),
        getItem('Input', '30'),
        getItem('Mention', '31'),
        getItem('Rate', '32'),
        getItem('Radio', '33'),
        getItem('Switch', '34'),
        getItem('Slider', '35'),
        getItem('Select', '36'),
        getItem('TreeSelect', '37'),
        getItem('Transfer', '38'),
        getItem('Time picker', '39'),
        getItem('Upload', '40'),        
      ]),
    ];
  return (
    <div className='admin'>
        <Layout className="layout">
        <Switch onChange={changeTheme} /> 
            <Sider className="site-layout-sider" trigger={null} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="logo" mode="inline">
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuUnfoldOutlined, {
                    className: 'trigger',
                    onClick: () => setCollapsed(!collapsed),
                })}
                <a href="/" className="wieldy">
                  <img src={Image.logo} alt='Business_twoimg' className='logo'/>
                </a>
                </div>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme={theme}
                    inlineCollapsed={collapsed}
                    items={items}
                  />
                
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-header">
                    <div className='header-wrapper'>
                        <div className='header-left'>
                            <span><SearchOutlined /></span>   
                            <span><Input placeholder="Search in app..." bordered={false} /></span>
                        </div>
                        <div className='right-side'>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <a onClick={(e) => e.preventDefault()}>
                              <span className='dropdownimg'>
                                <img src={Image.English} alt='Business_twoimg' className='Englishimg'/>
                              </span>
                            <Space>
                                English
                                <DownOutlined />
                            </Space>
                            </a>
                        </Dropdown>
                        </div>
                    </div>
                </Header>
                <Content/>
                
                <Footer className="site-layout-footer">Copyright Wieldy <CopyrightOutlined /> 2022 </Footer>
            </Layout>
        </Layout>
    </div>
  )
}
