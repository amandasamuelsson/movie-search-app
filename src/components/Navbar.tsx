import { Menu } from 'antd';
import { Layout } from 'antd';
import { CSSProperties } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';



function Navbar () {
  const { Header } = Layout;

return ( 
 
<Layout style={layoutStyle}>
  <Header style={{background: 'black', borderBottom:'none'}}>
    <img src= {logo} alt="logo" style={logoStyle} />
    <Menu mode="horizontal" style= {menuStyle}>
      <Link to='/'><Menu.Item key="1">Home</Menu.Item></Link>
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
 
 

 