import React from 'react'
import '../css/side-navbar.css';
import {NavLink} from 'react-router-dom';

const SideNavbar = () => {
    return (
        <div className="side-navbar">
            <h1>Logo</h1>
            <NavLink exact activeClassName="active-class" className="nav-link" to="/"> 
                <div className="menu">
                    <h4>My Page</h4>
                </div> 
            </NavLink>

            <NavLink exact activeClassName="active-class" className="nav-link" to="/monetize"> 
                <div className="menu">
                    <h4>Monetize</h4>
                </div> 
            </NavLink>  

            <NavLink exact activeClassName="active-class" className="nav-link" to="/analytics"> 
                <div className="menu">
                    <h4>Analytics</h4>
                </div> 
            </NavLink>

            <NavLink exact activeClassName="active-class" className="nav-link" to="/earning"> 
                <div className="menu">
                    <h4>Earning</h4>
                </div> 
            </NavLink>

            <NavLink exact activeClassName="active-class" className="nav-link" to="/refferals"> 
                <div className="menu">
                    <h4>Refferals</h4>
                </div> 
            </NavLink>

            <NavLink exact activeClassName="active-class" className="nav-link" to="/settings"> 
                <div className="menu">
                    <h4>Settings</h4>
                </div> 
            </NavLink>

            <NavLink exact activeClassName="active-class" className="nav-link" to="/dummy"> 
                <div className="menu">
                    <h4>Monetize</h4>
                </div> 
            </NavLink>

            <NavLink exact activeClassName="active-class" className="nav-link" to="/dummy"> 
                <div className="menu">
                    <h4>Monetize</h4>
                </div> 
            </NavLink>
            
        </div>
    )
}

export default SideNavbar
