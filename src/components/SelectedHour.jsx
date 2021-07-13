import { useSelector } from 'react-redux';

import { month } from '../constants';

function SelectedHour() {
  const currentHour = useSelector(({ select }) => select);
  const date = new Date(currentHour.dt * 1000);

  return (
    <div>
      <section className="main__table">
        <div className="main__table__date button button--radius button--desc">
          <p>
            {date.getDate()} {month[date.getMonth()]},{' '}
            {(date.getHours() < 10 ? '0' : '') + date.getHours()}:00
          </p>
        </div>
        <div className="card card--table">
          <table>
            <tbody>
              <tr>
                <td className="table__cell__svg">
                  <span className={'icon-' + currentHour.weather[0].icon}>
                    <span className="path1"></span>
                    <span className="path2"></span>
                    <span className="path3"></span>
                  </span>
                </td>
                <td className="table__cell__temp">+{Math.round(currentHour.temp)}&deg;</td>
                <td className="table__cell_explanation">Ощущается как, &deg;С</td>
                <td className="table__cell_explanation">Вероятность осадков, %</td>
                <td className="table__cell_explanation">
                  Давление, <br />
                  мм рт. ст.
                </td>
                <td className="table__cell_explanation">Ветер, м/с</td>
                <td className="table__cell_explanation">Влажность воздуха</td>
              </tr>
              <tr>
                <td colSpan="2" className="table__cell__cloudy">
                  облачно с прояснениями
                </td>
                <td>+{Math.round(currentHour.feels_like)}&deg;</td>
                <td>{Math.round(currentHour.pop * 100)}%</td>
                <td>{Math.round((currentHour.pressure * 3) / 4)}</td>
                <td>{currentHour.wind_speed}</td>
                <td>{currentHour.humidity}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default SelectedHour;
