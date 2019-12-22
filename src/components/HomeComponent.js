import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';


class Home extends Component {

    render() {
        return(
            <div id="home">
                <Jumbotron>
                    <div className="container">
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
            </div>    
        );
    }
}

export default Home;