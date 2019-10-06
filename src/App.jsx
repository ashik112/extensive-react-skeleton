import React from 'react';
import Popconfirm from 'antd/es/popconfirm';
import Icon from 'antd/es/icon';
import logo from './logo.svg';
import Badge from './components/Badge/Badge';
import Button from './components/CustomButtons/Button';
import './App.css';
import LoginPage from './pages/Login';

function App() {
  return (
    <div className="App">
      <LoginPage />
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <Badge color="primary">primary</Badge>*/}
      {/*  <p>*/}
      {/*    Edit*/}
      {/*    <code>src/App.js</code>*/}
      {/*    and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*  <Popconfirm*/}
      {/*    title="Are your sure?"*/}
      {/*    icon={<Icon type="question-circle" style={{ color: 'red' }} />}*/}
      {/*  >*/}
      {/*    <Button color="rose">*/}
      {/*      Test Antd with material kit*/}
      {/*    </Button>*/}
      {/*  </Popconfirm>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
