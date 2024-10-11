import React, { useState } from 'react';
import './WheelOfLife.css';

const WheelOfLife = () => {
    // Estado para controlar la valoración de cada sección
    const [ratings, setRatings] = useState(Array(8).fill(1)); // Iniciar cada sección con 5 puntos

    // Función para manejar el cambio de valoración de cada sección
    const handleRatingChange = (index, value) => {
        const newRatings = [...ratings];
        newRatings[index] = value;
        setRatings(newRatings);
    };

    // Generar los ángulos y dibujar la rueda
    return (
        <div className="wheel-container">
            <h1>Rueda de la Vida</h1>
            <h2>Valora del 1 al 10 cada sección de tu vida</h2>
            <svg viewBox="0 0 200 200" width="300" height="300" className="wheel">
                {/* Dibujar las 8 secciones de la rueda */}
                {[...Array(8)].map((_, index) => {
                    const angle = (index * 360) / 8; // Calcular ángulo de cada sección
                    const rotation = `rotate(${angle} 100 100)`; // Rotar cada sección
                    return (
                        <g key={index} transform={rotation}>
                            <path
                                d="M100,100 L100,0 A100,100 0 0,1 200,100 z" // Forma de cada sección
                                fill={`rgba(0, 150, 255, ${ratings[index] / 10})`} // Color dinámico según el valor
                            />
                        </g>
                    );
                })}
            </svg>
            {/* Controles deslizantes para cambiar la valoración de cada sección */}
            <div className="sliders">
                {ratings.map((rating, index) => (
                    <div key={index} className="slider">
                        <label>Sección {index + 1}:</label>
                        <input
                            type="range"
                            min="1"
                            max="10"
                            value={rating}
                            onChange={(e) => handleRatingChange(index, e.target.value)}
                        />
                        <span>{rating}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WheelOfLife;
