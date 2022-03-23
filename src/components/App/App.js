import './App.css';
import dots from '../../images/desktop/bg-pattern-dots.svg';
import mainImage from '../../images/desktop/image-host.jpg';

import Header from '../Header/Header';
import CallToAction from '../CallToAction/CallToAction';

function App() {
  return (
    <div className='App'>
      <div className='page'>
        <Header />
        <CallToAction />

        <img src={mainImage} alt='radio host' className='main__image' />
        <img src={dots} alt='dots' className='dots' />
      </div>
    </div>
  );
}

export default App;
