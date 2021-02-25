import React, { CSSProperties } from 'react';
import './App.css';
import { Layout, Menu } from 'antd';


function App() {
  const { Header, Footer, Content,  } = Layout;
  return (
    
      <Layout>
      <Header style={headerStyle}> 
      
        <Menu style ={menuItemStyle}>
        <h1 style ={titleStyle}>MovieApp Name </h1> 
           <Menu.Item >Home</Menu.Item>
           <Menu.Item>Watchlist</Menu.Item>
           <Menu.Item>Seen</Menu.Item>
        </Menu>
      </Header>
      
      
      <Content></Content>
      <Footer></Footer>
    </Layout>
   
  );
}

const headerStyle: CSSProperties ={
  background: 'black',
  height: '4.5rem',
  position: 'absolute',
  width: '100%', 
  padding: '0',
  margin: '0',
  color: 'white'
  
}


const menuItemStyle: CSSProperties = {
  display: 'flex',
  position: 'relative', 
  color: 'white', 
  justifyContent: 'space-evenly', 
  listStyleType: 'none',
  alignItems: 'center',
  marginTop: '0'
  
  
}

const titleStyle: CSSProperties = {
  justifyItems:'flex-start',
  fontStyle: 'italic'
}
export default App;
