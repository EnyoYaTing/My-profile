import React from 'react';

function Footer(props) {
    return(
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-4"></div>
                    <div className="contact col-12 col-sm-4">
                        <p>Contact Me</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-4"></div>
                    <div className="row-line col-12 col-sm-4 "></div>
                </div>     
                <div className="row row-content">
                    <div className="col-12 col-sm-4 offset-1"></div>
                    <div className="col-12 col-sm-1">
                        <a href="https://www.linkedin.com/in/ya-ting-lin-6858ab193/">
                            <img src="./assets/images/linkedin.png?raw=true" alt="Linkedin" width="70"/>
                        </a>        
                    </div>  
                    <div className="col-12 col-sm-1">  
                        <a href="mailto: da18787@alumni.bristol.ac.uk">
                            <img src="./assets/images/mail.png?raw=true" alt="e-mail" width="70"/>
                        </a>  
                    </div>   
                </div>    
            </div>
        </div>    
    );
}

export default Footer;