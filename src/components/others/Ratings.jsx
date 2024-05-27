import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import Rating from 'react-rating';

const Ratings = ({ratings}) => {
    return (
        <Rating
            readonly
            initialRating={ratings}
            emptySymbol={<AiFillStar className="icon" color="#ddd" />}
            fullSymbol={<AiFillStar className="icon" color="#f8c41a" />}
          />
    );
};

export default Ratings;