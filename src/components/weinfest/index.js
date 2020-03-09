import React, { useState, useEffect, useRef } from 'react';
import './styles.scss';
import mountain1 from '../../assets/mountain1.svg';
import mountain2 from '../../assets/mountain2.svg';
import land from '../../assets/land.svg';
import portal from '../../assets/portal.svg';
import moon from '../../assets/moon.svg';
import enterKey from '../../assets/enter.svg';
import keys from '../../assets/keys.svg';
import keysDisabled from '../../assets/keys-disabled.svg';
import assistant from '../../assets/assistant.svg';

function Weinfest() {

    const [blockSceneChange, setBlockSceneChange] = useState(false);
    const [loading, setLoading] = useState(true);

    const nameInput = useRef(null);

    const storyPoints = [
        {
            text: "Welcome stranger. I’m Robin, a visitor from a magical place in the south of Germany.",
            position: 0,
        },
        {
            text: "What might I call you?",
            position: 0,
            name: true,
            keysDisabled: true,
        },
        {
            text: "Hello, nice to meet you.",
            position: 0,
        },
        {
            text: "I’m a bit of a storyteller. Have you ever heard the tale of the three wine brothers?",
            position: 0,
            action: "decision",
        },
        {
            text: "Well, a long time ago, there were three brothers.",
            position: 20,
        },
        {
            text: "Their parents were makers of fine wines and the boys often played in the mysical vinyards.",
            position: 840,
        },
        {
            text: "One day, they found a golden grape.",
            position: 2020, // Gold = 2020
        },
        {
            text: "Curious as they were, they picked it.",
            position: 2320,
        },
        {
            text: "Suddenly, a door appeared. They jumped in and entered a magical world.",
            position: 2600,
        },
        {
            text: "Green hills covered in golden sunlight rose before them.",
            position: 2920, // Mountain appears
            mountainTop: 40,
            mountainBottom: 60,
        },
        {
            text: "The air was full of laughter, singing and loud voices.",
            position: 3720,
            mountainTop: 40,
            mountainBottom: 60,
        },
        {
            text: "Following the sounds they found themselves on a busy marketplace.",
            position: 4720,
            mountainTop: 40,
            mountainBottom: 60,
            land: true,
        },
        {
            text: "Everyone was drinking from big glasses of wine. They couldn’t believe how cheap it was.",
            position: 6200, // Midday
            mountainTop: 40,
            mountainBottom: 60,
            land: true,
        },
        {
            text: "The three brothers loved it here and decided to stay.",
            position: 7400,
            mountainTop: 40,
            mountainBottom: 60,
            land: true,
        },
        {
            text: "That’s how they founded their own wine village called Mußbach.",
            position: 7900,
            mountainTop: 40,
            mountainBottom: 60,
            land: true,
        },
        {
            text: "A village where time slows down and strangers become friends.",
            position: 8900,
            mountainTop: 40,
            mountainBottom: 60,
            land: true,
        },
        {
            text: "This year, you are given the golden grape to enter that magical place.",
            position: 10000,
            land: true,
            mountainTop: 20,
            mountainBottom: 50,
        },
        {
            text: "On Friday take your time to arrive and settle.",
            position: 11500,
            mountainTop: 20,
            mountainBottom: 40,
            land: true,
        },
        {
            text: "Have a good night sleep from a work week and train ride.",
            position: 13100,
            mountainTop: 20,
            mountainBottom: 40,
            land: true,
            moon: true,
        },
        {
            text: "After a slow Saturday morning we embark on our first adventure. Green hills are calling for a wine expedition.",
            position: 15000,
            mountainTop: 20,
            mountainBottom: 40,
            land: true,
        },
        {
            text: "Regional wine and delicious regional food awaits us at the hill top.",
            position: 16000,
            mountainTop: 20,
            mountainBottom: 40,
            land: true,
        },
        {
            text: "That’s where we hang out until we are reenergized. ",
            position: 17000,
            mountainTop: 20,
            mountainBottom: 40,
            land: true,
        },
        {
            text: "The way down everything seems a little bit easier.",
            position: 18000,
            mountainTop: 70,
            mountainBottom: 90,
            land: true,
        },
        {
            text: "Before you notice we’re back home to enjoy a nap in the hammock.",
            position: 20000,
            mountainTop: 70,
            mountainBottom: 80,
            land: true,
        },
        {
            text: "When the sun sets, we walk to the vibrating marketplace and the wine festival.",
            position: 22500,
            mountainTop: 20,
            mountainBottom: 30,
            land: true,
        },
        {
            text: "Let’s hope there is enough wine for everyone.",
            position: 25500,
            mountainTop: 20,
            mountainBottom: 30,
            land: true,
            moon: true,
        },
        {
            text: "Who knows where the night will end?",
            position: 26500, // Night
            mountainTop: 20,
            mountainBottom: 30,
            land: true,
            moon: true,
        },
        {
            text: "Fast forward. The next morning might be a bit hard. But believe me, it was worth it.",
            position: 29000, // Morning
            mountainTop: 20,
            mountainBottom: 30,
            land: true,
        },
        {
            text: "Finally, even in the tiny village of Mußbach time is passing, however slowly.",
            position: 29500, // Midday
            mountainTop: 20,
            mountainBottom: 30,
            land: true,
        },
        {
            text: "Are you curious to be part of this event?",
            position: 32000,
        },
        {
            text: "Make sure to block the 03 to 05 of July in your calendar.",
            position: 33000,
        },
        {
            text: "Sign up and I’ll let you know once things get more serious.",
            position: 32500,
            signup: true,
            keysDisabled: true,
        },
    ]  
    
    const [storyPoint, setStoryPoint] = useState(storyPoints[0]);
    const [storyIndex, setStoryIndex] = useState(0);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {

        document.onkeydown = (event) => {
            
            if (event.keyCode === 39)
                changeScene('forward');
            else if (event.keyCode === 37)
                changeScene('backward')
        };

        // Loading scene
        setTimeout(() => {
            setLoading(false);
        }, 2500);
    }, [storyIndex]);

    const changeScene = (direction = 'forward', forceUnblock = false) => {

        if (storyIndex === storyPoints.length - 1)
            return;

        if (blockSceneChange && !forceUnblock)
            return;

        let _storyIndex = storyIndex;

        blockNameChange(_storyIndex, direction);

        // Hide text and change it
        if (_storyIndex < storyPoints.length - 1 && _storyIndex > 0)
            setIsHidden(true);

        // Change story point
        if (direction === 'forward' && _storyIndex < storyPoints.length - 1)
            _storyIndex++;
        else if (direction === 'backward' && _storyIndex > 0)
            _storyIndex--;

        let contentElement = document.getElementById('weinfest-content');
        contentElement.style.marginLeft = '-' + storyPoints[_storyIndex].position + 'px';

        setTimeout(() => {
            // Next story point
            setStoryPoint(storyPoints[_storyIndex]);
            setStoryIndex(_storyIndex);
            setIsHidden(false);

            nameInput.current.focus(); 

        }, 700);
    };

    const blockNameChange = (_storyIndex, direction) => {

        if (direction === 'forward' && storyPoints[_storyIndex + 1].name) {
            setBlockSceneChange(true);     
        }
        else if (direction === 'backward' && storyPoints[_storyIndex - 1].name) {
            setBlockSceneChange(true);     
        }
    };

    const unblockNameChange = (event) => {

        // Unblock with enter and change name
        if (event.keyCode === 13) {

            // Default name
            if (nameInput.current.value.length === 0)
                nameInput.current.value = "Mysterious";

            setBlockSceneChange(false);
            storyPoints[2].text = "Hello " + nameInput.current.value + ", nice to meet you.";

            setStoryIndex(2);
            console.log(storyIndex);
            
            changeScene('forward', true);
        }
    }

    return (
        <>  
            <div className={'loader-1 loader ' + (!loading ? 'hidden' : '')}><span>Loading...</span></div> 
            <div className={'loader-2 loader ' + (!loading ? 'hidden' : '')}></div> 
            <div className='weinfest-page evening' onClick={() => changeScene('forward')}>

                <span className={'story ' + (isHidden ? ' hide-story' : ' show-story')}>
                    {storyPoint.text}

                    <div style={{display: storyPoint.name ? 'block' : 'none'}}>
                        <input ref={nameInput} type='text' onKeyDown={unblockNameChange} className={'input-name'}/>
                        <img src={enterKey} alt={'enter'} className={'name-enter'} />
                        <span className='helper-text'>Please start typing, then hit enter.</span>
                    </div>

                    <a target='_blank' style={{display: storyPoint.signup ? 'block' : 'none'}} className={'signup'} href='https://sascharedmond.typeform.com/to/Y4VHnL'>Sign up here</a>
                </span>

                <div className='progress' style={{width: (storyIndex)/ storyPoints.length * 100 + '%'}}></div>

                <img className={'assistant'} src={assistant} />

                <div id={'weinfest-content'}>

                <a target='_blank' className={'signup-quick'} href='https://sascharedmond.typeform.com/to/Y4VHnL'>Sign up without the story</a>

                    <img className={'mountain mountain-bottom'} alt='mountain-bottom' style={{bottom: storyPoint.mountainBottom ? -storyPoint.mountainBottom : -420}} src={mountain1}/>

                    <img className={'mountain mountain-top'} alt='mountain-top' style={{bottom: storyPoint.mountainTop ? -storyPoint.mountainTop : -420}} src={mountain2}/>
                    
                    <img className={'land'} alt='land' style={{bottom: storyPoint.land ? 0 : -200}} src={land}/>

                    <img className={'portal'} alt='portal' style={{bottom: storyPoint.portal ? 20 : -800}} src={portal}/>

                    <img className={'moon'} alt='moon' style={{bottom: storyPoint.moon ? 300 : -400}} src={moon}/>

                    <img src={storyPoint.keysDisabled ? keysDisabled : keys} className={'keys'} alt='keys'/>
                    
                </div>
            </div>
            
        </>
    );
};

export default Weinfest;