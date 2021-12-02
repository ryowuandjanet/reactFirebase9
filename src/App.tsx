import React, { useEffect } from 'react'
import Header from 'components/header'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import PageRender from './PageRender'

import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from 'redux/slice/authSlice'
import { RootState } from 'redux/store'

const App = () => {
  const { currentUser, loading } =useAppSelector(state => state.auth)
  const dispatch =useAppDispatch()

  useEffect(() => {
    dispatch(addUser({name: 'Ryowu'}))
  },[])

  console.log({currentUser, loading})

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={PageRender} exact />
        <Route path="/:page" component={PageRender} exact />
        <Route path="/:page/:id" component={PageRender} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default App
