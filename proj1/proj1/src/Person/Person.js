import React from "react"

const Person = (props) => {

    return (

        <div>

            <h1>hello my name is {props.name} and i'm {props.age}</h1>

            <input type="text" value={props.name} onChange={props.changed}></input>

        </div>

    )

}

export default Person;