import './App.css';
import Banner from './components/Banner';
import Destination from './components/Destination';
import data from './data'

function App() {
  const destinationData = data.map(item => <Destination id={item.id} image={item.image} location={item.location} link={item.link} atraction={item.atraction} date={item.date} description={item.description} />);
  return (
    <div className="App">
      <Banner />
      {destinationData}
    </div>
  );
}

export default App;
