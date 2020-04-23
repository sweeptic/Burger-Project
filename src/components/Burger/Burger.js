import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
        return [...Array(props.ingredients[igKey])].map((_, index) => (
            <BurgerIngredient key={igKey + index} type={igKey} />
        ));
    });

    // console.log(transformedIngredients.flat());
    if (transformedIngredients.flat().length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            {/* <BurgerIngredient type="cheese" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" /> */}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;
