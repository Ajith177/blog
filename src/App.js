import logo from './logo.svg';
import './App.css';
import content from './content';
// import './Navbar';
import { render } from '@testing-library/react';
import Navbar from './Navbar';
import Content from './content'

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Content/>
    </div>
  );
}


export default App

// function MyApp(){
//   return (
//     <div>
//     <h2> Welcome to my app</h2>
//     <button>submit</button>
//     </div>
//   )
// };


