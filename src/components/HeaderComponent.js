import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return(
            <React.Fragment>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">Enyo</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container homestyle">
                        <div className="row row-header">
                            <div className="col-12 col-sm-2 offset-sm-1"></div>
                            <div className="col-12 col-sm-6 offset-sm-1 font-weight-bold "> 
                                <p className="font-italic"> Hi, I'm </p>
                                <h1>- Enyo -</h1>
                                <p className="font-italic">My Dream is being A excellent Full-Stack Web Developer.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}
  
export default Header;