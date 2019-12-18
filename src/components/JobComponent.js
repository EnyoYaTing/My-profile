import React from 'react';
import { Media } from 'reactstrap';

function RenderWorks({work}) {
    return(
        <div key={work.id} className="col-12 mt-5">
            <Media tag="li">
                <Media left middle>
                    <Media object src={ work.image } alt={ work.name } width="100" height="100"/>
                </Media>
                <Media body className="ml-5">
                    <Media heading>{ work.name }</Media>
                    <p>{ work.title }</p>
                    <p>{ work.location }</p>
                    <p>{ work.date }</p>    
                    <p>{ work.description }</p>
                </Media>
            </Media>    
        </div>
    );   
}

function Job(props) {
    const workExperience = props.works.map((work) => {
        return(
            <RenderWorks work={work} />
        );
    });

    return(
        <div className="container">
            <div className="row">
                <h1>My Work Experience</h1>
                <Media list>
                    { workExperience }
                </Media>
            </div>    
        </div>    
    );
}

export default Job;