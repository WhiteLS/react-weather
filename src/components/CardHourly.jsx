import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import { setSelect } from './../redux/action';
import { useEffect } from 'react';

SwiperCore.use([Navigation]);

function CardHourly({ hourly }) {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(setSelect(hourly[e]));
  };

  const isLoaded = useSelector(({ isLoaded }) => isLoaded);
  const date = new Date();
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

  useEffect(() => {
    isLoaded && handleClick(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded]);

  return (
    <div>
      <section className="main__hourly">
        <div className="main__hourly__buttons">
          <button className="button button--hourly button--radius">
            {date.getDate()} {month[date.getMonth()]}
          </button>
        </div>
        <div className="card card--hourly">
          <div className="swiper-button-prev"></div>
          <ul className="card__main__weather__mini">
            <Swiper
              slidesPerView={9}
              slidesPerGroup={3}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}>
              {hourly.map((item, index) => {
                const date = new Date(item.dt * 1000);
                return (
                  <SwiperSlide key={item.dt} onClick={() => handleClick(index)}>
                    <li>
                      <span className="date">
                        {(date.getDate() < 10 ? '0' : '') + date.getDate()}.
                        {(date.getMonth() < 10 ? '0' : '') + (date.getMonth() + 1)}
                      </span>
                      <span className="time">
                        {(date.getHours() < 10 ? '0' : '') + date.getHours()}:00
                      </span>
                      {/* <object
                        data={'assets/' + item.weather[0].icon + '.svg'}
                        type="image/svg+xml">
                        <img src={'assets/' + item.weather[0].icon + '.svg'} />
                      </object> */}
                      <span class={'icon-' + item.weather[0].icon}>
                        <span class="path1"></span>
                        <span class="path2"></span>
                        <span class="path3"></span>
                      </span>
                      {/* <img
                        src={'assets/' + item.weather[0].icon + '.svg'}
                        alt={item.weather[0].description}
                      /> */}
                      {/* <img
                        src={'http://openweathermap.org/img/wn/' + item.weather[0].icon + '@4x.png'}
                        alt={item.weather[0].description}
                      /> */}
                      <span className="temp">+{Math.round(item.temp)}&deg;</span>
                    </li>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </ul>
          <div className="swiper-button-next"></div>
        </div>
      </section>
    </div>
  );
}

export default CardHourly;
