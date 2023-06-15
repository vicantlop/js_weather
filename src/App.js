import 'materialize-css/dist/css/materialize.min.css';
import './materialize';
import Navbar from "./components/Navbar"
import Search from './components/Search';


function App() {
  return (
      <div className="App">
        <Navbar />
        <Search />
      </div>
  );
}

export default App;
