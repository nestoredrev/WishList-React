import React, { useState } from 'react';
import './App.css';
import WishInput from './WishInput';
import WishList from './WishList';


const initialWishes = [
    { text: 'Travel to the moon', done: false },
    { text: 'Make an intro course to React', done: true },
    { text: 'Pay the gym', done: true },
    { text: 'Go to the gym', done: false }
];

const App = () => {
    const [ wishes, setWishes ] = useState(initialWishes);
    return (
        <div className='app'>
            <h1>My wishlist</h1>
            < WishInput onNewWish={ wish => setWishes( [ wish, ...wishes ] ) } />
            < WishList wishes={ wishes } onWishesChange={wishes => setWishes(wishes)} />
            {/* es lo mismo */}
            {/* < WishList wishes={ wishes } onWishesChange={setWishes} />   */}
            <button 
                type='button' 
                className='wish-clear' 
                onClick={ () => setWishes(wishes.filter(wish => !wish.done)) }
            >
                Archive done
            </button>
        </div>
    )
}


export default App;