import {ChangeEvent, useState} from 'react';

/* Importaciones propias */
import '../styles/styles.css';

export const RegisterPage = () => {
    const [registerData, setRegisterData] = useState({
        name: 'arian',
        email: 'arian@gmail.com',
        password1: '123123',
        password2: '123123'
    });

    const {name, email, password1, password2} = registerData;

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    }

    return (
        <div>
            <h1>Register Page</h1>

            <form>
                <input type="text"
                       placeholder="Name"
                       value={name}
                       onChange={handleOnChange}/>

                <input type="email"
                       placeholder="Email"
                       value={email}
                       onChange={handleOnChange}/>

                <input type="password"
                       placeholder="Password"
                       value={password1}
                       onChange={handleOnChange}/>

                <input type="password"
                       placeholder="Repeat Password"
                       value={password2}
                       onChange={handleOnChange}/>

                <button type="submit">Create</button>
            </form>
        </div>
    )
}