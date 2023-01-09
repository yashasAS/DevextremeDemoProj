import './App.css';
import { Navbar } from './components/Navbar';
import {Container} from "react-bootstrap";
import {Routes,Route} from "react-router-dom";
import { Home } from './pages/Home';
import { Registration } from './pages/Registration';
import { Login } from './pages/Login';

function App() {
  return (
    <div>
      <Navbar/>
        <Container>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Registration" element={<Registration/>}/>
            <Route path="/Login" element={<Login/>}/>
          </Routes>
        </Container>
      </div>
  );
}

export default App;
