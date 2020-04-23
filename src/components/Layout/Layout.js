import React from "react";
import Aux from "../../hoc/Aux_";

const layout = (props) => (
    <Aux>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main>
            {/* wrapper  */}
            {props.children}
        </main>
    </Aux>
);


export default layout;