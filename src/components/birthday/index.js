import React, { useState, useEffect } from 'react';
import Header from './header';
import Agenda from './agenda';
import Contact from './contact';
import RSVP from './rsvp';

//import music from './../../assets/music-1.ogg';

function Birthday() {
    
    const [isInitial, setIsInitial] = useState(true);
    const [hasAccess, setHasAccess] = useState(false);   // TODO change

    useEffect(() => {

        if (isInitial) {
            let code = prompt("What is your access code for the birthday party?");

            if (code === "goodtimesberlin") {
                setIsInitial(false);
                setHasAccess(true);
            }
        }
    });

    return (
        <>
            {hasAccess && 
            <div className="birthday-page">
                <iframe src="" allow="autoplay" id="audio"></iframe>
                <Header />
                <RSVP />
                <Agenda />
                <Contact />
                <RSVP />
            </div>}
        </>
    );
}

export default Birthday;