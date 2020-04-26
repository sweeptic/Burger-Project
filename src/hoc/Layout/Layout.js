import React, { Component } from "react";
// import Aux from "../../hoc/Aux_";
// import styles from "./layout.module.css";
// import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
// import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
// import DrawerToggle from './../../components/Navigation/SideDrawer/DrawerToggle/DrawerToggle';
import Aux from '../Aux_/Aux_';
import styles from "./layout.module.css";
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';


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
