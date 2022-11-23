import TourCard from './TourCard';
import './ToursGrid.css';
const toursArr = [
  { img: '/img/newyork.jpg', city: 'New York', date: 'Fri 27 Nov 2016' },
  { img: '/img/paris.jpg', city: 'Paris', date: 'Fri 27 Nov 2016' },
  { img: '/img/sanfran.jpg', city: 'San Francisco', date: 'Fri 27 Nov 2016' },
];

function ToursGrid() {
  return (
    <div className='toursGrid'>
      {toursArr.map((tObj) => (
        <TourCard img={tObj.img} city={tObj.city} date={tObj.date} />
      ))}
    </div>
  );
}
export default ToursGrid;
