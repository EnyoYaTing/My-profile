import React, { Component } from 'react';
import { WORKS } from '../shared/works' 
import { Media } from 'reactstrap';

class Home extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            works: WORKS
        }
    }

    render(){
        const workExperience = this.state.works.map((work) => {
            return(
                <div key="work.id" className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={work.image} alt={work.name} width="80" height="80"/>
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{work.name}</Media>
                            <p>{work.title}</p>
                            <p>{work.location}</p>
                            <p>{work.date}</p>    
                            <p>{work.description}</p>
                        </Media>
                    </Media>    
                </div>    
            );
        });

        return(
            <div className="container">
                <div className="row">
                    <Media list>
                        { workExperience }
                    </Media>
                </div>    
            </div>    
        );
    }


}

export default Home;