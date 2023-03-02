import { FC } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Map from './Map'
import About from './About'

import './style/main.sass'

const App: FC = () => {
  return (
    <HashRouter hashType='noslash'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/Map'>
          <Map />
        </Route>
        <Route exact path='/learn_more'>
          <About />
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default App
