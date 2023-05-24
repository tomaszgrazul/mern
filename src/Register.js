import React, {Component} from "react";
import './Register.css';

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            register: []
        };
    }

    addUser = (event) => {
        event.preventDefault();
        

        let newUser = {
            id: Date.now(),
            name: this._inputName.value,
            event: this._inputName.value,
            city: this._inputName.value
        }

        console.log(newUser);

        this.setState((state) => {
            return({
                register: state.register.concat(newUser)
            });
        })

        this._inputName.value = '';
    }

    render() {
        return (

            <div className="register-main">
                <h1>User's List</h1>
                <form onSubmit={this.addUser}>
                    <label htmlFor="name">Imię i Nazwisko</label>
                    <input ref={(element) => {this._inputName = element;}} type="text" placeholder="Enter name" name="name"/>

                    <label htmlFor="event">Wydarzenie</label>
                    <select name="event" id="event">
                        <option value="--">--</option>
                        <option value="one">Front End - RejactJS</option>
                        <option value="two">Back End - Node.js</option>
                        <option value="three">Full Stack - MERN</option>
                        <option value="four">Tester Manualny</option>
                    </select>

                    <label htmlFor="city">Miasto</label>
                    <select name="city" id="city">
                        <option value="--">--</option>
                        <option value="one">Online</option>
                        <option value="two">Warszawa</option>
                        <option value="three">Kraków</option>
                    </select>

                    <button type="submit">Zapisz na szkolenie</button>
                </form>
                {/* <UsersList usersList={this.state.users} removeUserMethod={this.removeUser}/> */}
            </div>
        );
    }
}

export default Register;