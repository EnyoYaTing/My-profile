import React from 'react';

function Aboutme(props) {
    return(
        <div className="container" id="aboutme"> 
            <div className="row">
                <div className="col-12 col-sm-2"></div>
                <div className="col-12 col-sm-6 offset-sm-1 text-center">
                    <h3>About Me </h3>
                    <img src="assets/images/headig.png" alt="headimage" width="80" height="80"/>
                    <h6> Hello</h6>
                    <p> I am a full-stack web developer </p>
                    <p> who are enthusiatic about web design.</p>
                    <p> I also love the area of Data Visualisation, </p>
                    <p> and Optical Effects in User Interface. </p>
                </div>    
            </div>    
        </div>
    );
} 

export default Aboutme;