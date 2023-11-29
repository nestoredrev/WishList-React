import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const WishItem = ({text, done, id, onDoneChange}) => {
    const [age, setAge] = useState(0);

    useEffect(() => {
        let ageInterval;
        if(done){
            setAge(0)
        }else{
            ageInterval = setInterval(() => {
                if(done){
                    clearInterval(ageInterval);
                }else{
                    setAge(age => age + 1);
                }
            }, 1000);
        }
        return () => clearInterval(ageInterval); //
    },[done]);

    return(
        // <li className={ `wish-list_item ${done ? 'wish-list_item--done' : '' }` }>
        <li className={ classNames('wish-list__item',{
            'wish-list__item--done': done,
            'wish-list__item--warning': age >= 5 && age < 10,
            'wish-list__item--danger': age >= 10
        })}>
            <label htmlFor={id}>
                <input 
                    type="checkbox" 
                    name={id} 
                    id={id} 
                    checked={done} 
                    onChange={ e => onDoneChange(e.target.checked)} />
                {text}
            </label>
        </li>
    )
};

WishItem.PropTypes = {
    text: PropTypes.text,
    done: PropTypes.string,
    id: PropTypes.string,
    onDoneChange: PropTypes.func
}

WishItem.defaultProps = {
    text: '',
    done: false,
    id: '',
    onDoneChange: () => {}
}

export default WishItem;