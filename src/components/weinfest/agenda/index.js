import React from 'react';
import './styles.scss';

function Agenda() {
  return (
    <div className="agenda-wrapper">

    <div className="agenda-day">
        <h1>Also this year, you can expect some cool traditions plus some new ideas:</h1>
      </div>

      <div className="agenda-day">
        <h1>Friday, 03. July</h1>
      </div>

      <div className="agenda-arrival agenda-item">
        <h1>Arrival + Chill</h1>
        <h2>Let's all arrive without hurry, maybe after working the whole day and spending time in the train, bus or sharing a car ride.</h2>
        <h2>We play some games, hang out in the garden and have some food together. No matter when you manage to arrive, you won't miss out on the winefest.</h2>
      </div>

      <div className="agenda-day">
        <h1>Saturday, 04. July</h1>
      </div>

      <div className="agenda-hike agenda-item">
        <h1>Wine Hike - 9:30</h1>
        <h2>The first full day we start by having some basic breakfast before we head to off to REWE getting ready for the wine hike. We live close by a little mountain range, which we happen to climb - it's a medium hike where we get started with some nice wine schorle and snacks until we arrive at the mountain top restaurant. </h2>
        <h2>We have no time pressure and just take the time we need - talking, drinking, eating, playing and just having a good day.</h2>
      </div>
      
      <div className="agenda-garden agenda-item">
        <h1>Garden Fun & Relax - 17:00</h1>
        <h2>After the day spent hiking, we take some rest in the garden - be aware there is only one hammock! As some already know, my parent love to spent time with us, so my Dad is likely to put on a little bonfire.</h2>
        <h2>While we're slowly getting ready for the winefest, anything can and nothing must!</h2>
      </div>

      <div className="agenda-winefest agenda-item">
        <h1>Weinfest - 20:00</h1>
        <h2>The next highlight on the list is - of course - the actual winefest. We all walk together and approx 15 Minutes later we're in the heart if Mußbach where the winfest is located in a old courtyard.</h2>
        <h2>Just some hightlights up front:</h2>
        <ul>
          <li>0,5l Weinschorle for only 3,50€</li>
          <li>A usually pretty cool live band</li>
          <li>Amazing Dampfnudeln</li>
          <li>Lots of other foods</li>
        </ul>
      </div>

      <div className="agenda-day">
        <h1>Sunday, 05. July</h1>
      </div>

      <div className="agenda-hangover agenda-item">
        <h1>Departure</h1>
        <h2>And that was it already!! Sleeping out we have breakfast in the garden and already get ready to go back home.</h2>
      </div>

    </div>
  );
}

export default Agenda;