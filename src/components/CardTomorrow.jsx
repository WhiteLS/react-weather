function CardTomorrow({ tomorrow, cityName }) {
  // console.log(
  //   tomorrow.map((item) => {
  //     // return new Date(item.dt * 1000).getHours() % 6 ? null : item;
  //     // if (new Date(item.dt * 1000).getHours() % 6 == 0) {
  //     //   if (new Date(item.dt * 1000).getDate() !== new Date().getDate()) return item;
  //     // } else {
  //     //   return;
  //     // }
  //     if (new Date(item.dt * 1000).getDate() === new Date().getDate() + 1) {
  //       if (new Date(item.dt * 1000).getHours() % 6 == 0) return item;
  //     }
  //   }),
  // );
  // const filteredHours = tomorrow.map((item) => {
  //   if (new Date(item.dt * 1000).getDate() === new Date().getDate() + 1) {
  //     if (new Date(item.dt * 1000).getHours() % 6 == 0) {
  //       return item;
  //     } else {
  //       return null;
  //     }
  //   }
  // });
  // const filteredHours = tomorrow.filter((item) => {
  //   const date = new Date(item.dt * 1000);
  //   if (date.getDate() === new Date().getDate() + 1) {
  //     return date.getHours() % 6 == 0 ? item : null;
  //   }
  // });
  const filteredHours = tomorrow.filter((item) => {
    const date = new Date(item.dt * 1000);
    return date.getDate() === new Date().getDate() + 1 && date.getHours() % 6 === 0;
  });

  const date = new Date();
  date.setDate(date.getDate() + 1);

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
                    {/* <object
                      data={'assets/' + item.weather[0].icon + '.svg'}
                      type="image/svg+xml">
                      <img src={'assets/' + item.weather[0].icon + '.svg'} alt={item.weather[0].description} />
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
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardTomorrow;
