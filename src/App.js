import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../src/App.css'

function Home(props){
  return <p>You are Home</p>
}

function Pizza(props){
  return <p>Here is Pizza</p>
}

const initialFormValues = {
  name:'',
  size:'',
  text:'',
  pepperoni: false,
  ham: false,
  cheese: false,
  pineapple: false,
}

const initialFormErrors = {
  name: '',
  size:'',
  text:'',
}

const initialOrder = []
const initialDisabled = true;

const App = () => {

  const [order, setOrder] = useState(initialOrder)

  return ( 
  <Router>
    <div className='App'>
        <header className='App-header'>
          <h1>Lambda Eats</h1>
          <nav>
              <Link to='/'>Home</Link>
              <Link to='/pizza'>Pizza?</Link>
          </nav>
        </header>
        <section>
        </section>
         <Route exact path='/' component={Home}/>
          <Route path='/pizza' component={Pizza}/>
          </div>
        </Router>
    
      
    
  );
};
export default App;
