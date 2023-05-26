import { useState } from "react";
import './Register.css';

const Register = (props) => {

    const [formData, setFormData] = useState({
        username: '',
        userevent: '',
        usercity: ''
    });


    const handleInputChange = (e) => {
        // console.log(e.target.value)
        const target = e.target;
        const name = target.name;

        setFormData ({
            ...formData,
            [name]: target.value,
        });
    };


    const addUser = (event) => {
        event.preventDefault();
        
    

        // if (this.inputName.value === '') {    
        //     this.state.errorName = "Wpisz imię i nazwisko !!!";
        // } else this.state.errorName = "";


           let newUser = {
            _id: Date.now(),
            name: formData.username,
            event: formData.userevent,
            city: formData.usercity
        }

        console.log(newUser);

        // this.setState((state) => {
        //     return({
        //         register: state.register.concat(newUser)
        //     });
        // })
        
        // console.log(this.state.register);
        setFormData({
            username: '',
            userevent: '--',
            usercity: '--'
        });
        


            // if (newUser.event === '--') {
            //     let errorEvent = false;
            // }

            // if (newUser.city === '--') {
            //     let errorCity = false;
            // }


    }


         return (

            <div className="register-main">
                <header>
                    <h1>Zapisy na szkolenie</h1>
                </header>
                <form onSubmit={addUser}>
                    <div className="input-name">
                        <label htmlFor="username">Imię i Nazwisko</label>
                        <input onChange={handleInputChange} value={formData.username} type="text" placeholder="Imię i nazwisko" name="username" id="input-name"/>
                        {/* {this.state.errorName && <p>{this.state.errorName}</p>} */}
                    </div>

                    <div className="input-event">
                        <label htmlFor="userevent">Wydarzenie</label>
                        <select name="userevent" id="input-event" onChange={handleInputChange} value={formData.userevent}>
                            <option value="--">--</option>
                            <option value="Front End - RejactJS">Front End - RejactJS</option>
                            <option value="Back End - Node.js">Back End - Node.js</option>
                            <option value="Full Stack - MERN">Full Stack - MERN</option>
                            <option value="Tester Manualny">Tester Manualny</option>
                        </select>
                    </div>

                    <div className="input-city">
                        <label htmlFor="usercity">Miasto</label>
                        <select name="usercity" id="input-city" onChange={handleInputChange} value={formData.usercity}>
                            <option value="--">--</option>
                            <option value="Online">Online</option>
                            <option value="Warszawa">Warszawa</option>
                            <option value="Kraków">Kraków</option>
                        </select>
                    </div>

                    <button type="submit">Zapisz na szkolenie</button>
                </form>
            </div>
        );
    
}


export default Register;