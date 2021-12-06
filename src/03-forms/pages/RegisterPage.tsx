import {ChangeEvent, FormEvent, useState} from 'react';

/* Importaciones propias */
import '../styles/styles.css';

export const RegisterPage = () => {
    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });

    const {name, email, password1, password2} = registerData;

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setRegisterData(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    }

    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(registerData);
    }

    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate
                  onSubmit={handleOnSubmit}>
                <input type="text"
                       placeholder="Name"
                       value={name}
                       name="name"
                       onChange={handleOnChange}/>

                <input type="email"
                       placeholder="Email"
                       value={email}
                       name="email"
                       onChange={handleOnChange}/>

                <input type="password"
                       placeholder="Password"
                       value={password1}
                       name="password1"
                       onChange={handleOnChange}/>

                <input type="password"
                       placeholder="Repeat Password"
                       value={password2}
                       name="password2"
                       onChange={handleOnChange}/>

                <button type="submit">Create</button>
            </form>
        </div>
    )
}