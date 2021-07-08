import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchWeather =
  (lat = 55.75, lon = 37.62) =>
  async (dispatch) => {
    dispatch({
      type: 'SET_LOADED',
      payload: false,
    });

    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,minutely&appid=0f662c3c3a55466e8f4cbc5846c72b91&units=metric&lang=ru`;

    const response = await axios.get(url);
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

export const setCity = (items) => ({
  type: 'SET_CITY',
  payload: items,
});
