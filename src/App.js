import React from 'react'
import SideNavbar from './components/SideNavbar';
import { Switch, Route } from 'react-router-dom';
import MyPage from './components/MyPage';
import Monetize from './components/Monetize';

const App = () => {
  return (
    <div style={{display:'flex'}}>
      <SideNavbar/>
      <Switch>
        <Route exact path='/' component={MyPage}/>
        <Route exact path='/monetize' component={Monetize}/>
      </Switch>
    </div>
  )
}

export default App
