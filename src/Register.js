import { useState } from "react";
import './Register.css';
import axios from "axios";

const Register = (props) => {

    const [formData, setFormData] = useState({
        username: '',
        userevent: '',
        usercity: ''
    });

    const [errors, setErrors] = useState({
        username: '',
        userevent: '',
        usercity: ''
    });

    const [register, setRegister] = useState([]);

    const handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;

        setFormData ({
            ...formData,
            [name]: target.value,
        });
    };


    const addUser = (event) => {
        event.preventDefault();
        

        if (formData.username === '') {    
            setErrors(() => {
                return {
                    username: "Wpisz imię i nazwisko !!!"
                };
            });
            return;
        } else setErrors('');

        if (formData.userevent === '') {    
            setErrors(() => {
                return {
                    userevent: "Wpisz wydarzenie !!!"
                };
            });
            return;
        } else setErrors('');

        if (formData.usercity === '') {    
            setErrors(() => {
                return {
                    usercity: "Wpisz miasto !!!"
                };
            });
            return;
        } else setErrors('');


        let newUser = {
            _id: Date.now(),
            name: formData.username,
            event: formData.userevent,
            city: formData.usercity
        }

        console.log(newUser);
 
        setRegister(register.concat(newUser));

        console.log(register);

        setFormData({
            username: '',
            userevent: '',
            usercity: ''
        });


        axios
        .post("http://localhost:3000", {
        username: formData.username,
        email: formData.email,
        password: formData.password
        })
        .then((res) => {
            console.log(res.data);
          
         })
        .catch((error) => {
            console.error(error);
        });

    };



         return (

            <div className="register-main">
                <header>
                    <h1>Zapisy na szkolenie</h1>
                </header>
                <form onSubmit={addUser}>
                    <div className="input-name">
                        <label htmlFor="username">Imię i Nazwisko</label>
                        <input onChange={handleInputChange} value={formData.username} type="text" placeholder="Imię i nazwisko" name="username" id="input-name"/>
                        {errors.username && <p className="error">{errors.username}</p>}
                    </div>

                    <div className="input-event">
                        <label htmlFor="userevent">Wydarzenie</label>
                        <select name="userevent" id="input-event" onChange={handleInputChange} value={formData.userevent}>
                            <option value="">--</option>
                            <option value="Front End - RejactJS">Front End - RejactJS</option>
                            <option value="Back End - Node.js">Back End - Node.js</option>
                            <option value="Full Stack - MERN">Full Stack - MERN</option>
                            <option value="Tester Manualny">Tester Manualny</option>
                        </select>
                        {errors.userevent && <p className="error">{errors.userevent}</p>}
                    </div>

                    <div className="input-city">
                        <label htmlFor="usercity">Miasto</label>
                        <select name="usercity" id="input-city" onChange={handleInputChange} value={formData.usercity}>
                            <option value="">--</option>
                            <option value="Online">Online</option>
                            <option value="Warszawa">Warszawa</option>
                            <option value="Kraków">Kraków</option>
                        </select>
                        {errors.usercity && <p className="error">{errors.usercity}</p>}
                    </div>

                    <button type="submit">Zapisz na szkolenie</button>
                </form>
            </div>
        );
    
}


export default Register;