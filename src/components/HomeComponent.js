import React, { Component } from 'react';
import { WORKS } from '../shared/works'
import Job from './JobComponent'


class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            works: WORKS
        }
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <Job works={this.state.works} />
                </div>    
            </div>    
        );
    }


}

export default Home;