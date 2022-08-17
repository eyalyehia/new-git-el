import React from 'react'
import Gallery from './gallery';
import About from './about';
import { BrowserRouter as Router, Switch , Route ,Link } from 'react-router-dom';

function Home() {
  return (
    <Router>
      
    <div className='container text-center'>
      <Link to="./home" >Home </Link>
      <Link to="./gallery" >Gallery </Link>
      <Link to="./about" >About </Link>
    </div>
    <div className='container text-center' >
      <Switch>
        <Route exact path='/gallery' component = {Gallery} ></Route>
        <Route exact path='/home' component = {Home} ></Route>
        <Route exact path='/about' component = {About} ></Route>
      </Switch>
    </div>
    </Router>
  )
}

export default Home