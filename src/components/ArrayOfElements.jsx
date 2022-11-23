const colors = [
  { id: 1, value: 'red' },
  { id: 2, value: 'green' },
  { id: 3, covaluelor: 'blue' },
  { id: 4, value: 'yellow' },
];
function ArrayOfElements() {
  const h2Styles = {
    fontSize: '3rem',
    color: 'tomato',
  };
  return (
    <div>
      <h2 style={h2Styles}>Array of Elements</h2>
      <ul>
        {colors.map((cObj, i) => (
          <li key={cObj.id} style={{ color: cObj.value }}>
            {cObj.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ArrayOfElements;
