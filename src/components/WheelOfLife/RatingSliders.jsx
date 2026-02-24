import React from 'react';
import { SECTION_NAMES, COLORS } from './wheelConfig';

const RatingSliders = React.memo(({ ratings, onRatingChange }) => {
    return (
        <div className="sliders">
            {ratings.map((rating, index) => (
                <div key={index} className="slider">
                    <label>{SECTION_NAMES[index]}: </label>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        value={rating}
                        onChange={(e) => onRatingChange(index, parseInt(e.target.value))}
                        style={{
                            accentColor: COLORS[index].replace('0.2', '1'),
                            background: COLORS[index],
                        }}
                    />
                    <span>{rating}</span>
                </div>
            ))}
        </div>
    );
});

export default RatingSliders;
