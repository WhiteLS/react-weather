import axios from 'axios';

export const fetchWeather = () => (dispatch) => {
  axios
    .get(
      'https://api.openweathermap.org/data/2.5/onecall?lat=54.21&lon=49.62&exclude=alerts,minutely&appid=0f662c3c3a55466e8f4cbc5846c72b91&units=metric&lang=ru',
    )
    .then(({ data }) => {
      dispatch(setWeather(data));
    });
};

export const setWeather = (items) => ({
  type: 'SET_WEATHER',
  payload: items,
});

export const setSelect = (items) => ({
  type: 'SET_SELECT',
  payload: items,
});
