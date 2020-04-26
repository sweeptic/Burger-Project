import React, { Component } from "react";
import Aux from "../../hoc/Aux_";
import styles from "./layout.module.css";
import Toolbar from "./../Navigation/Toolbar/Toolbar";
import SideDrawer from "./../Navigation/SideDrawer/SideDrawer";
import DrawerToggle from './../Navigation/SideDrawer/DrawerToggle/DrawerToggle';

class Layout extends Component {
    state = {
        showSideDrawer: true,
    };

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    };

    SideDrawerToggleHandler = (prevState) => {
        this.setState({ showSideDrawer: !prevState.showSideDrawer });
    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked =  {this.SideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                <main className={styles.Content}>
                    {/* wrapper  */}
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;
