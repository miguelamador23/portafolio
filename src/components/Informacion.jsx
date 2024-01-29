import React from "react";
import "./Informacion.css";

function Informacion() {
  return (
    <div className="container">
      <div className="text-container">
        <h1 className="Titulo">
          Hi 👋,
          <br /> My name is <p className="Nombre">Miguel AZ</p> MG I build things for web
        </h1>
      </div>
      <div className="image-container">
        <img className="img" src="fotoperfil.svg" alt="Foto de perfil" />
      </div>
    </div>
  );
}

export default Informacion;