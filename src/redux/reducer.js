const initialState = {
  items: {
    current: {
      weather: [{}],
    },
    hourly: [],
    daily: [],
  },
  select: {
    temp: '',
    feels_like: '',
    pop: '',
    pressure: '',
    wind_speed: '',
    humidity: '',
    weather: [{}],
  },
  city: '',
  isLoaded: false,
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WEATHER':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };

    case 'SET_SELECT':
      return {
        ...state,
        select: action.payload,
      };

    case 'SET_CITY':
      return {
        ...state,
        city: action.payload,
      };

    default:
      return state;
  }
};

export default weather;
