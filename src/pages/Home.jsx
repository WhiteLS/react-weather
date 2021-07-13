import React from 'react';
import { useSelector } from 'react-redux';

import { CardHourly, SelectedHour, CardCurrent, CardTomorrow } from '../components/';

function Home() {
  const current = useSelector(({ items }) => items.current);
  const hourly = useSelector(({ items }) => items.hourly);
  const cityName = useSelector(({ city }) => city);

  return (
    <div>
      <section className="main__card">
        <CardCurrent current={current} cityName={cityName} />
        <CardTomorrow tomorrow={hourly} cityName={cityName} />
      </section>
      <CardHourly hourly={hourly} />
      <SelectedHour />
    </div>
  );
}

export default Home;
