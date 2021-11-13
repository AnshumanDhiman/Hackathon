import React from 'react'
import './Float.css'
function Float(props) {
    console.log(props)
    const {Heading, filterBy} = props.values
    return (
        <div className = "work"> 
            <h2>Need a {Heading} : </h2>
            {filterBy.map(val => (<p>{val}</p>))}
        </div>
    )
}
 
 export default Float
