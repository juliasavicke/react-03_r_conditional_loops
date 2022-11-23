import Condition from './components/Condition';

import Icon from './components/UI/icon/Icon';
import './App.css';
import ArrayOfElements from './components/ArrayOfElements';

function App() {
  return (
    <div className='App container'>
      <h1>App</h1>
      {/* <Condition /> */}
      <Icon size='lg'>thermometer-quarter</Icon>
      <Icon dark>thermometer-half</Icon>
      <Icon color='light'>thermometer-full</Icon>
      <ArrayOfElements />
    </div>
  );
}

export default App;
