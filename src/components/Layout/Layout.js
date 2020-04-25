import React from "react";
import Aux from "../../hoc/Aux_";
import styles from './layout.module.css'
import Toolbar from './../Navigation/Toolbar/Toolbar';


const layout = (props) => (
    <Aux>
        <Toolbar/>
        <main className={styles.Content}>
            {/* wrapper  */}
            {props.children}
        </main>
    </Aux>
);


export default layout;