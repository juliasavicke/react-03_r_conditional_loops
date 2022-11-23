function NavLink(props) {
  console.log('props ===', props);
  return (
    <a className={`navLink ${props.active ? 'active' : ''}`} href={props.to}>
      {props.children}
    </a>
  );
}
export default NavLink;
