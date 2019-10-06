import React from 'react';
import { Popconfirm, Icon } from 'antd';
import logo from './logo.svg';
import Badge from './components/Badge/Badge';
import Button from './components/CustomButtons/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Badge color="primary">primary</Badge>
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Popconfirm
          title="Are your sure?"
          icon={<Icon type="question-circle" style={{ color: 'red' }} />}
        >
          <Button color="rose">
            Test Antd
          </Button>
        </Popconfirm>
      </header>
    </div>
  );
}

export default App;
