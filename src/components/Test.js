// This Skills Component is to show all of capacilities of my skills
import React, { useState,  setAnimating} from 'react';
import { Carousel, CarouselItem, CarouselIndicators } from 'reactstrap';

function Render({skill}) {
    let images = [];

    if (skill.id === 0) {
        for (let i=0; i<skill.image.length; i++) {
            console.log("i :" + i);
            images.push(
                <img src={skill.image[i]} alt={skill.name} width="10%"/> 
            )     
        }
        return images;
    } 
    else if (skill.id === 1) {
        for (let i=0; i<skill.image.length; i++) {
            console.log("i :" + i);
            images.push(<img src={skill.image[i]} alt={skill.name} width="10%"/> )     
        }
        return images;
    } 
    else {
        for (let i=0; i<skill.image.length; i++) {
            console.log("i :" + i);
            images.push(<img src={skill.image[i]} alt={skill.name} width="10%"/> )     
        }
        return images; 
    }

}

function Test(props) {
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
                <div className="igs"> 
                    <Render skill={skill} />
                </div>
            </CarouselItem>    

            // <CarouselItem
            //     onExiting={() => setAnimating(true)}
            //     onExited={() => setAnimating(false)}
            //     key={skill.id}
            // >   
            //     <div className="igtitle">
            //         <p> {skill.name} </p>
            //     </div>   

            //     <div className="row igs"> 
            //         <div className="col-12 col-sm-2">  
            //             <img src={skill.image[0]} alt={skill.name} className="rounded" width="90%"/>  
            //         </div> 
            //         <div className="col-12 col-sm-2"> 
            //             <img src={skill.image[1]} alt={skill.name} className="rounded" width="90%"/>
            //         </div> 
            //         <div className="col-12 col-sm-2"> 
            //             <img src={skill.image[2]} alt={skill.name} className="rounded" width="90%"/> 
            //         </div>
            //     </div>  
            // </CarouselItem>
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
                    {slides}
                    <CarouselIndicators items={props.skills} activeIndex={activeIndex} onClickHandler={goToIndex} />        
                </Carousel>
            </div>
        </div>
    );
}

export default Test;