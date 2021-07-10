import React from 'react';
import { useSelector } from 'react-redux';

function SevenDays() {
  const days = useSelector(({ items }) => items.daily);
  const cityName = useSelector(({ city }) => city);
  console.log(days);

  const weekday = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];
  const month = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ];

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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <defs>
                    <radialGradient id="a" cx="82.715%" cy="14.258%" fx="82.715%" fy="14.258%">
                      <stop offset="0%" stopColor="#777AB4" />
                      <stop offset="100%" stopColor="#777AB4" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient
                      id="b"
                      cx="8.171%"
                      cy="-6.535%"
                      r="63.588%"
                      fx="8.171%"
                      fy="-6.535%">
                      <stop offset="0%" stopColor="#777AB4" />
                      <stop offset="100%" stopColor="#777AB4" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <g fill="none">
                    <path
                      fill="#F5F5F5"
                      d="M19 14c1.657 0 3-1.343 3-3s-1.343-3-3-3h-.031c.02-.164.031-.331.031-.5 0-2.209-1.791-4-4-4-1.75 0-3.238 1.124-3.78 2.689-.385-.123-.794-.189-1.22-.189-2.209 0-4 1.791-4 4s1.791 4 4 4c.345 0 .68-.044 1-.126v.126h8z"
                      opacity=".5"
                    />
                    <path
                      fill="#000"
                      fillOpacity=".02"
                      d="M6 19.5c-2.209 0-4-1.791-4-4s1.791-4 4-4c.417 0 .818.064 1.196.182.563-1.842 2.277-3.182 4.304-3.182 2.485 0 4.5 2.015 4.5 4.5 0 .235-.018.465-.053.69.328-.123.682-.19 1.053-.19 1.657 0 3 1.343 3 3s-1.343 3-3 3h-11zM6 19.75c-2.209 0-4-1.791-4-4s1.791-4 4-4c.417 0 .818.064 1.196.182.563-1.842 2.277-3.182 4.304-3.182 2.485 0 4.5 2.015 4.5 4.5 0 .235-.018.465-.053.69.328-.123.682-.19 1.053-.19 1.657 0 3 1.343 3 3s-1.343 3-3 3h-11zM6 20c-2.209 0-4-1.791-4-4s1.791-4 4-4c.417 0 .818.064 1.196.182.563-1.842 2.277-3.182 4.304-3.182 2.485 0 4.5 2.015 4.5 4.5 0 .235-.018.465-.053.69.328-.123.682-.19 1.053-.19 1.657 0 3 1.343 3 3s-1.343 3-3 3h-11z"
                    />
                    <path
                      fill="#000"
                      fillOpacity=".02"
                      fillRule="nonzero"
                      d="M16.25 12.5c0-2.623-2.127-4.75-4.75-4.75-2.02 0-3.792 1.272-4.465 3.127-.335-.084-.682-.127-1.035-.127-2.347 0-4.25 1.903-4.25 4.25s1.903 4.25 4.25 4.25h11c1.795 0 3.25-1.455 3.25-3.25s-1.455-3.25-3.25-3.25c-.259 0-.515.03-.762.09l.012-.34z"
                    />
                    <path
                      fill="#FFF"
                      d="M6 19c-2.209 0-4-1.791-4-4s1.791-4 4-4c.417 0 .818.064 1.196.182.563-1.842 2.277-3.182 4.304-3.182 2.485 0 4.5 2.015 4.5 4.5 0 .235-.018.465-.053.69.328-.123.682-.19 1.053-.19 1.657 0 3 1.343 3 3s-1.343 3-3 3h-11z"
                    />
                    <circle cx="6" cy="15" r="4" fill="url(#a)" opacity=".24" />
                    <circle cx="17" cy="16" r="3" fill="url(#b)" opacity=".24" />
                    <circle cx="11.5" cy="12.5" r="4.5" fill="#FFF" />
                  </g>
                </svg>
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
                  <td>{item.pop * 100}%</td>
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
