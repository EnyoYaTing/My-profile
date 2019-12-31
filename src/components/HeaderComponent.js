import React, { Component } from 'react';
import { Link } from "react-scroll";

class Header extends Component {

    render() {
        return(
            <div className="head">
                <div className="container">
                     <div className="row">
                        <div className="col-12 col-sm-2 offset-1"></div>
                        <div className="hover-touch">
                            <Link className="col-12 col-2"
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-60}
                                duration={500}>
                                    Home
                            </Link>
                        </div>
                        <div className="hover-touch">
                            <Link className="col-12 col-2"
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}>
                                    About Me     
                            </Link>
                        </div>
                        <div className="hover-touch">
                            <Link className="col-12 col-2"
                                activeClass="active"
                                to="skill"
                                spy={true}
                                smooth={true}
                                offset={-120}
                                duration={500}>
                                    Skill     
                            </Link>
                        </div>    
                        <div className="hover-touch">
                            <Link className="col-12 col-2"
                                activeClass="active"
                                to="edu"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}>
                                    Education    
                            </Link>
                        </div> 
                        <div className="hover-touch">
                            <Link className="col-12 col-2"
                                activeClass="active"
                                to="jobs"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}>
                                    Jobs   
                            </Link>
                        </div> 
                        <div className="hover-touch">
                            <Link className="col-12 col-2"
                                activeClass="active"
                                to="footer"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}>
                                    Contact Me   
                            </Link>
                        </div> 
                    </div>     
                </div>
            </div>
        );
    }
}
  
export default Header;