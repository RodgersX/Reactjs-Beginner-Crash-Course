import React from 'react'

// import the css file
import './Person.css'
// es6 equivalence function
// use props to output dynamic content
const person = (props) => {
    // output dynamic content
    
    return (
        // props.children is pre-defined
        // used to add more data not in the props
        // props.click accesses the prop
        // passed in the parent element
        // onChange() looks out for any changes to the element
        <div className="Person">
            <p onClick={ props.click }>I'm { props.name } and I am { props.age } years old!</p>
            <p>{ props.children }</p>
            <input type="text" onChange={ props.changed } value={ props.name } />
        </div>
        
    )
}

export default person