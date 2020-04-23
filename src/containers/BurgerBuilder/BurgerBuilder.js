import React, { Component } from "react";
import Aux from "../../hoc/Aux_";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                {/* graphical representation of burger */}
                <Burger/>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;
