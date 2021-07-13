import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { setSelect } from '../redux/action';
import { month } from '../constants';

SwiperCore.use([Navigation]);

function CardHourly({ hourly }) {
  // const isLoaded = useSelector(({ isLoaded }) => isLoaded);
  const date = new Date();
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(setSelect(item));
  };
  // const handleClick = (e) => {
  //   dispatch(setSelect(hourly[e]));
  // };

  useEffect(() => {
    dispatch(setSelect(hourly[0]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hourly]);

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
              {hourly.map((item) => {
                const date = new Date(item.dt * 1000);
                return (
                  <SwiperSlide key={item.dt} onClick={() => handleClick(item)}>
                    <li>
                      <span className="date">
                        {(date.getDate() < 10 ? '0' : '') + date.getDate()}.
                        {(date.getMonth() < 10 ? '0' : '') + (date.getMonth() + 1)}
                      </span>
                      <span className="time">
                        {(date.getHours() < 10 ? '0' : '') + date.getHours()}:00
                      </span>
                      <span className={'icon-' + item.weather[0].icon}>
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                      </span>
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
