import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchWeather = () => async (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });

  const response = await axios.get(
    'https://api.openweathermap.org/data/2.5/onecall?lat=54.21&lon=49.62&exclude=alerts,minutely&appid=0f662c3c3a55466e8f4cbc5846c72b91&units=metric&lang=ru',
  );
  // .then(({ data }) => {
  //   dispatch(setWeather(data));
  // });
  const data = await response.data;
  dispatch(setWeather(data));
  return data;
};

export const setWeather = (items) => ({
  type: 'SET_WEATHER',
  payload: items,
});

export const setSelect = (items) => ({
  type: 'SET_SELECT',
  payload: items,
});
