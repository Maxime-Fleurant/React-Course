import React from "react"

const Person = (props) => {

    return (

        <div>

            <h1 onClick={props.clicked}>hello my name is {props.name} and i'm {props.age}</h1>

            <input type="text" onChange={props.changed} value={props.name} ></input>

        </div>

    )

}

export default Person;