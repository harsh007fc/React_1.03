
import './App.css';

function App() {
  let title = 'Welcome to the blog'
  let likes = 50;
  let person = {
    name:'mera',
    age:20,
  }
  let link ='http://www.google.com';
  return (
    <div className="App">
      <div className="content">
        <h1>{ title}</h1>
        <p>Liked {likes} times</p>
        {/* <p>{person}</p> //it gives error we cant give string to them  */}

        <p>{10}</p>
        <p>{'hello buddes'}</p>
        <p>{[1,2,3,4,5,6]}</p>
        <a href={link}>Click here</a>
      </div>
    </div>
  );
}

export default App;
