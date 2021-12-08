import {FormEvent} from 'react';

/* Importaciones propias */
import {useForm} from '../hooks/useForm';

import '../styles/styles.css';

export const RegisterFormikPage = () => {
    const {formData, handleOnChange, resetForm, isValidEmail, name, email, password1, password2} = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });

    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <div>
            <h1>Register Formik Page</h1>

            <form noValidate
                  onSubmit={handleOnSubmit}>
                <input type="text"
                       placeholder="Name"
                       value={name}
                       name="name"
                       onChange={handleOnChange}
                       className={`${(name.trim().length <= 0) && 'has-error'}`}/>
                {
                    (name.trim().length <= 0) && (
                        <span>Este campo es necesario</span>
                    )
                }

                <input type="email"
                       placeholder="Email"
                       value={email}
                       name="email"
                       onChange={handleOnChange}
                       className={`${(!isValidEmail(email)) && 'has-error'}`}/>
                {
                    (!isValidEmail(email)) && (
                        <span>Email no es válido</span>
                    )
                }

                <input type="password"
                       placeholder="Password"
                       value={password1}
                       name="password1"
                       onChange={handleOnChange}/>
                {
                    (password1.trim().length <= 0) && (
                        <span>Este campo es necesario</span>
                    )
                }
                {
                    (password1.trim().length > 0 && password1.trim().length < 6) && (
                        <span>La contraseña tiene que tener 6 caracteres</span>
                    )
                }

                <input type="password"
                       placeholder="Repeat Password"
                       value={password2}
                       name="password2"
                       onChange={handleOnChange}/>
                {
                    (password2.trim().length <= 0) && (
                        <span>Este campo es necesario</span>
                    )
                }

                {
                    (password2.trim().length > 0 && password1 !== password2) && (
                        <span>Las contraseñas deben de ser iguales</span>
                    )
                }

                <button type="submit">Create</button>

                <button type="button" onClick={resetForm}>Reset Form</button>
            </form>
        </div>
    )
}