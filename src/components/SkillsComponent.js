import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';


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
                <img src="assets/images/slidebg.png" alt={skill.name} className="img-fluid" />
                <div className="row"> 
                    <div className="center">
                        <p> {skill.name} </p> 
                    </div> 
                </div>     
                <div className="row"> 
                    <div className="centered">
                        <img classname="igs" src={skill.image} alt={skill.name}/>
                        <img classname="igs" src={skill.image_1} alt={skill.name}/>
                        <img classname="igs" src={skill.image_2} alt={skill.name}/> 
                    </div> 
                </div>    
                {/* <CarouselCaption captionHeader={skill.name} /> */}    
            </CarouselItem>
        );
    });

    return(
        <div className="myskill">
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >   
                {slides}
                <CarouselIndicators items={props.skills} activeIndex={activeIndex} onClickHandler={goToIndex} />        
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </div>
    );
}

export default Skills;