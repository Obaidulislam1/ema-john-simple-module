import React from 'react';

const Card = ({cart}) => {
    return (
        <div>
            <h4>Order Summary</h4>
                <p>Selected Items: {cart.length}</p>
        </div>
    );
};

export default Card;