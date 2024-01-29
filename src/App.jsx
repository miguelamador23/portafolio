import "./App.css";
import { useState } from "react";
import Nav from "./components/Nav";
import Informacion from "./components/Informacion";
import About from "./components/About";

function App() {
  return (
    <>
        <Nav />
        <Informacion />
        <About />
    </>
  );
}

export default App;
