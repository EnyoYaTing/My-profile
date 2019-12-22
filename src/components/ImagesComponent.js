import React from 'react';

function RenderImage({img}) {
    return(
        <div key={img.id}>
            <img src={img.image} alt={img.title} className="img-thumbnail rounded float-left" width="100" height="220"/>
        </div>   
    );
} 

function Images(props) {
    const imgs = props.imgs.map((img) => {
        return(
            <div key={img.id} >
                <RenderImage img={img} />
            </div>
        );
        
    });

    return(
        <div className="imgComponent">
            <div className="container">       
                {imgs}       
            </div>    
        </div>
    );
}

export default Images;