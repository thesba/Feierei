import React, { useState } from 'react';
import './styles.scss';

function Header() {

    const [name, setName] = useState("Mr. Or Mrs. Random");

    const getInviteeName = () => {

        const searchParams = new URLSearchParams(window.location.search);

        return searchParams.get('name') || name;
    }

    return (
        <div className="header-wrapper">
            <h1>Dear {getInviteeName()},</h1>
            <h2>ever since I was little I remember the importance of wine in my region. Full of small villages along the Weinstraße, there happen to be Weinfeste which take place once a year.</h2>
            <h2>In times of growing up, they became somewhat of an institution for hanging out. Every weekend, starting April we met on a fest, which was located in a comfort radius of 10km. This was where we could use bikes.</h2>
            <h2>Fast forward, since four years I invite my best friends to experience this culture for a weekend together at my parents place.</h2>
        </div>
    );
}

export default Header;