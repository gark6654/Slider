import React, { useState, useEffect, Children } from 'react';
import Controller from './components/Controller';
import './app.css';


function Slider(props) {
    const [childs, setchilds] = useState(['Children Empty']);
    const [childsCount, setchildsCount] = useState(0);
    const [showIndex, setShowIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(false);
    const [duration, setDuration] = useState(0);

    let click = false; // play is check this variable for run

    useEffect(() => {
        const newChildsCount = Children.count(props.children);
        if (newChildsCount) {
            setchildsCount(newChildsCount);

            const newChilds = Children.map(props.children, child => (
                <article className="slide">{child}</article>
            ));
            setchilds([...newChilds]);
        }
        if (props.autoPlay) {
            setAutoPlay(true);
            if (props.duration) {
                setDuration(props.duration * 1000);
            }
        }
    }, [props]);

    function play() {
        if (!click) {
            if (showIndex !== childsCount - 1) {
                setShowIndex(showIndex + 1);
            }
            else {
                setShowIndex(0);
            }
        }
    }

    function nextSlide() {
        click = true;
        if (showIndex !== childsCount - 1) {
            setShowIndex(showIndex + 1);
        }
        else {
            setShowIndex(0);
        }
    }

    function prevSlide() {
        click = true;
        if (showIndex > 0) {
            setShowIndex(showIndex - 1);
        }
        else {
            setShowIndex(childsCount - 1);
        }
    }

    function setFromDot(id) {
        click = true;
        setShowIndex(id);
    }

    if (autoPlay) {
        if (duration !== 0) {
            const autoPlay = setInterval(() => {
                play();
                clearInterval(autoPlay);
            }, duration);
        }
    }

    return (
        <article className="container">
            <article className="slider">
                {childs[showIndex]}
            </article>
            {
                <Controller
                    key={0}
                    nextSlide={nextSlide}
                    prevSlide={prevSlide}
                    dotsCount={childsCount} 
                    selectedDot={showIndex}
                    selectDot={setFromDot}
                />
            }
        </article>
    );
}

export default Slider;