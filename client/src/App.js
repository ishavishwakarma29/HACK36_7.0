import Navbar from './components/navbar';
import Main from './components/main.jsx'
import Nav2 from './components/nav2.jsx'
import AllCard from './components/all-issue-card.jsx';
import MyCard from './components/my-issue-card.jsx';
import DoneCard from './components/CompleteCard.jsx';
import PendingCard from './components/pending-issue-card.jsx';
import './App.css';

function App() {
  return (
    <div className="flex flex-col items-center bg-zinc-900 gap-y-6">
        {/* <Navbar/>
        <Main/> */}
        <Nav2/>
        <AllCard/>
        <MyCard/>
        <DoneCard/>
        <PendingCard/>
    </div>
  );
}

export default App;
