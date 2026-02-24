import React from 'react';
import { RADIUS, NUM_LEVELS, COLORS } from './wheelConfig';

const WheelSection = React.memo(({ sectionIndex, rating }) => {
    const angle = (sectionIndex * 360) / 8;
    const rotation = `rotate(${angle} 100 100)`;

    return (
        <g transform={rotation}>
            {[...Array(NUM_LEVELS)].map((_, levelIndex) => {
                const innerRadius = (RADIUS / NUM_LEVELS) * levelIndex;
                const outerRadius = (RADIUS / NUM_LEVELS) * (levelIndex + 1);
                const isSelected = rating >= levelIndex + 1;

                const fillColor = isSelected
                    ? COLORS[sectionIndex].replace('0.2', '1')
                    : COLORS[sectionIndex];

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
});

export default WheelSection;
