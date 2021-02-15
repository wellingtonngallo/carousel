import React, { useState, useEffect } from 'react';
import './carousel.css';

export default function Carousel(props) {
    const [image, setData] = useState(props.images[0]);
    const [buttonNextDisable, setButtonNextDisable] = useState(false);
    const [buttonBackDisable, setButtonBackDisable] = useState(false);

    useEffect(() => {
        verifyImageStep();
    }, [image]);

    function verifyImageStep() {
        const imagesLenght = props.images.length;
        const imageIndex = props.images.indexOf(image) +1;
  
        if (imagesLenght === imageIndex) {
            setButtonNextDisable(!buttonNextDisable);
        }

        if (imageIndex === 1) {
            setButtonBackDisable(!buttonBackDisable);
        }
    }

    function setNextImage() {
        const find = props.images.findIndex(item => item === image);
       
        if (buttonBackDisable) {
            setButtonBackDisable(!buttonBackDisable);
        }

        setData(props.images[find + 1]);

    }

    function setPreviousImage() {
        const find = props.images.findIndex(item => item === image);
       
        if (buttonNextDisable) {
            setButtonNextDisable(!buttonNextDisable);
        }

        setData(props.images[find - 1]);
    }

	return (
        <>
            <div className="styleTitle">
                {props.title}
            </div>
            <div className="styleImage">
                <img src={image} width="600px" height="400px"/>
            </div>
            <div className="styleButton">
                <button onClick={setPreviousImage.bind(this)} disabled={buttonBackDisable}>Previous</button>
                <button onClick={setNextImage.bind(this)} disabled={buttonNextDisable}>Next</button>
            </div>
        </>
	);
}