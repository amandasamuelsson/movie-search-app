import React from 'react';
import { Menu } from 'antd';
import { Layout } from 'antd';
import { CSSProperties } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';


function Navbar () {
  const { Header } = Layout;
  return ( 

  <ErrorBoundary>
    <Layout style={layoutStyle}>
      <Header style={{background: 'black', borderBottom:'none'}}>
        <Link to='/'><img src= {logo} alt="logo" style={logoStyle} /></Link>
        <Menu mode="horizontal" style= {menuStyle}>
          <Menu.Item key="1"><Link to='/' style={{color: 'white'}}>Home</Link></Menu.Item>
          <Menu.Item key="2"><Link to='/watchlist' style={{color: 'white'}}>Watchlist</Link></Menu.Item>
          <Menu.Item key="3"><Link to='/seen' style={{color: 'white'}}>Seen</Link></Menu.Item>
        </Menu>
      </Header>   
    </Layout>
  </ErrorBoundary>
  
  );
}

const layoutStyle: CSSProperties = {
  float: 'left', 
  width: '100%', 
  background: 'black',
  height: '6rem',
  textDecoration:'none',
  zIndex: 100,
  
}
 
const menuStyle: CSSProperties = {
  float: 'right',
  background: 'black', 
  color: 'white', 
  display: 'flex', 
  justifyContent: 'space-between',
  alignItems: 'center', 
  marginTop: '1.2rem'
}

const logoStyle: CSSProperties = {
  height: '4rem',
  margin: '1rem',
  width: '12.5rem'

}
export default Navbar; 
 
 

 