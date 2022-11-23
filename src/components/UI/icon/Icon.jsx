function Icon(props) {
  let iconClassStr = 'fa fa-';
  iconClassStr += props.children;
  iconClassStr += props.size === 'lg' ? ' fa-5x' : ' fa-2x';
  if (!props.children) {
    return <h3>Please add Icon class</h3>;
  }
  return <i className={iconClassStr} aria-hidden='true'></i>;
}
export default Icon;
