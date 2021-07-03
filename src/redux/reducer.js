const initialState = {
  items: {
    current: {
      weather: [{}],
    },
    hourly: [],
    daily: [],
  },
  select: {},
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

    default:
      return state;
  }
};

export default weather;
