import React from 'react';
// import { Layout } from 'antd';
import './App.scss';
import CustomHeader from './components/header/Header';

// const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <>
    <CustomHeader />
    <div>Hello Farmer Market</div>
    </>
    // <Layout className="app-container">
    //   <Header className="app-header">
    //     <h1>My Project</h1>
    //   </Header>
    //   <Content className="app-content">
    //     <p>Welcome to my project!</p>
    //   </Content>
    //   <Footer className="app-footer">
    //     ©2024 My Project
    //   </Footer>
    // </Layout>
  );
};

export default App;
