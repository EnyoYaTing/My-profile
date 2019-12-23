// This Skills Component is to show all of capacilities of my skills
import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselIndicators, CarouselControl, CarouselCaption } from 'reactstrap';

function RenderImages({skill}) {
    let images = [];

    if (skill.id === 0) {
        for (let i=0; i<skill.image.length; i++) {
            console.log("i :" + i);
            images.push( <img src={skill.image[i]} alt={skill.name} width="10%"/> )
            images.push( <div className="imggap"></div> )  
        }
        return (
            <div className="row"> {images} </div>
        );
    } 
    else if (skill.id === 1) {
        for (let i=0; i<skill.image.length; i++) {
            console.log("i :" + i);
            images.push( <img src={skill.image[i]} alt={skill.name} width="10%"/> )
            images.push( <div className="imggap"></div> )     
        }
        return (
            <div className="row"> {images} </div>
        );
    } 
    else {
        for (let i=0; i<skill.image.length; i++) {
            console.log("i :" + i);
            images.push( <img src={skill.image[i]} alt={skill.name} width="10%"/> ) 
            images.push( <div className="imggap"></div> )     
        }
        return (
            <div className="row"> {images} </div>
        );
    }

}

function Skills(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === props.skills.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? props.skills.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }
    
    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = props.skills.map((skill) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={skill.id}
            >  
                <div className="igtitle">
                    <p> {skill.name} </p>
                </div>
               
                <div className="igs">
                    <RenderImages skill={skill} />
                </div>  
                {/* <CarouselCaption captionHeader={skill.name} />   */}
               
            </CarouselItem>    
        );
    });

    return(
        <div className="myskill" id="skill">
            <div className="container">
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                >   
                    <CarouselIndicators items={props.skills} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />        
                </Carousel>
            </div>
        </div>
    );
}

export default Skills;