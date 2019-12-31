import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Aboutme from './AboutmeComponent';
import Skills from './SkillsComponent';
import Job from './JobComponent';
import School from './SchoolComponent';
import { WORKS } from '../shared/works';
import { SCHOOLS } from '../shared/schools';
import { SKILLS } from '../shared/skills';


class Main extends Component {
    constructor(props){
        super(props);

        this.state = {
            works: WORKS,
            schools: SCHOOLS,
            skills: SKILLS
        }
    }

    render() {
        return(
            <div>
                <Header />
                <Home />
                <Aboutme/>
                <Skills skills={this.state.skills} />
                <School schools={this.state.schools}/>
                <Job works={this.state.works} />
                <Footer />  
            </div>
        );
    }
}

export default Main;