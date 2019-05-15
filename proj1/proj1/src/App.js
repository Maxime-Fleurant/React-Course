import React, {Component} from 'react';
import styles from './App.module.css';
import Person from "./Person/Person"

class App extends Component {

    state = {
        persons : [
            {
                name: "max",
                age : "29",
                id  : "aaez12"
            },
            {
                name: "celestia",
                age : "21",
                id  : "aaez123"
            },
            {
                name: "infame",
                age : "20",
                id  : "aaez124"
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

    inputHandler = (event, id) => {

        const personIndex = this.state.persons.findIndex(p => p.id === id);

        let person      = {...this.state.persons[personIndex]};
            person.name = event.target.value;

        let persons = [...this.state.persons];
        persons[personIndex]  = person;

        this.setState({
            persons : persons
        })

    }

    deletePersonHandler = (index) => {
        
        let persons = [...this.state.persons];
        persons.splice(index, 1);

        this.setState({
            persons : persons
        })
        
    }

    render() {

        const displayState = this.state.display;
        let   toDisplay    = null;
        let   pclasse      = [];
        let   buttonback   = styles.backred;

        if (displayState) {
            
            toDisplay = this.state.persons.map((el, index) => {
                return (
                    <Person
                        name    = {el.name}
                        age     = {el.age}
                        changed = {(event) => {this.inputHandler(event, el.id)}}
                        key     = {el.id}
                        clicked = {(event) => this.deletePersonHandler(index)}
                    />
                )
            });

            buttonback = styles.backgreen;

        }

        if (this.state.persons.length < 3) {

            pclasse.push(styles.red);

        }

        if (this.state.persons.length < 2) {

            pclasse.push(styles.bold);

        }

        return (

            <div className={styles.App}>

                <p className={pclasse.join(" ")}>This is really working</p>

                <button className={buttonback} onClick={this.displayHander}>Click</button>

                {toDisplay}

            </div>

        )

    }

}

export default App;