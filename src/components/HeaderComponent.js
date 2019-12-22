import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, Collapse, NavItem } from 'reactstrap';
import { Link } from "react-scroll";

class Header extends Component {

    render() {
        return(
            <div className="narbar">
                <Navbar light expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/">
                            <img src='assets/images/logo.png' height="30" width="41" alt='Enyo' />
                        </NavbarBrand>
                        <Collapse navbar>
                            <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link className="col-12 col-2"
                                    activeClass="active"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-60}
                                    duration={500}>
                                        Home
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="col-12 col-2"
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}>
                                        About Me     
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="col-12 col-2"
                                    activeClass="active"
                                    to="skill"
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}>
                                        Skill     
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="col-12 col-2"
                                    activeClass="active"
                                    to="edu"
                                    spy={true}
                                    smooth={true}
                                    offset={-120}
                                    duration={500}>
                                        Education    
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="col-12 col-2"
                                    activeClass="active"
                                    to="jobs"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}>
                                        Jobs   
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