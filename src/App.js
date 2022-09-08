import React from 'react';
import "./App.css";
import { Card } from './components/Card';

class App extends React.Component {
  render = () => {
    return (
      <div className='background'>
        <Card />
      </div>
    );
  }
}

export default App;