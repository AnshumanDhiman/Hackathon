import './App.css'


import Homepage from "./components/homepage/homepage"
import Home from './components/home/home'
import Login from "./components/login/login"
import Student from "./components/homepagestudent/homepagestudent" 
import AdminLogin from "./components/adminlogin/adminlogin"
import Register from "./components/register/register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import AdminLayout from "./components/AdminPage";
// import "./assets/css/animate.min.css";
// import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
// import "./assets/css/demo.css";
// import "bootstrap/dist/css/bootstrap.min.css";
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
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Route path="/adminlogin">
            <AdminLogin updateUser={updateUser} />
          </Route>
          <Route path="/login">
            <Login updateUser={updateUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/homepagestudent">
            <Student />
          </Route>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
