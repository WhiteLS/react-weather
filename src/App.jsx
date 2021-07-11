import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchWeather } from './redux/action';

import CardTwoDays from './components/CardTwoDays';
import Header from './components/Header';
import SevenDays from './components/SevenDays';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const isLoaded = useSelector(({ isLoaded }) => isLoaded);

  useEffect(() => {
    dispatch(fetchWeather());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <div className="page">
        <Header />
        {isLoaded ? (
          <main>
            <Route path="/" component={CardTwoDays} exact />
            <Route path="/seven-days" component={SevenDays} exact />
          </main>
        ) : (
          'loadingggg'
        )}
      </div>
    </div>
  );
}

export default App;
