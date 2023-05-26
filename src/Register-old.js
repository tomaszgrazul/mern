import React, {Component} from "react";
import './Register.css';

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            register: [],
            errorName: ''
        };
    }

    addUser = (event) => {
        event.preventDefault();
        
        if (this.inputName.value === '') {    
            this.state.errorName = "Wpisz imię i nazwisko !!!";
        } else this.state.errorName = "";
        // const validate = () => {
        //     let a = true;
        //     if (this.inputName.value === '') {    
        //         this.state.errorName = "Wpisz imię i nazwisko !!!";
        //         a = false
        //     } else this.state.errorName = "";
        //     return a ;
        // }

        // if(!validate()) {
        //     return;
        // }

        let newUser = {
            _id: Date.now(),
            name: this.inputName.value,
            event: this.selectEvent.value,
            city: this.selectCity.value
        }

        console.log(newUser);

        this.setState((state) => {
            return({
                register: state.register.concat(newUser)
            });
        })
        
        console.log(this.state.register);

        this.inputName.value = '';
        this.selectEvent.value = '--';
        this.selectCity.value = '--';


            // if (newUser.event === '--') {
            //     let errorEvent = false;
            // }

            // if (newUser.city === '--') {
            //     let errorCity = false;
            // }


    }



    render() {
        return (

            <div className="register-main">
                <header>
                    <h1>Zapisy na szkolenie</h1>
                </header>
                <form onSubmit={this.addUser}>
                    <div className="input-name">
                        <label htmlFor="name">Imię i Nazwisko</label>
                        <input ref={(element) => {this.inputName = element;}} type="text" placeholder="Imię i nazwisko" name="name" id="input-name"/>
                        {/* {!this.state.errorName && <p>Wpisz imię i nazwisko</p>} */}
                        {this.state.errorName && <p>{this.state.errorName}</p>}
                    </div>

                    <div className="input-event">
                        <label htmlFor="event">Wydarzenie</label>
                        <select name="event" id="input-event" ref={(element) => {this.selectEvent = element;}}>
                            <option value="--">--</option>
                            <option value="Front End - RejactJS">Front End - RejactJS</option>
                            <option value="Back End - Node.js">Back End - Node.js</option>
                            <option value="Full Stack - MERN">Full Stack - MERN</option>
                            <option value="Tester Manualny">Tester Manualny</option>
                        </select>
                    </div>

                    <div className="input-city">
                        <label htmlFor="city">Miasto</label>
                        <select name="city" id="input-city" ref={(element) => {this.selectCity = element;}}>
                            <option value="--">--</option>
                            <option value="Online">Online</option>
                            <option value="Warszawa">Warszawa</option>
                            <option value="Kraków">Kraków</option>
                        </select>
                    </div>

                    <button type="submit">Zapisz na szkolenie</button>
                </form>
                {/* <UsersList usersList={this.state.users} removeUserMethod={this.removeUser}/> */}
            </div>
        );
    }
}

export default Register;