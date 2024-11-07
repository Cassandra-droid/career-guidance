import React from 'react';

const CircularProgress = ({ percentage }) => {
    const radius = 45; // Radius of the circle
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="circular-progress">
            <svg width="100" height="100">
                <circle
                    className="background"
                    cx="50"
                    cy="50"
                    r={radius}
                />
                <circle
                    className="progress"
                    cx="50"
                    cy="50"
                    r={radius}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                />
            </svg>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <h4>{percentage}%</h4>
            </div>
        </div>
    );
};

export default CircularProgress;
