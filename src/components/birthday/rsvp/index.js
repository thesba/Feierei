import React from 'react';
import './styles.scss';

import noGif from '../../../assets/no.gif';
import goGif from '../../../assets/go.gif';

function RSVP() {

  const sendNo = () => {

    var link = "mailto:sascha.bardua@hotmail.de?"
               + "&subject=I CAN'T MAKE IT :("
               + "&body=Dear Sascha, %0D%0A %0D%0A I am very ashamed to say I won't make it, "
               + "%0D%0A because, [a good reason here]."
               + "%0D%0A %0D%0A If anything changes you are my first priority and I let you know that I'm coming :)"
               + "%0D%0A %0D%0A Best regards,"
               + "%0D%0A [your name here]"
      ;
  
      window.location.href = link;
  }

  const sendGo =() => {

      var link = "mailto:sascha.bardua@hotmail.de?"
               + "&subject=I'M COMING!!!"
               + "&body=Dear Sascha, %0D%0A %0D%0A I am super excited to confirm my participation to this incredible event. "
               + "%0D%0A %0D%0A My arrival is at [your arrival day] and my departure is at [your departure day]."
               + "%0D%0A %0D%0A I would like to bring [your +1 +2 ...] more friends to your party."
               + "%0D%0A %0D%0A I try to dress up in a cool retro way and if I have cool games (digital or analogue), why not bringing them."
               + "%0D%0A %0D%0A I hereby agree to the potential risks of a good party and am willing to accept these. Furthermore I appreciate the cool page you did there. "
               + "%0D%0A %0D%0A Should I have any more questions, e.g. a place to crash, I'll get in touch with you."
               + "%0D%0A %0D%0A Best regards,"
               + "%0D%0A [your name here]"
      ;
  
      window.location.href = link;
  }

  return (
    <div className="rsvp-wrapper">
      <div className="agenda-day">
        <h1>Are you attending?
          <h3>(Please click below to send the response via Mail)</h3>
        </h1>
      </div>
      <div className="no-wrapper half" onClick={sendNo}>
        <span className="no">
          <img src={noGif} />
          <span className="rsvp-text">NO :/</span>
        </span>
      </div>

      <div className="go-wrapper half" onClick={sendGo}>
        <span className="go">
          <img src={goGif} />
          <span className="rsvp-text">GO :}</span>
        </span>
      </div>
    </div>
  );
}

export default RSVP;