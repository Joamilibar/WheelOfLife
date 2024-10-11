import React, { useState } from 'react';
import './WheelOfLife.css';

const WheelOfLife = () => {
    const [ratings, setRatings] = useState(Array(8).fill(0)); // Valoración inicial de 0 para cada sección
    const [hoverRating, setHoverRating] = useState(null); // Controlar el valor mientras se pasa el cursor

    // Colores para las 8 secciones
    const colors = [
        'rgba(255, 99, 132, 0.2)', // Rojo claro
        'rgba(54, 162, 235, 0.2)', // Azul claro
        'rgba(255, 206, 86, 0.2)', // Amarillo claro
        'rgba(75, 192, 192, 0.2)', // Verde claro
        'rgba(153, 102, 255, 0.2)', // Morado claro
        'rgba(255, 159, 64, 0.2)',  // Naranja claro
        'rgba(201, 203, 207, 0.2)', // Gris claro
        'rgba(255, 205, 210, 0.2)', // Rosa claro
    ];

    const handleRatingChange = (index, value) => {
        const newRatings = [...ratings];
        newRatings[index] = value;
        setRatings(newRatings);
    };

    const handleMouseOver = (index, value) => {
        setHoverRating({ index, value });
    };

    const handleMouseOut = () => {
        setHoverRating(null);
    };

    const numSections = 8;
    const numLevels = 10; // Divisiones concéntricas por sección
    const radius = 100;

    return (
        <div className="wheel-container">
            <h1>Rueda de la Vida Interactiva</h1>
            <svg viewBox="0 0 200 200" width="300" height="300" className="wheel">
                {[...Array(numSections)].map((_, sectionIndex) => {
                    const angle = (sectionIndex * 360) / numSections; // Ángulo de cada sección
                    const rotation = `rotate(${angle} 100 100)`; // Rotación para la sección

                    return (
                        <g key={sectionIndex} transform={rotation}>
                            {/* Dividir cada sección en 10 partes concéntricas */}
                            {[...Array(numLevels)].map((_, levelIndex) => {
                                const innerRadius = (radius / numLevels) * levelIndex;
                                const outerRadius = (radius / numLevels) * (levelIndex + 1);

                                // Condición para el color al pasar el cursor o al seleccionar
                                const isHovered =
                                    hoverRating &&
                                    hoverRating.index === sectionIndex &&
                                    hoverRating.value >= levelIndex + 1;

                                const isSelected =
                                    ratings[sectionIndex] >= levelIndex + 1;

                                const fillColor = isHovered
                                    ? colors[sectionIndex].replace('0.2', '0.7') // Más oscuro al pasar el cursor
                                    : isSelected
                                        ? colors[sectionIndex].replace('0.2', '1') // Color más oscuro al seleccionar
                                        : colors[sectionIndex]; // Color predeterminado

                                return (
                                    <path
                                        key={levelIndex}
                                        d={`
                      M 100,100 
                      L ${100 + innerRadius * Math.cos(0)},${100 + innerRadius * Math.sin(0)}
                      A ${innerRadius},${innerRadius} 0 0,1 ${100 + innerRadius * Math.cos(Math.PI / 4)},${100 + innerRadius * Math.sin(Math.PI / 4)}
                      L ${100 + outerRadius * Math.cos(Math.PI / 4)},${100 + outerRadius * Math.sin(Math.PI / 4)}
                      A ${outerRadius},${outerRadius} 0 0,0 ${100 + outerRadius * Math.cos(0)},${100 + outerRadius * Math.sin(0)}
                      Z
                    `}
                                        fill={fillColor}
                                        onMouseOver={() => handleMouseOver(sectionIndex, levelIndex + 1)}
                                        onMouseOut={handleMouseOut}
                                        onClick={() => handleRatingChange(sectionIndex, levelIndex + 1)}
                                        style={{ cursor: 'pointer' }}
                                    />
                                );
                            })}
                        </g>
                    );
                })}
            </svg>
            <div className="sliders">
                {ratings.map((rating, index) => (
                    <div key={index} className="slider">
                        <label>Sección {index + 1}: </label>
                        <span>{rating}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WheelOfLife;
