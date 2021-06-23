import React from 'react';
import CardHourly from './CardHourly';
import CardSelect from './CardSelect';
import CardNow from './CardNow';
import CardTomorrow from './CardTomorrow';

function CardTwoDays() {
  return (
    <div>
      <section className="main__card">
        <CardNow />
        <CardTomorrow />
      </section>
      <CardHourly />
      <CardSelect />
    </div>
  );
}

export default CardTwoDays;
