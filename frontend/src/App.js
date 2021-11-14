import './App.css'

import Homepage from "./components/homepage/homepage"
import Home from './components/home/home'
import Login from "./components/login/login"
import View from "./components/homepagestudent/view" 
import AdminLogin from "./components/adminlogin/adminlogin"
import Register from "./components/register/register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from 'react';


function App() {

  const [ user, setLoginUser] = useState({})

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("MyUser")))
  }, [])

  const updateUser = (user) => {
    localStorage.setItem("MyUser", JSON.stringify(user))
    setLoginUser(user)
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
          {/*    */}
            {
              user && user._id ? <Homepage updateUser={updateUser} /> : <Home updateUser={updateUser}/>
            }
             
          </Route>
          <Route path="/adminlogin">
            <AdminLogin updateUser={updateUser} />
          </Route>
          <Route path="/login">
            <Login updateUser={updateUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
         
          <Route path="/view">
            <View />
          </Route>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
