import React from 'react'
import "./Mail.scss";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input,Empty } from 'antd';
export default function Mail() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
  return (
    <div className='mail-wrapper'>
        <div className='mail-box'>
            <div className='form-main'>
                <p className='signin'>Sign In</p>
                <Form name="normal_login" className="login-form" initialValues={{ remember: true, }} onFinish={onFinish}>
                    <Form.Item name="Email" rules={[ { required: true, message: 'Please input your Email!', }, ]}>
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    
                    <Form.Item name="password" rules={[ { required: true, message: 'Please input your Password!', }, ]}>
                        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password"/>
                    </Form.Item>
                    
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">Forgot password</a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
                    </Form.Item>
                </Form>
            </div>
            
            <div className='form-main'>
                <div className='empty-box'>
                    <Empty />
                </div>
            </div>
        </div>
    </div>
  )
}
