import { useState } from 'react';

interface StarRatingProps {
    totalStars: number;
}

const StarRating: React.FC<StarRatingProps> = ({ totalStars }) => {
    const [rating, setRating] = useState<number>(0);

    const handleClick = (value: number) => {
        setRating(value);
    };

    return (
        <div>
            {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <span
                        key={index}
                        onClick={() => handleClick(starValue)}
                        style={{ cursor: 'pointer', }}
                    >
                        {starValue <= rating ? '★' : '☆'}
                    </span>
                );
            })}
        </div>
    );
};

export default StarRating;
