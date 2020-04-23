import React from "react";
import Aux from "../../hoc/Aux_";
import styles from './layout.module.css'
const layout = (props) => (
    <Aux>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main className={styles.Content}>
            {/* wrapper  */}
            {props.children}
        </main>
    </Aux>
);


export default layout;