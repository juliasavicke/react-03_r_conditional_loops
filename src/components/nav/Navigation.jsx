import NavLink from './NavLink';
import './Navigation.css';

function Navigation(props) {
  return (
    <header className='mainHeader'>
      <nav className='container'>
        {props.data.map((link) => (
          <NavLink to={link.to} active={link.active}>
            {link.text}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
export default Navigation;
