import React from 'react';

function CardNow({ current, cityName = 'Москва' }) {
  // console.log(current);
  const date = new Date(current.dt * 1000);

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
    <div className="card card--today">
      <div className="card__text">
        <div className="card__text__box">
          <p>
            Погода в: <span className="city">{cityName ? cityName : 'Москва'}</span>
          </p>
          <p>
            Сейчас {date.getHours()}:{(date.getMinutes() < 10 ? '0' : '') + date.getMinutes()},{' '}
            {weekday[date.getDay()]}
          </p>
        </div>
        <h3>
          <span className="day">{date.getDate()}</span>{' '}
          <span className="month">{month[date.getMonth()]}</span>
        </h3>
      </div>
      <div className="card__main">
        {/* <object data={'../assets/' + current.weather[0].icon + '.svg'} type="image/svg+xml">
          <img src={'../assets/' + current.weather[0].icon + '.svg'} alt={current.weather[0].description} />
        </object> */}
        <img
          src={'../assets/' + current.weather[0].icon + '.svg'}
          alt={current.weather[0].description}
        />
        {/* <img
          src={'http://openweathermap.org/img/wn/' + current.weather[0].icon + '@4x.png'}
          alt={current.weather[0].description}
        /> */}
        <div className="card__main__box">
          <p className="card__main__box__temp">
            <span className="card__main__box__temp--now">+{Math.round(current.temp)}&deg;</span>,
            ощущается как
            <span className="card__main__box__temp--likes">
              {' '}
              +{Math.round(current.feels_like)}&deg;
            </span>
          </p>
          <p className="card__main__box__cloudiness">{current.weather[0].description}</p>
        </div>
      </div>
      <div className="card__footer">
        <ul className="card__footer__weather">
          <li className="card__footer__weather__item wind">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="wind"
              className="svg-inline--fa fa-wind fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512">
              <path
                fill="currentColor"
                d="M156.7 256H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h142.2c15.9 0 30.8 10.9 33.4 26.6 3.3 20-12.1 37.4-31.6 37.4-14.1 0-26.1-9.2-30.4-21.9-2.1-6.3-8.6-10.1-15.2-10.1H81.6c-9.8 0-17.7 8.8-15.9 18.4 8.6 44.1 47.6 77.6 94.2 77.6 57.1 0 102.7-50.1 95.2-108.6C249 291 205.4 256 156.7 256zM16 224h336c59.7 0 106.8-54.8 93.8-116.7-7.6-36.2-36.9-65.5-73.1-73.1-55.4-11.6-105.1 24.9-114.9 75.5-1.9 9.6 6.1 18.3 15.8 18.3h32.8c6.7 0 13.1-3.8 15.2-10.1C325.9 105.2 337.9 96 352 96c19.4 0 34.9 17.4 31.6 37.4-2.6 15.7-17.4 26.6-33.4 26.6H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16zm384 32H243.7c19.3 16.6 33.2 38.8 39.8 64H400c26.5 0 48 21.5 48 48s-21.5 48-48 48c-17.9 0-33.3-9.9-41.6-24.4-2.9-5-8.7-7.6-14.5-7.6h-33.8c-10.9 0-19 10.8-15.3 21.1 17.8 50.6 70.5 84.8 129.4 72.3 41.2-8.7 75.1-41.6 84.7-82.7C526 321.5 470.5 256 400 256z"></path>
            </svg>
            {current.wind_speed} м/с
          </li>
          <li className="card__footer__weather__item humidity">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="tint"
              className="svg-inline--fa fa-tint fa-w-11"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 352 512">
              <path
                fill="currentColor"
                d="M205.22 22.09c-7.94-28.78-49.44-30.12-58.44 0C100.01 179.85 0 222.72 0 333.91 0 432.35 78.72 512 176 512s176-79.65 176-178.09c0-111.75-99.79-153.34-146.78-311.82zM176 448c-61.75 0-112-50.25-112-112 0-8.84 7.16-16 16-16s16 7.16 16 16c0 44.11 35.89 80 80 80 8.84 0 16 7.16 16 16s-7.16 16-16 16z"></path>
            </svg>
            {current.humidity}%
          </li>
          <li className="card__footer__weather__item pressure">
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 512 512">
              <linearGradient
                id="SVGID_1_"
                gradientUnits="userSpaceOnUse"
                x1="256"
                y1="514"
                x2="256"
                y2="2"
                gradientTransform="matrix(1 0 0 -1 0 514)"></linearGradient>
              <path
                d="M419,340c0,11.046-8.954,20-20,20s-20-8.954-20-20s8.954-20,20-20S419,328.954,419,340z
                          M110,197c11.046,0,20-8.954,20-20s-8.954-20-20-20s-20,8.954-20,20S98.954,197,110,197z M168,136c11.046,0,20-8.954,20-20
                          s-8.954-20-20-20s-20,8.954-20,20S156.954,136,168,136z M512,256c0,68.38-26.629,132.667-74.98,181.02
                          C388.667,485.371,324.38,512,256,512s-132.667-26.629-181.02-74.98C26.629,388.667,0,324.38,0,256S26.629,123.333,74.98,74.98
                          C123.333,26.629,187.62,0,256,0s132.667,26.629,181.02,74.98C485.371,123.333,512,187.62,512,256z M472,256
                          c0-119.103-96.897-216-216-216S40,136.897,40,256s96.897,216,216,216S472,375.103,472,256z M395.5,114.5L293,141l23.858,23.858
                          L155.852,325.864c-22.298-10.622-49.842-6.727-68.278,11.709l28.285,28.284c3.777-3.777,8.8-5.858,14.142-5.858
                          s10.364,2.081,14.142,5.858c3.778,3.778,5.858,8.8,5.858,14.142s-2.08,10.365-5.858,14.142l28.285,28.284
                          c18.436-18.436,22.331-45.98,11.709-68.278l161.006-161.006L369,217L395.5,114.5z M256,110c11.046,0,20-8.954,20-20s-8.954-20-20-20
                          s-20,8.954-20,20S244.954,110,256,110z M110,256c0-11.046-8.954-20-20-20s-20,8.954-20,20c0,11.046,8.954,20,20,20
                          S110,267.046,110,256z M422,236c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20s20-8.954,20-20C442,244.954,433.046,236,422,236z
                          "
              />
            </svg>
            {Math.round((current.pressure * 3) / 4)} мм рт. ст.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CardNow;
