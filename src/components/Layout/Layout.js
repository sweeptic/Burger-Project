import React from "react";
import Aux from "../../hoc/Aux";
import App from "../../App";

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