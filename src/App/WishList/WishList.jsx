import React from "react";
import PropTypes from "prop-types";
import WishItem from "../WishItem";

const WishList = ({ wishes, onWishesChange }) => (
    <ul className='wish-list'>
    {wishes.map(({ text , done },i) => (
        <WishItem 
            text={text} 
            done={done} 
            id={`wish${i}`} 
            key={text} 
            onDoneChange={ value => {
                const updatedWishes = [ ...wishes ];
                updatedWishes[i].done = value;
                onWishesChange(updatedWishes);
            }} 
        />
    ))}
    </ul>
);


WishList.PropTypes = {
    wishes: PropTypes.arrayOf(PropTypes.shape(WishItem.PropTypes)),
    onWishesChange: PropTypes.func
}

WishList.defaultProps = {
    wishes: [],
    onWishesChange: () => {}
}

export default WishList;