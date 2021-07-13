import { month } from './../constants';

function CardTomorrow({ tomorrow, cityName }) {
  const date = new Date();
  date.setDate(date.getDate() + 1);

  // return weather of each 6 hours
  const filteredHours = tomorrow.filter((item) => {
    const date = new Date(item.dt * 1000);
    return date.getDate() === new Date().getDate() + 1 && date.getHours() % 6 === 0;
  });

  return (
    <div className="card card--tomorrow">
      <div className="card__text">
        <div className="card__text__box">
          <p>
            Погода в: <span className="city">{cityName ? cityName : 'Москва'}</span>
          </p>
          <p>На завтра</p>
        </div>
        <h3>
          <span className="day">{date.getDate()}</span>{' '}
          <span className="month">{month[date.getMonth()]}</span>
        </h3>
      </div>
      <div className="card__main">
        <div className="card__main__weather">
          <ul className="card__main__weather__mini">
            {filteredHours &&
              filteredHours.map((item) => {
                const date = new Date(item.dt * 1000);
                return (
                  <li key={item.dt}>
                    <span className="tod">
                      {(date.getHours() < 10 ? '0' : '') + date.getHours()}:00
                    </span>
                    <span class={'icon-' + item.weather[0].icon}>
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                    </span>
                    <span className="temp">+{Math.round(item.temp)}&deg;</span>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardTomorrow;
