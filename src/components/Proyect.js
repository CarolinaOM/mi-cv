import React from 'react';
import './Proyect.css';
import snakeGameImg from '../assets/images/snake-game.png'; // Asegúrate de que la ruta sea correcta

const Proyect = () => {
  return (
    <div className="proyect-card-vertical">
      <img src={snakeGameImg} alt="Snake Game" className="proyect-img-top" />
      <h3>Snake Game</h3>
      <p>
        Juego clásico desarrollado con React. Come manzanas, crece y evita chocar contigo mismo.
      </p>
      <a href="https://admirable-mousse-027031.netlify.app/" target="_blank" rel="noopener noreferrer">
        Ver proyecto
      </a>
    </div>
  );
};

export default Proyect;
