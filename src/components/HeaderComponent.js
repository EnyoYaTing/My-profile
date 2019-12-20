import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Link } from "react-scroll";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen:false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <div className="narbar">
                <Navbar light expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/">
                            <img src='assets/images/logo.png' height="30" width="41" alt='Enyo' />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link
                                    activeClass="active"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    Home
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    activeClass="active"
                                    to="aboutme"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    <span className="fa fa-list fa-lg"></span> About Me     
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    activeClass="active"
                                    to="edu"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    <span className="fa fa-list fa-lg"></span> Education    
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link
                                    activeClass="active"
                                    to="ttt"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    <span className="fa fa-list fa-lg"></span> Contact Me   
                                </Link>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}
  
export default Header;