import Card from './Card';
import './Numbers.css';

function Numbers() {
  const numbersArr = [
    { total: 3254, title: 'Projects completed' },
    { total: 3254, title: 'Happy Clients' },
    { total: 3254, title: 'Cups of Coffee' },
    { total: 3254, title: 'Real Professionals' },
  ];

  return (
    <div className='numbersFlex'>
      {numbersArr.map((num) => (
        <Card total={num.total} title={num.title} />
      ))}
    </div>
  );
}
export default Numbers;
