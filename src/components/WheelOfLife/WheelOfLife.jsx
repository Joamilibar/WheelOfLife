import React, { useState, useCallback } from 'react';
import './WheelOfLife.css';
import logo from '../../assets/logo-nurvick.png';
import { NUM_SECTIONS } from './wheelConfig';
import RatingSliders from './RatingSliders.jsx';
import WheelChart from './WheelChart.jsx';

const WheelOfLife = () => {
    const [ratings, setRatings] = useState(Array(NUM_SECTIONS).fill(0));
    const [showWheel, setShowWheel] = useState(false);

    const handleRatingChange = useCallback((index, value) => {
        setRatings((prev) => {
            const newRatings = [...prev];
            newRatings[index] = value;
            return newRatings;
        });
    }, []);

    return (
        <div className="App">
            <div className="wheel-container">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Rueda de la Vida</h1>

                <RatingSliders ratings={ratings} onRatingChange={handleRatingChange} />

                <div className="button-container">
                    <button onClick={() => setShowWheel(!showWheel)}>
                        {showWheel ? 'Ocultar Rueda' : 'Mostrar Rueda'}
                    </button>
                </div>

                <div>{showWheel && <WheelChart ratings={ratings} />}</div>
            </div>
        </div>
    );
};

export default WheelOfLife;
