import './App.css';
import dots from '../../images/desktop/bg-pattern-dots.svg';

import Header from '../Header/Header';
import CallToAction from '../CallToAction/CallToAction';

function App() {
  return (
    <div className='App'>
      <div className='page'>
        <Header />
        <CallToAction />
      </div>
      <div className='main__image'></div>
      <picture className='dots'>
        <img src={dots} alt='dots' />
      </picture>
    </div>
  );
}

export default App;
