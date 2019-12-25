import React from 'react';
import { Media } from 'reactstrap';

function RenderSchools({school}) {
    return(
        <div key={school.id} className="col-12 mt-5">
            <Media tag="li">
                <Media left middle>
                    <Media object src={ school.image } alt={ school.name } width="150" height="150"/>
                </Media>
                <Media body className="ml-5">
                    <Media heading>{ school.name }, { school.location }</Media>
                    <p> { school.department }, { school.date } </p>
                    <p> { school.description } </p>
                </Media>
            </Media>     
        </div>
    );   
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
                    <div className="col-12 col-sm-1"></div>
                    <div className="col-12 col-sm-8">   
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