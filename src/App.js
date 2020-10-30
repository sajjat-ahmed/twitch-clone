import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__main">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
