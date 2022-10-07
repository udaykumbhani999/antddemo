import React, { useState } from 'react';

import "./Content.scss";

import Mail from "../../Component/Mail/Mail";
import { Image } from "../../Assets/Image";
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button,Progress,Form,Select,Input,Carousel,Tabs,Card,Rate,BackTop } from 'antd';
export default function Content() {
  const [size] = useState('false');
  
  return (
    <div className="site-layout-content">
      <div className="site-layout-background">
        <div className="content-wrapper">
          <div className="content-main">
            <div className="content-box">
              <div className="content-part">
                <span>$9.26</span>
                <p>Bitcoin Price</p>
              </div>
              <div className="content-image">
                <img
                  src={Image.Bitcoin}
                  alt="Business_twoimg"
                  className="Bitcoinimg"
                />
              </div>
            </div>
          </div>
          <div className="content-main">
            <div className="content-box">
              <div className="content-part">
                <span>$9.26</span>
                <p>Bitcoin Price</p>
              </div>
              <div className="content-image">
                <img
                  src={Image.Bitcoin}
                  alt="Business_twoimg"
                  className="Bitcoinimg"
                />
              </div>
            </div>
          </div>
          <div className="content-main">
            <div className="content-box">
              <div className="content-part">
                <span>$9.26</span>
                <p>Bitcoin Price</p>
              </div>
              <div className="content-image">
                <img
                  src={Image.Bitcoin}
                  alt="Business_twoimg"
                  className="Bitcoinimg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" row " justify="space-between">
          <div className=" col-12" span={12}>
              <p className='para-title'>Your Portfolio Balance</p>
            <div className="portfolio-box">
              <div className="portfolio-content">
                <span className="count">$179,626</span>
                <p className='para-sub'>Overall balance</p>
                <div className='button'>
                  <Button className='primery' type="primary" size={size}>Deposit</Button>
                  <Button className='custom' type="primary" size={size}>Withdraw</Button>
                </div>
                <a href="/" className='addlink'><PlusCircleOutlined /> Add New Wallet</a>
              </div>
              <div className='portfolio-progress'>
                <p className='portfolio-title'>Portfolio Distribution</p>
                <div className='progressbar'>
                  <span className='progress-span'>BTC 8.74</span>
                  <Progress percent={78} />
                  <span className='progress-span'>RPL 1.23</span>
                  <Progress percent={48} status="active" className='progress-pink'/>
                  <span className='progress-span'>LTE 0.71</span>
                  <Progress percent={34} status="active" className='progress-orange'/>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-12" span={12}>
                <p className='para-title'>Your Portfolio Balance</p>
            <div className="portfolio-box">
              <div className="portfolio-content">
                <span className="count">$179,626</span>
                <p className='para-sub'>Overall balance</p>
                <div className='button'>
                  <Button className='primery' type="primary" size={size}>Deposit</Button>
                  <Button className='custom' type="primary" size={size}>Withdraw</Button>
                </div>
                <a href="/" className='addlink'><PlusCircleOutlined /> Add New Wallet</a>
              </div>
              <div className='portfolio-progress'>
                <p className='portfolio-title'>Portfolio Distribution</p>
                <div className='progressbar'>
                  <span className='progress-span'>BTC 8.74</span>
                  <Progress percent={78} />
                  <span className='progress-span'>RPL 1.23</span>
                  <Progress percent={48} status="active" className='progress-pink'/>
                  <span className='progress-span'>LTE 0.71</span>
                  <Progress percent={34} status="active" className='progress-orange'/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='payment-row'>
          <div span={12} className='payment-col'>
            <div className="box">
              <div className='payments-content'>
                <p className='paymnet-title'>Currency Calculator</p>
                <p className='paymnet-para'>1.87 BTC equals</p>
                <span className='payment-count'>11466.78 USD</span>
                <p className='payment-subpara'>@ 1 BTC = 6718.72 USD</p>
              </div>
            </div>
          </div>
          <div span={12} className='payment-col'>
              <div className='form-wrapper'>
                <div className='form-col'>
                  <Form.Item label="From:" >
                    <Select>
                      <Select.Option value="demo">BTC</Select.Option>
                      <Select.Option value="demo">USD</Select.Option>
                    </Select>
                  </Form.Item>
                </div>
                <div className='form-col'>
                  <Form.Item label="To:">
                    <Select>
                      <Select.Option value="demo">BTC</Select.Option>
                      <Select.Option value="demo">USD</Select.Option>
                    </Select>
                  </Form.Item>
                </div>
                <div className='form-col'>
                  <Form.Item label="Amount (BTC):" >
                   <Input
                    type="text"
                    placeholder='0.0'
                    />
                  </Form.Item>
                </div>
              </div>
          </div>
        </div>

        <div className='slider-tabbar'>
          <div className='carousel'>
            <Carousel autoplay>
              <div className='slider-part'>
                <div className='slide-wrap'>
                  <div className='slider-img'>
                    <img src={Image.slidefirst} alt="sliderimage" className="sliderimage"/>
                  </div>
                  <div className='slider-content'>
                    <h3>lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ullam tempora, eligendi facere quam iusto velit, nemo temporibus distinctio quos ab nisi aliquam quo error, veniam praesentium perferendis. Aliquid, illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minima, dolore possimus qui nostrum tempora ab dolores doloremque expedita labore?</p>
                  </div>
                </div>
              </div>
              <div className='slider-part'>
                <div className='slide-wrap'>
                  <div className='slider-img'>
                    <img src={Image.slidesecond} alt="sliderimage" className="sliderimage"/>
                  </div>
                  <div className='slider-content'>
                    <h3>lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ullam tempora, eligendi facere quam iusto velit, nemo temporibus distinctio quos ab nisi aliquam quo error, veniam praesentium perferendis. Aliquid, illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minima, dolore possimus qui nostrum tempora ab dolores doloremque expedita labore?</p>
                  </div>
                </div>
              </div>
              <div className='slider-part'>
                <div className='slide-wrap'>
                  <div className='slider-img'>
                    <img src={Image.slidethird} alt="sliderimage" className="sliderimage"/>
                  </div>
                  <div className='slider-content'>
                    <h3>lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ullam tempora, eligendi facere quam iusto velit, nemo temporibus distinctio quos ab nisi aliquam quo error, veniam praesentium perferendis. Aliquid, illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minima, dolore possimus qui nostrum tempora ab dolores doloremque expedita labore?</p>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>

          <div className='tabbar'>
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="All" key="1">
                <div className='tabfirst'>
                  <div className='tabfirstimg'>
                    <img src={Image.slidesecond} alt="sliderimage" className="tabfirstimage"/>
                  </div>
                  <div className='slider-content'>
                    <h3>lorem ipsum</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi recusandae delectus sapiente rem perspiciatis omnis eligendi, placeat aperiam veniam esse magnam cumque harum officiis laudantium, laboriosam iusto, explicabo officia facilis? Iste corrupti qui, vero culpa dolorem ad cupiditate labore sed ipsum, doloremque fugit tempore? Fugiat, perspiciatis sit. Assumenda, nisi optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minima, dolore possimus qui nostrum tempora ab dolores doloremque expedita labore?</p>
                  </div>
                </div>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Bitcoin" key="2">
              <div className='tabfirst'>
                  <div className='tabfirstimg'>
                    <img src={Image.slidethird} alt="sliderimage" className="tabfirstimage"/>
                  </div>
                  <div className='slider-content'>
                    <h3>lorem ipsum</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi recusandae delectus sapiente rem perspiciatis omnis eligendi, placeat aperiam veniam esse magnam cumque harum officiis laudantium, laboriosam iusto, explicabo officia facilis? Iste corrupti qui, vero culpa dolorem ad cupiditate labore sed ipsum, doloremque fugit tempore? Fugiat, perspiciatis sit. Assumenda, nisi optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minima, dolore possimus qui nostrum tempora ab dolores doloremque expedita labore?</p>
                  </div>
                </div>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Ripple" key="3">
              <div className='tabfirst'>
                  <div className='tabfirstimg'>
                    <img src={Image.slidefirst} alt="sliderimage" className="tabfirstimage"/>
                  </div>
                  <div className='slider-content'>
                    <h3>lorem ipsum</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi recusandae delectus sapiente rem perspiciatis omnis eligendi, placeat aperiam veniam esse magnam cumque harum officiis laudantium, laboriosam iusto, explicabo officia facilis? Iste corrupti qui, vero culpa dolorem ad cupiditate labore sed ipsum, doloremque fugit tempore? Fugiat, perspiciatis sit. Assumenda, nisi optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minima, dolore possimus qui nostrum tempora ab dolores doloremque expedita labore?</p>
                  </div>
                </div>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Litecoin" key="4">
              <div className='tabfirst'>
                  <div className='tabfirstimg'>
                    <img src={Image.slidesecond} alt="sliderimage" className="tabfirstimage"/>
                  </div>
                  <div className='slider-content'>
                    <h3>lorem ipsum</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi recusandae delectus sapiente rem perspiciatis omnis eligendi, placeat aperiam veniam esse magnam cumque harum officiis laudantium, laboriosam iusto, explicabo officia facilis? Iste corrupti qui, vero culpa dolorem ad cupiditate labore sed ipsum, doloremque fugit tempore? Fugiat, perspiciatis sit. Assumenda, nisi optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minima, dolore possimus qui nostrum tempora ab dolores doloremque expedita labore?</p>
                  </div>
                </div>
              </Tabs.TabPane>
            </Tabs>
          </div>
        </div>
        
        <div className='product-card'>
          <div className='product-wrapper'>
            <div className='product-col'>
              <Card cover={<img src={Image.iPhone} alt="iPhone" className="product-img"/>}>
                <div className='card-content'>
                  <p className='product-title'>iPhone 7, Black,500Htz</p>
                  <span className='product-rate'>$359</span>
                  <div>
                  <Rate allowHalf defaultValue={2} />
                  </div>
                  <p className='product-content'>Bluetooth speaker, Karaoke singing, Car Stereo, instrument recording etc... •</p>
                  <div className='product-btn'>
                    <Button>Add To Cart</Button>
                    <Button type="primary">Read More</Button>
                  </div>
                </div>
              </Card>
            </div>
            <div className='product-col'>
              <Card cover={<img src={Image.dron} alt="dron" className="product-img"/>}>
                <div className='card-content'>
                  <p className='product-title'>Bizinto 1 Three Pin, White</p>
                  <span className='product-rate'>$399</span>
                  <div>
                  <Rate allowHalf defaultValue={2.5} />
                  </div>
                  <p className='product-content'>Bizinto is an indirectly manufacture of Power strip in Delhi and supplying...</p>
                  <div className='product-btn'>
                    <Button>Add To Cart</Button>
                    <Button type="primary">Read More</Button>
                  </div>
                </div>
              </Card>
            </div>
            <div className='product-col'>
              <Card cover={<img src={Image.car} alt="car" className="product-img"/>}>
                <div className='card-content'>
                  <p className='product-title'>Samons Flameless, Black</p>
                  <span className='product-rate'>$39</span>
                  <div>
                  <Rate allowHalf defaultValue={3} />
                  </div>
                  <p className='product-content'>Now light your cigarette buds with ease by using this USB Rechargeable...</p>
                  <div className='product-btn'>
                    <Button>Add To Cart</Button>
                    <Button type="primary">Read More</Button>
                  </div>
                </div>
              </Card>
            </div>
            <div className='product-col'>
              <Card cover={<img src={Image.headphone} alt="headphone" className="product-img"/>}>
                <div className='card-content'>
                  <p className='product-title'>Sony MDR-ZX110, White</p>
                  <span className='product-rate'>$15</span>
                  <div>
                  <Rate allowHalf defaultValue={3.5} />
                  </div>
                  <p className='product-content'>Experience great sound quality with weight and foldable headphones...</p>
                  <div className='product-btn'>
                    <Button>Add To Cart</Button>
                    <Button type="primary">Read More</Button>
                  </div>
                </div>
              </Card>
            </div>
            <div className='product-col'>
              <Card cover={<img src={Image.watch} alt="watch" className="product-img"/>}>
                <div className='card-content'>
                  <p className='product-title'>watch, Black</p>
                  <span className='product-rate'>$39</span>
                  <div>
                  <Rate allowHalf defaultValue={4} />
                  </div>
                  <p className='product-content'>Now light your cigarette buds with ease by using this USB Rechargeable Electronic Flameless Lighter.</p>
                  <div className='product-btn'>
                    <Button>Add To Cart</Button>
                    <Button type="primary">Read More</Button>
                  </div>
                </div>
              </Card>
            </div>
            <div className='product-col'>
              <Card cover={<img src={Image.alarm_clock} alt="alarm_clock" className="product-img"/>}>
                <div className='card-content'>
                  <p className='product-title'>Alarm Clock, Gold</p>
                  <span className='product-rate'>$699</span>
                  <div>
                  <Rate allowHalf defaultValue={5} />
                  </div>
                  <p className='product-content'>Horo is a home grown brand with utmost emphasis on quality goods</p>
                  <div className='product-btn'>
                    <Button>Add To Cart</Button>
                    <Button type="primary">Read More</Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <div className='mailpart'>
          <Mail />
        </div>
        
        <BackTop>
          <div className='up-btn'>UP</div>
        </BackTop>
      </div>
    </div>
  );
}
