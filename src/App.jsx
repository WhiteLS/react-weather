import CardTwoDays from './components/CardTwoDays';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />
        <main>
          <CardTwoDays />
        </main>
      </div>
    </div>
  );
}

export default App;
