import { HelloWorld } from './HelloWorld'

export function Welcome({ name , age }) {
const WelcomeStyle = {
  backgroundColor: name ? 'greenyellow' : 'darkgray',
  color:name ? '#333' : '#fff'
}
  return (
    <div style={WelcomeStyle}>
      <h2 className='welcome'>Welcome, {name}!</h2>
      {age >= 18 && <p>You are {age} years old.</p>}
    </div>
  );
}
