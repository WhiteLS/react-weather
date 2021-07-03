import CardTwoDays from './components/CardTwoDays';
import Header from './components/Header';
import { useSelector } from 'react-redux';

function App() {
  const isLoaded = useSelector(({ isLoaded }) => isLoaded);

  return (
    <div className="App">
      <div className="page">
        <Header />
        <main>
          {/* {isLoaded ?  : <div>1 sec</div>} */}
          <CardTwoDays />
        </main>
      </div>
    </div>
  );
}

export default App;
