import './Header.css';
import logo from '../../images/desktop/logo.svg';

const Header = () => {
  return (
    <header className='header'>
      <picture>
        <img src={logo} alt='pod logo' />
      </picture>
    </header>
  );
};

export default Header;
