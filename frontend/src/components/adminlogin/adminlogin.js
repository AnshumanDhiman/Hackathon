import React, {useState} from "react"
import "./adminlogin.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const AdminLogin = ({ updateUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const adminlogin = () => {
        axios.post("http://localhost:9002/adminlogin", user)
        .then(res => {
            alert(res.data.message)
            updateUser(res.data.user)
            history.push("/")
        })
    }

    return (
        <div classname="x">
        <div className="mega">
        <div className="login">
	    <div className="logo1"></div>
            <h1 className="adminheading">Admin Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button btn-edit" onClick={adminlogin}>Login</div>
        </div>
        </div>
        </div>
    )
}

export default AdminLogin
