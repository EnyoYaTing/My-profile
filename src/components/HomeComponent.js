import React, { Component } from 'react';
import Job from './JobComponent';
import School from './SchoolComponent';
import { WORKS } from '../shared/works';
import { SCHOOLS } from '../shared/schools';


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
            <div className="container">
                <div className="row">
                    <School schools={this.state.schools} />
                    <Job works={this.state.works} />
                </div>    
            </div>    
        );
    }
}

export default Home;