import React from 'react';
import { useSelector } from 'react-redux';
import { month, weekday } from './../constants';

function SevenDays() {
  const days = useSelector(({ items }) => items.daily);
  const cityName = useSelector(({ city }) => city);

  return (
    <div className="main__sevenDay">
      <h2>Погода в: {cityName ? cityName : 'Москва'}</h2>
      {days.map((item) => {
        const date = new Date(item.dt * 1000);
        return (
          <div className="card card--seven" key={item.dt}>
            <div className="card--seven__box">
              <div className="time_of_day__box">
                <h2>
                  {weekday[date.getDay()]}, {date.getDate()} {month[date.getMonth()]}
                </h2>
                <ul className="time_of_day">
                  <li>
                    <span>Утром</span>
                    <span className="temp">+{Math.round(item.temp.morn)}&deg;</span>
                  </li>
                  <li>
                    <span>Днём</span>
                    <span className="temp">+{Math.round(item.temp.day)}&deg;</span>
                  </li>
                  <li>
                    <span>Вечером</span>
                    <span className="temp">+{Math.round(item.temp.eve)}&deg;</span>
                  </li>
                  <li>
                    <span>Ночью</span>
                    <span className="temp">+{Math.round(item.temp.night)}&deg;</span>
                  </li>
                </ul>
              </div>
              <div className="cloudiness__box">
                <span className={'icon-' + item.weather[0].icon}>
                  <span className="path1"></span>
                  <span className="path2"></span>
                  <span className="path3"></span>
                </span>
                <div className="card__main__box">
                  <p className="card__main__box__temp">
                    <span className="card__main__box__temp--now">
                      +{Math.round(item.temp.min)}&deg;...{Math.round(item.temp.max)}&deg;
                    </span>
                  </p>
                  <p className="card__main__box__cloudiness">{item.weather[0].description}</p>
                </div>
              </div>
            </div>
            <table className="weather-props">
              <thead>
                <tr>
                  <th>Влажность</th>
                  <th>
                    Давление,
                    <br />
                    мм рт. ст.
                  </th>
                  <th>Вероятность осадков</th>
                  <th>Ветер, м/с</th>
                  <th>Ультрафиолет</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{item.humidity}%</td>
                  <td>{Math.round((item.pressure * 3) / 4)}</td>
                  <td>{Math.round(item.pop * 100)}%</td>
                  <td>{item.wind_speed}</td>
                  <td>{item.uvi}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}

export default SevenDays;
