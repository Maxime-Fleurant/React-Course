import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {

    state = {
        persons : [
            {
                name: "max",
                age : "29"
            },
            {
                name : "celestia",
                age : "21"
            },
            {
                name : "infame",
                age : "20"
            }
        ],
        display : false
    }

    displayHander = (event) => {

        const displayState = this.state.display;
        
        this.setState({
            display : !displayState
        })

    }

    inputHandler = (event, index) => {

        let person      = {...this.state.persons[index]};
            person.name = event.target.value;

        let persons = [...this.state.persons];
        persons[index]  = person;

        this.setState({
            persons : persons
        })

    }

    render() {

        const displayState = this.state.display;
        let   toDisplay    = null;

        if (displayState) {
            
            toDisplay = [...this.state.persons].map((el, index) => {

                return (

                    <Person
                        name    = {el.name}
                        age     = {el.age}
                        index   = {index}
                        changed = {(event) => {this.inputHandler(event, index)}}
                        key     = {el.name + el.age}
                    />

                )

            });

        }

        return (

            <div className="App">

                <button onClick={this.displayHander}>Click</button>

                {toDisplay}

            </div>

        )

    }

}

export default App;