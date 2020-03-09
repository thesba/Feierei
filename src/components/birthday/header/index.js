import React, { useState } from 'react';
import './styles.scss';

function Header() {

    const [name] = useState("Mr. Or Mrs. Random");

    const getInviteeName = () => {

        const searchParams = new URLSearchParams(window.location.search);

        return searchParams.get('name') || name;
    }

    return (
        <div className="header-wrapper">
            <h1>Dear {getInviteeName()},</h1>
            <h2>I want you {getInviteeName()}* to be my special guest for my 28th birthday party!</h2>
            <h2>Not only is this a great age to celebrate. It's also the kickoff of me being settled in Berlin. Believe it or not, I have my own flat!!**</h2>
            <h2>So celebrate with me during the <span className="highlight-text">21. - 22. March.***</span></h2>
            <h3>* You are great and beautiful.</h3>
            <h3>** Well not really, I have four great roomies.</h3>
            <h3>*** It's a multi-day event. Guests are welcome to arrive on friday. Sleeping areas will be provided according to demand.</h3>
        </div>
    );
}

export default Header;