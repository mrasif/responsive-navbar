import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';


import './Toolbar.css';


const toolBar=props=>(
    <header className="toolbar">
        <nav className="toolbar-nav">
            <div className="toolbar-toggle-button"><DrawerToggleButton click={props.drawerClickHandler}/></div>
            <div className="toolbar-logo"><a href="/">The Logo</a></div>
            <div className="spacer"/>
            <div className="toolbar-nav-items">
                <ul>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Users</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolBar;