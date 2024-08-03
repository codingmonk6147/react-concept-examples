import React, { useState } from 'react';

const StarRating = ({ totalStars = 5, size = 24, color = '#f39c12', onChange }) => {
    const [rating, setRating] = useState(0);
    const [hoveredStar, setHoveredStar] = useState(0);

    const handleMouseEnter = (index) => setHoveredStar(index);
    const handleMouseLeave = () => setHoveredStar(0);
    const handleClick = (index) => {
        setRating(index);
        if (onChange) onChange(index);
    };

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= totalStars; i++) {
            const isFilled = i <= (hoveredStar || rating);
            stars.push(
                <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={isFilled ? color : '#ddd'}
                    width={size}
                    height={size}
                    style={{ cursor: 'pointer', marginRight: '5px' }}
                    onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(i)}
                >
                    <path d="M12 2.69l2.53 5.12 5.65.82-4.1 4.05.97 5.64-5.09-2.67-5.09 2.67.97-5.64-4.1-4.05 5.65-.82L12 2.69z" />
                </svg>
            );
        }
        return stars;
    };

    return (
        <div>
            {renderStars()}
            <div>Rating: {rating}</div>
        </div>
    );
};

export default StarRating;
