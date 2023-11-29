import React, { useState } from 'react';
import PropTypes from 'prop-types';

 const WishInput = ({ onNewWish }) => {
    const [newWishText, setNewWishText] = useState('');
    return (
        <fieldset className='wish-input'>
            <legend className='wish-input__label'>New wishlist</legend>
            <input 
                className='wish-input__field' 
                type="text" 
                placeholder="Enter your wish here" 
                value={ newWishText } 
                onChange={ e => setNewWishText(e.target.value) }
                onKeyUp={ (e) =>{
                    if(e.key === 'Enter' && newWishText.length){
                        onNewWish({text: newWishText, done:false});
                        setNewWishText(''); // Limpiar el contenido del input
                    }
                }}
            />
        </fieldset>
    )
 };

 WishInput.PropTypes = {
    onNewWish: PropTypes.func
 }

 WishInput.defaultProps = {
    onNewWish: () => {}
 }

 export default WishInput;