// npx json-server --watch data/db.json --port 8000
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
      <Home/>
    
      </div>
    </div>
  );
}

export default App;
