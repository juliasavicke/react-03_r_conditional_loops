function TourCard(props) {
  return (
    <div>
      <img src={props.img} alt='' />
      <h3>{props.city}</h3>
      <h4>{props.date}</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt quo
        culpa soluta facilis autem dolor!
      </p>
      <button>Click here</button>
    </div>
  );
}
export default TourCard;
