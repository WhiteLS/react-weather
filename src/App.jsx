import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchWeather } from './redux/action';
import { Header } from './components/';
import { Home, SevenDays } from './pages/';

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
            <Route path="/react-weather" component={Home} exact />
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
