import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import Interest from './InterestComponent';

class Home extends Component {

    render() {
        return(
            <div className="homepage" id="home">
                <Jumbotron> </Jumbotron>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-2 offset-sm-1"></div>
                            <div className="col-12 col-sm-5 offset-sm-1 "> 
                                <p> Hi, I'm </p> 
                            </div>    
                        </div> 

                        <div className="row">
                            <div className="col-12 col-sm-2 offset-sm-1">
                                <div className="leftline"></div>
                            </div>
                            <div className="col-12 col-sm-5 offset-sm-1 "> 
                                <div className="header">
                                    <p> Enyo </p>
                                </div>  
                            </div>
                            <div className="col-12 col-sm-2 offset-sm-1">
                                <div className="rightline"></div>
                            </div>    
                        </div>       
                                  
                        <div className="row">
                            <div className="col-12 col-sm-1 offset-sm-1"></div>   
                            <div className="col-12 col-sm-10 ">      
                                <p> On the way towards a Full-stack Web Developer.</p>
                            </div> 
                        </div>
                       
                    </div>
            </div>    
        );
    }
}

export default Home;