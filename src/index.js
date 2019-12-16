import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route,Link,BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import App from "./App"
import Charts from './views/charts';
import UnstateDemo from './views/UnstateDemo';
import DatatablePage from './views/datatablePage';
import SignupForm from './views/registerPage';
import LoginForm from './views/loginPage';

const routing = (
  <Router>
    <div>
      <nav className="navbar">
        <div className="navlinks">
            <Link className="justify-content-center navlink"  to={'/'} > Wizard Form </Link> |
            <Link className="justify-content-center navlink" to ={'/chart'} > Apex Charts </Link> |
            <Link className="justify-content-center navlink" to ={'/unstate'} > Unstate Demo </Link>
            <Link className="justify-content-center navlink" to ={'/datatable'} > DataTable Demo </Link>
            <Link className="justify-content-center navlink" to ={'/signup'} >  SignUp </Link>
            <Link className="justify-content-center navlink" to ={'/login'} >  Login </Link>




        </div>
      </nav>
      <div className="mt-5">
      <Route exact path='/' component={App} />
      <Route path='/chart' component= {Charts} />
      <Route path='/unstate' component={UnstateDemo} />
      <Route path='/datatable' component={DatatablePage} />
      <Route path='/signup' component={SignupForm} />
      <Route path ='/login' component ={LoginForm} />


      </div>
     
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
registerServiceWorker();

