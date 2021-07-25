import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route path='/about' render={() => <About />} />
          <Route path='/cocktail/:id' render={() => <SingleCocktail />} />
          <Route path='*' render={() => <Error />} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
