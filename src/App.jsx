import Condition from './components/Condition';

import Icon from './components/UI/icon/Icon';
import './App.css';
import ArrayOfElements from './components/ArrayOfElements';
import Navigation from './components/nav/Navigation';
import data from './assets/data.js';
import ToursGrid from './components/tours/ToursGrid';
import Footer from './components/footer/Footer';
import Numbers from './components/numbers/Numbers';

console.log('data ===', data);

function App() {
  return (
    <div className='App container'>
      <Navigation data={data} />
      <h1>App</h1>
      {/* <Condition /> */}
      <Icon size='lg'>thermometer-quarter</Icon>
      <Icon dark>thermometer-half</Icon>
      <Icon color='light'>thermometer-full</Icon>
      <ArrayOfElements />
      <ToursGrid />
      <Numbers />
      <Footer />
    </div>
  );
}

export default App;
