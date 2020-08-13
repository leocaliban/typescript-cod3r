import React from 'react';
import './App.css';
import CountValue from './components/CountValue';
function App() {
  return (
    <div className="App">
      <CountValue count={0} />
    </div>
  );
}

export default App;
