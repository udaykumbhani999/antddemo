import React, { useState } from 'react';

import "./Content.scss";
import { Image } from "../../Assets/Image";
import { PlusCircleOutlined } from '@ant-design/icons';
import { Button,Progress } from 'antd';
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
          <div span={12}></div>
        </div>
      </div>
    </div>
  );
}
