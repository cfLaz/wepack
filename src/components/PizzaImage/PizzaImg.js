import React from 'react';
import classes from './PizzaImg.css';
import PizzaImg from '../../assets/pizza.jpg';

const pizzaImg = (props) => (
    <div className={classes.PizzaImage}>
        <img src={PizzaImg} className={classes.PizzaImg}/>
    </div>
);

export default pizzaImg;