import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Aboutme from './AboutmeComponent';
import Skills from './SkillsComponent';
import Interest from './InterestComponent';
import Job from './JobComponent';
import School from './SchoolComponent';
import { WORKS } from '../shared/works';
import { SCHOOLS } from '../shared/schools';
import { IMAGES } from '../shared/images';
import { SKILLS } from '../shared/skills';


class Main extends Component {
    constructor(props){
        super(props);

        this.state = {
            works: WORKS,
            schools: SCHOOLS,
            imgs: IMAGES,
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
                <Interest />
                <School schools={this.state.schools}/>
                <Job works={this.state.works} />
                <Footer />  
            </div>
        );
    }
}

export default Main;