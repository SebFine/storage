import React, {useEffect} from 'react';
import LoginPage from './components/LoginPage'
import './styles/App.css';
import {Switch, Route, useHistory} from 'react-router-dom'
import { connect } from 'react-redux';
import Dashboard from './components/Dashboard'

function App(props) {
  let history = useHistory()
  useEffect(() => {
    if (!props.state.user.user) {
      history.push('/login')
    }
    if (props.state.user.user) {
      history.push('/dashboard')
    }
  })

  return (    
        <Switch>
          <Route path='/login'>
            <LoginPage/>
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/list'>
            <Dashboard />
          </Route>
          <Route path='/entnahme'>
            <Dashboard />
          </Route>
          <Route path='/rueckgabe'>
            <Dashboard />
          </Route>
        </Switch>
  );
}

const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps)(App);
