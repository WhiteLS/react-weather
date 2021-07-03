import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import { setSelect } from './../redux/action';
import { useEffect } from 'react';

SwiperCore.use([Navigation]);

function CardHourly({ hourly }) {
  const dispatch = useDispatch();

  const isLoaded = useSelector(({ isLoaded }) => isLoaded);

  const handleClick = (e) => {
    dispatch(setSelect(hourly[e]));
  };

  // useEffect(() => {
  //   handleClick(0);
  // }, [isLoaded]);

  return (
    <div>
      <section className="main__hourly">
        <div className="main__hourly__buttons">
          <button className="button button--hourly button--radius">Сегодня, 15 июня</button>
          <button className="button button--hourly button--radius">Завтра, 16 июня</button>
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
                let date = new Date(item.dt * 1000);
                return (
                  <SwiperSlide key={item.dt} onClick={() => handleClick(index)}>
                    <li>
                      <span className="time">
                        {(date.getHours() < 10 ? '0' : '') + date.getHours()}:00
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24">
                        <defs>
                          <radialGradient
                            id="a"
                            cx="82.715%"
                            cy="14.258%"
                            fx="82.715%"
                            fy="14.258%">
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
