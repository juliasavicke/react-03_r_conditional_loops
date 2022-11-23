import Condition from './components/Condition';

import './App.css';
import Icon from './components/UI/icon/Icon';

function App() {
  return (
    <div className='App container'>
      <h1>App</h1>
      {/* <Condition /> */}
      <Icon size='lg'>thermometer-quarter</Icon>
      <Icon>thermometer-half</Icon>
      <Icon>thermometer-full</Icon>
    </div>
  );
}

export default App;
