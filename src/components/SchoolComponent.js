import React from 'react';
import { Media } from 'reactstrap';
import Typewriter from 'typewriter-effect';

function RenderSchools({school}) {
    if (school.id === 0 ) {
        return (
            <div key={school.id} className="col-12 mt-5">
            <Media tag="li">
                <Media left middle>
                    <div className="code-box">  
                        {/* <Media object src={ school.image } alt={ school.name } width="50" height="50"/> */}
                        <div className="code-boxin">
                            <Typewriter
                                options={{
                                    strings: ['console.log ( Hello, Welcome to the Coding World! );'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>    
                    </div>
                </Media>
                <Media body className="ml-5">
                    <Media className="heading">{ school.name } </Media>
                    <p> { school.department } </p>
                    <p> { school.date }, { school.location } </p>
                    <p> { school.description } </p>
                </Media>
            </Media>     
        </div>
        );
    } else {
        return(
            <div key={school.id} className="col-12 mt-5 iii ">
                <Media tag="li">
                    <Media left middle>
                        <div className="japan-box">  
                            <div className="japan-boxin">
                                <Typewriter
                                    options={{
                                        strings: [' よこそう. 淡江日本語の世界!'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </div>    
                        </div>
                    </Media>
                    <Media body className="ml-5">
                        <Media className="heading">{ school.name } </Media>
                        <p> { school.department } </p>
                        <p> { school.date }, { school.location } </p>
                        <p> { school.description } </p>
                    </Media>
                </Media>     
            </div>
        );  
    }

     
}

function School(props) {
    const mySchool = props.schools.map((school) => {
        return(
            <RenderSchools school={school} />
        );
    });

    return(
        <div className="school" id="edu">
            <div className="container">
                <div className="row row-heading">
                    <div className="col-12">
                        <p>Education</p> 
                    </div>   
                </div>    
                <div className="row row-content"> 
                    <div className="col-12 col-sm-2"></div>
                    <div className="col-12 col-sm-9">   
                        <Media list>
                            {mySchool}
                        </Media> 
                    </div>        
                </div>    
            </div>  
        </div>   
    );
}

export default School;