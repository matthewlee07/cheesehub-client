import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CheeseList from './components/cheese-list'; 

const sampleCheese = [
  "Bath Blue",
  "Barkham Blue",
  "Buxton Blue"
];

ReactDOM.render(<CheeseList sampleCheese={sampleCheese}/>, document.getElementById('root'));
registerServiceWorker();
