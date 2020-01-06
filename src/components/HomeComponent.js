import React, { Component } from 'react';
// import { Jumbotron } from 'reactstrap';

class Home extends Component {

    render() {
        return(
            <div className="homepage" id="home">
                <img src="./assets/images/homeig.png?raw=true" alt="Enyo" width="100%"/>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-2 offset-sm-1"></div>
                        <div className="col-12 col-sm-5 offset-sm-1 "> 
                            <p> Hi, I'm </p> 
                        </div>    
                    </div> 
                    <div className="row">
                        <div className="col-12 col-sm-4"></div>
                        <div className="col-12 col-sm-5"> 
                            <div className="header">
                                <p> Enyo </p>
                            </div>  
                        </div> 
                    </div>       
                    <div className="row">
                        <div className="col-12 col-sm-1 offset-sm-1"></div>   
                        <div className="col-12 col-sm-9 ">      
                            <p> On the way towards a professional Web Developer.</p>
                        </div> 
                    </div>
                </div>
            </div>    
        );
    }
}

export default Home;