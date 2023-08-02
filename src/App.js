import logo from './logo.svg';
import './App.css';
import content from './content';
import FetchAPI from './fetch';
// import './Navbar';
import { render } from '@testing-library/react';
import Navbar from './Navbar';
import Content from './content'

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Content/>
      <FetchAPI/>
    </div>
  );
}


export default App




