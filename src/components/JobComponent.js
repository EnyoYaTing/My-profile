import React from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';

function RenderWorks({work}) {
    return(
        <div key={work.id} className="col-12 mt-5">
            <Card>
                <div className="row">
                    <div className="col-12 col-sm-7">
                        <CardBody>
                            <div className="content" >
                                <CardText> { work.name } </CardText>
                                <div className="content-1">
                                    <CardText> { work.title } </CardText>
                                    <CardText> { work.date } , { work.location } </CardText>
                                    <CardText> { work.description } </CardText> 
                                </div>
                            </div>
                        </CardBody>
                    </div>
                    <div className="col-12 col-sm-4">
                        <CardImg src={ work.image } alt={ work.name } width="100"/>
                    </div>
                </div>
            </Card>   
        </div>
    );   
}


function Job(props) {
    const workExperience = props.works.map((work) => {
        return(
            <div className="enlarge" key={work.id}>
                <RenderWorks work={work} />
            </div>
        );
    });

    return(
        <div className="job" id="jobs">
            <div className="container" >
                <div className="row row-heading">
                    <div className="col-12">
                        <p>Work Experience</p>
                    </div>
                </div>    
                <div className="row row-content"> 
                    <div className="col-12 col-sm-1"></div>
                    <div className="col-12 col-sm-10">     
                        { workExperience }
                    </div>  
                </div>          
            </div>
        </div>        
    );
}

export default Job;