import React, { Component } from "react";
import Aux from "../../hoc/Aux_";

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                {/* graphical representation of burger */}
                <div>Burger</div>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;
