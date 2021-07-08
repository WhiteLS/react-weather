import React from 'react';
import CardHourly from './CardHourly';
import CardSelect from './CardSelect';
import CardNow from './CardNow';
import CardTomorrow from './CardTomorrow';
import { useSelector } from 'react-redux';

function CardTwoDays() {
  const current = useSelector(({ items }) => items.current);
  const hourly = useSelector(({ items }) => items.hourly);

  return (
    <div>
      <section className="main__card">
        <CardNow current={current} />
        <CardTomorrow tomorrow={hourly} />
      </section>
      <CardHourly hourly={hourly} />
      <CardSelect />
    </div>
  );
}

export default CardTwoDays;
