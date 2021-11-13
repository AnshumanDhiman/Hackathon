import React from "react"
import "./homepagestudent.css"

const Homepage = ({updateUser}) => {
    return (
        <div className="homepage">
            <h1>Hello Homepage Of Student</h1>
            <div className="button" ><a href="/">Logout</a></div>
        </div>
    )
}

export default Homepage