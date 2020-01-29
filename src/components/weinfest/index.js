import React, { useState, useEffect } from 'react';
import Header from './header';
import Contact from './contact';
import Agenda from './agenda';

function Weinfest() {
    
    const [isInitial, setIsInitial] = useState(true);
    const [hasAccess, setHasAccess] = useState(true);   // TODO change

    useEffect(() => {

        return;

        if (isInitial) {
            let code = prompt("What is your access code for the wine festival?");

            if (code === "schorle") {
                setIsInitial(false);
                setHasAccess(true);
            }
        }
    });

    return (
        <>
            {hasAccess && 
            <div className="weinfest-page">
                <Header />
                <Agenda />
                <Contact />
            </div>}
        </>
    );
}

export default Weinfest;