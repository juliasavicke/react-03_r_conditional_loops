const user1 = {
  name: 'James Blunt',
  age: 40,
  gender: 'male',
  town: 'London',
};
function Condition() {
  const userIsAdmin = false;
  const isUserLoggedIn = true;
  const gendr = user1.gender === 'male' ? 'man' : 'woman';
  const condAge = user1.age > 18 ? 'adult' : 'teenager';
  const continent = user1.town === 'London' ? 'Europe' : 'USA';

  return (
    <div>
      {userIsAdmin ? (
        <h2>Main Title Admin</h2>
      ) : (
        <h2>Secondary Title NOT Admin</h2>
      )}
      <h2>{userIsAdmin ? 'Admin' : 'NOT Admin'}</h2>
      {userIsAdmin && <h3>Subtitle hello Admin</h3>}
      {isUserLoggedIn ? <button>Logout</button> : <button>Login</button>}
      {!isUserLoggedIn && <button>Login</button>}
      {isUserLoggedIn && <button>Logout</button>}

      <h3>
        {gendr} {user1.name} is {condAge} and is from {continent}
      </h3>
    </div>
  );
}
export default Condition;
