import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <nav className="nav">
          <ul>
            <li>
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
              <input type="search" id="city-select" placeholder="Москва" />
            </li>
            <Link to="/">
              <li className="button">
                <p>Погода на 2 дня</p>
              </li>
            </Link>
            <Link to="/seven-days">
              <li className="button">
                <p>Погода на 7 дней</p>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
