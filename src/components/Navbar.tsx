import { Menu } from 'antd';
import { Layout } from 'antd';
import { CSSProperties } from 'react';
import logo from '../assets/logo.png';



function Navbar () {
  const { Header } = Layout;

return ( 
 
<Layout style={layoutStyle}>
  <Header style={{background: 'black', textDecoration:'none'}}>
    <img src= {logo} alt="logo" style={logoStyle} />
    <Menu mode="horizontal" style= {menuStyle}>
      <Menu.Item key="1">Home</Menu.Item>
      <Menu.Item key="2">Watchlist</Menu.Item>
      <Menu.Item key="3">Seen</Menu.Item>
    </Menu>
  </Header>
  
</Layout>

);

}




const layoutStyle: CSSProperties = {
  float: 'left', 
  width: '100%', 
  background: 'black',
  height: '6rem',
  textDecoration:'none',
  
}
 

const menuStyle: CSSProperties = {
  float: 'right',
  background: 'black', 
  color: 'white', 
  display: 'flex', 
  justifyContent: 'space-evenly',
  alignItems: 'center', 
  textDecorationLine : 'none'
}

const logoStyle: CSSProperties = {
  height: '4rem',
  margin: '1rem',
  width: '12.5rem'

}
export default Navbar; 
 
 

 