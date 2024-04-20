import Navbar from './components/navbar';
import Main from './components/main.jsx'
import Nav2 from './components/nav2.jsx'
import Home from './pages/home/home.jsx'
import './App.css';

function App() {
  return (
    <div className="flex flex-col items-center bg-zinc-900 gap-y-6">
        {/* <Navbar/>
        <Main/> */}
        <Home/>
    </div>
  );
}

export default App;
