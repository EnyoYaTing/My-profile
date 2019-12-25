import React, { Component } from 'react';

function Aboutme(props) {
    return(
        <div className="aboutme" id="about">
            <div className="container"> 
                <div className="row row-heading">
                    <div className="col-12 col-sm-2"></div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <p>About Me </p>
                    </div>    
                </div>
                <div className="row">
                    <div className="col-12 col-sm-2"></div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <img src="assets/images/enyo.png" alt="headimage" width="110" height="110"/>
                    </div>    
                </div>
                <div className="row row-content">
                    <div className="col-12 col-sm-2"></div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <p> Hello, </p>
                        <p> I am a full-stack web developer </p>
                        <p> who are enthusiatic about web design.</p>
                        <p> Particularly, I am interested in</p>
                        <p> "Data Visualisation" and</p>
                        <p> "Optical Effects in User Interface".</p> 
                    </div>    
                </div>        
            </div>
        </div>
    );
} 

export default Aboutme;