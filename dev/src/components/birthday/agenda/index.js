import React from 'react';
import './styles.scss';

function Agenda() {
  return (
    <div className="agenda-wrapper">

      <div className="agenda-day">
        <h1>Saturday, 21. March</h1>
      </div>

      <div className="agenda-brunch agenda-item">
        <h1>8-Bit Brunch 11am</h1>
        <h2>We start into the first day with brunch at my place - and only 8 ingredients! Let's hang out here until people arrived and we can head off. </h2>
      </div>

      <div className="agenda-park agenda-item">
        <h1>Park'n'Games 2pm</h1>
        <h2>Next station is the park to celebrate spring and play some retro games outside. Flunky Ball for sure!</h2>
      </div>
      
      <div className="agenda-night agenda-item">
        <h1>Beer'n'Games 6pm</h1>
        <h2>After we're back from celebrating spring, we had back to my place and jump right into having more beers, singing along 8-Bit-songs and playing awesome games on the projector.</h2>
      </div>

      <div className="agenda-day">
        <h1>Sunday, 22. March</h1>
      </div>

      <div className="agenda-hangover agenda-item">
        <h1>Hangover</h1>
        <h2>Nothing really planned here. Sleeping, eating and heading off, I guess?!</h2>
      </div>

    </div>
  );
}

export default Agenda;