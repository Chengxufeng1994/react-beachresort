import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';

import logo from '../images/logo.svg';

class NavBar extends Component {
    state = {
        isOpen: false
    }

    handleNavBarToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        return (
            <div className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/react-beachresort">
                            <img src={logo} alt="海灘渡假村" />
                        </Link>
                        <button
                            className="nav-btn"
                            type="button"
                            onClick={this.handleNavBarToggle}
                        >
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/react-beachresort">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/react-beachresort/rooms">
                                Rooms
                            </Link>
                        </li>
                    </ul>
                </div>
            </div >
        )
    }
}

export default NavBar;