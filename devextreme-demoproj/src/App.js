import React from "react";
import { Route,Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Registration } from "./pages/Registration";
import { Login } from "./pages/Login";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Registration" element={<Registration/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
      </Container>
    </>
  );
}

export default App;