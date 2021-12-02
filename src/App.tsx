import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import PageRender from './PageRender'
import Home from './pages/index'
import Login from './pages/login'
import Register from './pages/register'

const App = () => {
  return (
    <BrowserRouter>
      <h1 className="text-red-500">Hello Friends</h1>
      <Switch>
        <Route path="/" component={PageRender} exact />
        <Route path="/:page" component={PageRender} exact />
        <Route path="/:page/:id" component={PageRender} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default App
