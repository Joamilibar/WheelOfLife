import React, { useState } from 'react';
import './WheelOfLife.css';
import logo from './logo-nurvick.png'

const WheelOfLife = () => {
    const [ratings, setRatings] = useState(Array(8).fill(0)); // Valoración inicial de 0 para cada sección
    const [showWheel, setShowWheel] = useState(false); // Controla si se muestra la rueda

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

    // Nombres para las secciones
    const sectionNames = [
        'Familia',
        'Trabajo, Empleo',
        'Pareja, Relaciones Amorosas',
        'Cuidado del Hogar',
        'Amistades y Vida Social',
        'Cuidado de Otros',
        'Salud Física y Bienestar',
        'Crecimiento Personal y Espiritual'
    ];

    const handleRatingChange = (index, value) => {
        const newRatings = [...ratings];
        newRatings[index] = value;
        setRatings(newRatings);
    };

    const numSections = 8;
    const numLevels = 10; // Divisiones por sección
    const radius = 100;

    return (
        <div className="App">
            <div className="wheel-container">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Rueda de la Vida</h1>


                {/* Siempre mostrar los controles deslizantes con los nombres */}
                <div className="sliders">
                    {ratings.map((rating, index) => (
                        <div key={index} className="slider">
                            <label>{sectionNames[index]}: </label> {/* Mostrar el nombre de la sección */}
                            <input
                                type="range"
                                min="0"
                                max="10"
                                value={rating}
                                onChange={(e) => handleRatingChange(index, parseInt(e.target.value))}
                                style={{
                                    accentColor: colors[index].replace('0.2', '1'), // Color de acento para el control deslizante
                                    backgroound: colors[index], // Color de fondo para el control deslizante
                                }}
                            />
                            <span>{rating}</span>
                        </div>
                    ))}
                </div>
                <div className="button-container">

                    {/* Botón para mostrar la rueda */}
                    <button onClick={() => setShowWheel(!showWheel)}>
                        {showWheel ? 'Ocultar Rueda' : 'Mostrar Rueda'}
                    </button>
                </div>
                <div>

                    {/* Mostrar la rueda solo si `showWheel` es verdadero */}
                    {showWheel && (
                        <svg viewBox="0 0 200 200" width="600" height="600" className="wheel">
                            {[...Array(numSections)].map((_, sectionIndex) => {
                                const angle = (sectionIndex * 360) / numSections; // Ángulo de cada sección
                                const rotation = `rotate(${angle} 100 100)`; // Rotación para la sección

                                return (
                                    <g key={sectionIndex} transform={rotation}>
                                        {/* Dividir cada sección en 10 partes concéntricas */}
                                        {[...Array(numLevels)].map((_, levelIndex) => {
                                            const innerRadius = (radius / numLevels) * levelIndex;
                                            const outerRadius = (radius / numLevels) * (levelIndex + 1);

                                            const isSelected = ratings[sectionIndex] >= levelIndex + 1;

                                            const fillColor = isSelected
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
                                                    style={{ cursor: 'default' }}
                                                />
                                            );
                                        })}

                                    </g>
                                );
                            })}

                            {/* Agregar nombres fuera de la rueda */}
                            {sectionNames.map((name, sectionIndex) => {
                                const angle = (sectionIndex * 360) / numSections;
                                const offset = 50; // Distancia del texto al borde de la rueda

                                const textX = 100 + offset * Math.cos((angle - 90) * (Math.PI / 180));
                                const textY = 100 + offset * Math.sin((angle - 90) * (Math.PI / 180));

                                return (
                                    <text
                                        key={sectionIndex}
                                        x={textX}
                                        y={textY}
                                        fill="black"
                                        fontSize="6"
                                        fontWeight="bold"
                                        textAnchor="middle"
                                        dominantBaseline="right"
                                        transform={`rotate(${angle + 90}, ${textX}, ${textY})`} // Ajustar rotación del texto
                                    >
                                        {name}
                                    </text>
                                );
                            })}

                        </svg>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WheelOfLife;
