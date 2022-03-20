import logo from './logo.svg';
import './App.scss';
import MyComponent from '../components/myComponent'; //or { MyComponent, MyComponent1 }
import ListTodo from './Todos/ListTodo';

import toastify from 'toastify-js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './Example/Home';
import Nav from './Nav/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import ListUsers from './User/ListUsers';
import DetailUser from './User/DetailUser';

const App = () => {
  return (
    <Router>
      <div className="App">

        <header className="App-header">

          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/Todos">
              <ListTodo />
            </Route>
            <Route path="/MyComponent">
              <MyComponent />
            </Route>
            <Route path="/ListUsers" exact>
              <ListUsers />
            </Route>
            <Route path='/ListUsers/:id'>
              <DetailUser />
            </Route>
          </Switch>
        </header>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />

      </div>
    </Router>
  );
}

export default App;
