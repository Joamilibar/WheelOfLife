import React from 'react';
import { NUM_SECTIONS } from './wheelConfig';
import WheelSection from './WheelSection.jsx';
import WheelLabels from './WheelLabels.jsx';

const WheelChart = ({ ratings }) => {
    return (
        <svg viewBox="0 0 200 200" width="600" height="600" className="wheel">
            {[...Array(NUM_SECTIONS)].map((_, sectionIndex) => (
                <WheelSection
                    key={sectionIndex}
                    sectionIndex={sectionIndex}
                    rating={ratings[sectionIndex]}
                />
            ))}
            <WheelLabels />
        </svg>
    );
};

export default WheelChart;
