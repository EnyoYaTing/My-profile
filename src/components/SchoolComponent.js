import React from 'react';
import { Media } from 'reactstrap';

function RenderSchools({school}) {
    return(
        <div key={school.id} className="col-12 mt-5">
            <Media tag="li">
                <Media left middle>
                    <Media object src={ school.image } alt={ school.name } width="100" height="100"/>
                </Media>
                <Media body className="ml-5">
                    <Media heading>{ school.name }</Media>
                    <p>{ school.department }</p>
                    <p>{ school.location }</p>
                    <p>{ school.date }</p>    
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
        <div className="container" id="edu">
            <div className="row">
                <h1>Education</h1>
                <Media list>
                    {mySchool}
                </Media>
            </div>    
        </div>      
    );
}

export default School;