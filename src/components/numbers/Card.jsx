function Card(props) {
  return (
    <div className='cardFlex'>
      <h2>{props.total}</h2>
      <p>{props.title}</p>
    </div>
  );
}
export default Card;
