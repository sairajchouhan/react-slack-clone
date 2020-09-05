import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <h1>slack clone</h1>
      <Header />
      <div className="app__body">
        {/* sidebar */}
        <Sidebar />
        {/* react router */}
      </div>
    </div>
  );
}

export default App;
