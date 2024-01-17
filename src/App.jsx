import "./App.css";
import { useState } from "react";
import Nav from "./components/Nav";
import Informacion from "./components/Informacion";

function App() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <container>
        <Informacion />
      </container>
    </>
  );
}

export default App;
