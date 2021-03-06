import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { fetchWeather, setCity } from '../redux/action';

function Header() {
  const [cities, setCities] = useState([]);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const filtered = cities.filter((city) => {
    return city.name.toLowerCase().includes(value.toLocaleLowerCase());
  });

  const handleSelectCity = (i) => {
    dispatch(setCity(filtered[i].name));
    dispatch(fetchWeather(filtered[i].coords.lat, filtered[i].coords.lon));
    setValue('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const fetchCities = async () => {
      const response = await axios.get('https://myjson.dit.upm.es/api/bins/g14');
      const data = await response.data;
      setCities(data);
    };

    fetchCities();
  }, []);

  return (
    <header className="header">
      <div className="wrapper">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__list__item nav__list__item--first">
              <form className="d-flex align-center pos-r" onSubmit={handleSubmit}>
                <label htmlFor="city-select">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="map-marker-alt"
                    className="svg-inline--fa fa-map-marker-alt fa-w-12"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512">
                    <path
                      fill="currentColor"
                      d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                  </svg>
                </label>
                <input
                  type="text"
                  id="city-select"
                  // list="datalist"
                  value={value}
                  placeholder="?????????????? ??????????..."
                  autoComplete="off"
                  onChange={(e) => setValue(e.target.value)}
                />
                {value && filtered.length >= 1 && (
                  <ul className="suggest">
                    {filtered.slice(0, 10).map((item, i) => {
                      return (
                        <li
                          className="suggest__item"
                          key={item.name}
                          onClick={() => handleSelectCity(i)}>
                          {item.name}
                        </li>
                      );
                    })}
                  </ul>
                )}
                {/* <datalist
                  id="datalist"
                  onClick={(e) => console.log(e)}
                  onChange={(item) => console.log(item)}>
                  {value &&
                    filtered.slice(0, 10).map((item) => {
                      return (
                        <option
                          value={item.name + ', ' + item.district + ' ???????? ?????? ?????????? ?????? ???? ??????'}
                          key={item.name}
                          onClick={(item) => console.log(item)}
                          onChange={(item) => console.log(item)}
                          onKeyPress={(item) => console.log(item)}></option>
                      );
                    })}
                </datalist> */}
              </form>
            </li>
            <Link to="/react-weather">
              <li className="button nav__list__item">
                <p>???????????? ???? 2 ??????</p>
              </li>
            </Link>
            <Link to="/seven-days">
              <li className="button nav__list__item">
                <p>???????????? ???? 7 ????????</p>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
