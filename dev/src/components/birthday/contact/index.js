import React from 'react';
import './styles.scss';

function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="half map">
        <iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://8bitcity.com/embed?Berlin,13.407737651543,52.498964248286,13"></iframe>
      </div>
      <div className="half">
          <h1>WHERE?</h1>
          <h2>10551 Berlin/ Moabit</h2>
          <h2><a>Ask me for address.</a></h2>
          <h3>Public transport: TXL from Hbf; U8 to Turmstrasse</h3>
      </div>
    </div>
  );
}

export default Contact;