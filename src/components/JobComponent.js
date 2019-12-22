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
        <div className="job">
            <div className="container" id="jobs">
                <div className="row">
                    <div className="col-12 col-sm-1"></div>
                    <div className="col-12 col-sm-5">
                        <h1>My Work Experience</h1>
                    </div>
                    <div className="row"> 
                        <div className="col-12 col-sm-1"></div>
                        <div className="col-12 col-sm-10">     
                            <Media list>
                                { workExperience }
                            </Media>
                        </div>  
                    </div>      
                </div>    
            </div>
        </div>        
    );
}

export default Job;