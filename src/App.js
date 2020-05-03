import React, { Component } from "react";
// import styles from "./app.module.css";
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Layout from './hoc/Layout/Layout';
import Checkout from './containers/Checkout/Checkout';


class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <BurgerBuilder />
                    <Checkout />
                </Layout>
            </div>
        );
    }
}

export default App;
