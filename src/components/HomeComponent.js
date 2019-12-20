import React, { Component } from 'react';
import Job from './JobComponent';
import School from './SchoolComponent';
import Aboutme from './AboutmeComponent';
import { WORKS } from '../shared/works';
import { SCHOOLS } from '../shared/schools';
import { Jumbotron } from 'reactstrap';


class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            works: WORKS,
            schools: SCHOOLS
        }
    }

    render(){
        return(
            <div id="home">
                <Jumbotron>
                    <div className="container">
                        
                        <div className="row row-header">
                            <div className="col-12 col-sm-2 offset-sm-1"></div>
                            <div className="col-12 col-sm-6 offset-sm-1 font-weight-bold "> 
                                <p className="font-italic"> Hi, I'm </p>
                                <h1>- Enyo -</h1>
                                <p className="font-italic">My Dream is being A excellent Full-Stack Web Developer.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <div className="row">
                    <Aboutme/>
                    <School schools={this.state.schools}/>
                    <Job works={this.state.works} />
                </div>    
            </div>    
        );
    }
}

export default Home;