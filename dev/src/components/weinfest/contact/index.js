import React from 'react';
import './styles.scss';

function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="half map">
        <iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://8bitcity.com/embed?Berlin,13.407737651543,52.498964248286,13"></iframe>
      </div>
      <div className="half">
          <h1>Mussbach an der Weinstraße</h1>
          <h2>Rosenstraße 10</h2>
          <h2>67435 Neustadt</h2>
          <h2><a href="https://goo.gl/maps/oR6an1wF2zFuuE7b6">Get Route...</a></h2>
      </div>
    </div>
  );
}

export default Contact;