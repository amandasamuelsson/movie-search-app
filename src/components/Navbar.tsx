import React from 'react';
import { Menu } from 'antd';
import { Layout, Row, Col } from 'antd';
import { CSSProperties } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';

function Navbar () {
  const { Header } = Layout;
  
  return (  
    <ErrorBoundary>
      <Header style={layoutStyle}>
        <Row style={{width: '100%'}}>
          <Col span={8}>
            <Link to='/'><img src={logo} alt="logo" style={logoStyle} /></Link>
          </Col>
          <Col span={10} offset={6}>
            <Menu mode="horizontal" style={menuStyle}>
              <Menu.Item key="1"><Link to='/' style={{color: 'white'}}>Home</Link></Menu.Item>
              <Menu.Item key="2"><Link to='/watchlist' style={{color: 'white'}}>Watchlist</Link></Menu.Item>
              <Menu.Item key="3"><Link to='/seen' style={{color: 'white'}}>Seen</Link></Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header> 
    </ErrorBoundary>
  );
}
  
 const layoutStyle: CSSProperties = {
  width: '100%', 
  background: 'black',
  height: '6rem',
  textDecoration:'none',
  zIndex: 100,
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: 'none',  
 }
  
 const menuStyle: CSSProperties = {
  float: 'right',
  background: 'black', 
  color: 'white', 
  display: 'flex', 
  justifyContent: 'space-between',
  alignItems: 'flex-end', 
  marginTop: '1.2rem'
 }
  
 const logoStyle: CSSProperties = {
  height: window.innerWidth > 768 ? '4rem' : '2rem',
  margin: '1rem',
  marginTop: window.innerWidth > 768 ? '1rem' : '2rem',
  width: window.innerWidth > 768 ? '12.5rem' : '6rem',
  marginRight: '10rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center' 
 }
 
 export default Navbar;