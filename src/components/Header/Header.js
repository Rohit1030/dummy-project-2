import React from 'react';
import {MenuOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import './Header.css';
import 'antd/dist/antd.css';

export default function Header(){
  const [visible, setVisible] = React.useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
    return (
        <nav className="nav-bar">
            <MenuOutlined 
                style={{fontSize: '25px'}} 
                onClick={showDrawer}
            />
            <Drawer placement="left" onClose={onClose} visible={visible}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
            <div className='mobile-header-text'>
                <h1>
                    OH MY <br />
                    STORE
                </h1>
            </div>
            <SearchOutlined style={{fontSize: '25px'}} />
            <ShoppingCartOutlined style={{fontSize: '25px', marginLeft: '10px'}} />
        </nav>
    );  
}