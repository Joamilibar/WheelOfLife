import React from 'react';
import { SECTION_NAMES, NUM_SECTIONS } from './wheelConfig';

const WheelLabels = React.memo(() => {
    const offset = 50;

    return (
        <>
            {SECTION_NAMES.map((name, sectionIndex) => {
                const angle = (sectionIndex * 360) / NUM_SECTIONS;
                const textX = 100 + offset * Math.cos((angle + 25) * (Math.PI / 180));
                const textY = 100 + offset * Math.sin((angle + 25) * (Math.PI / 180));

                return (
                    <text
                        key={sectionIndex}
                        x={textX}
                        y={textY}
                        fill="black"
                        fontSize="6"
                        fontWeight="bold"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        transform={`rotate(${angle + 25}, ${textX}, ${textY})`}
                    >
                        {name}
                    </text>
                );
            })}
        </>
    );
});

export default WheelLabels;
