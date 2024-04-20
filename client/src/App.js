import React, {useState} from 'react';
import Main from './pages/main/main.jsx'
import Home from './pages/home/home.jsx'
import './App.css';

function App() {
  return (
    <div className="flex flex-col items-center bg-zinc-900 gap-y-6">
        <Navbar/>
        <Main/>
        {/* <Home/> */}
    </div>
  );
}

export default App;
