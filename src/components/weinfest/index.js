import React, { useState, useEffect } from 'react';
import Header from './header';
import Contact from './contact';
import Agenda from './agenda';
import './styles.scss';

function Weinfest() {

    const storyPoints = [
        {
            text: "Welcome stranger!",
            nextPixels: 0,
        },
        {
            text: "I'm Bertelsmann, a creature from a magical region in the south.",
            position: 0,
        },
        {
            text: "It's a world where colorful grapes bring people together.",
            position: 0,
        },
        {
            text: "Would you join me for a little journey?",
            position: 0,
        }
    ]
    
    const [storyPoint, setStoryPoint] = useState(storyPoints[0]);
    const [storyIndex, setStoryIndex] = useState(0);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {

        //window.scrollTo(0,0);

        /*
        if (isInitial) {
            let code = prompt("What is your access code for the wine festival?");

            if (code === "schorle") {
                setIsInitial(false);
                setHasAccess(true);
            }
        }*/
    });

    const scrollDelay = (delay) => {
        return new Promise(res => setTimeout(res, delay));
    }

    const nextScene = async() => {

        // Hide text and change it
        setIsHidden(true);

        let totalDuration = 2000;
        let pixelsToScroll = storyPoints[storyIndex].nextPixels;
        let delay = 100;
        let steps = totalDuration / delay;
        let movement = pixelsToScroll / steps;

        // Scroll effect
        for (let x = 0; x <= steps; x++) {
            window.scrollBy({ top: 0, left: movement, behavior: 'smooth' });
            await scrollDelay(delay);

            // Show after half scroll
            if (x === steps/2) {
                // Next story point
                setStoryIndex(storyIndex + 1);
                setStoryPoint(storyPoints[storyIndex]);
                setIsHidden(false)
            }
        }
    }

    return (
        <>         
            <div className="weinfest-page evening">
                <span className={"story " + (isHidden ? " hide-story" : " show-story")} onClick={nextScene}>
                    {storyPoint.text}
                </span>
                <div className="weinfest-content">
                    
                </div>
            </div>
        </>
    );
}

export default Weinfest;