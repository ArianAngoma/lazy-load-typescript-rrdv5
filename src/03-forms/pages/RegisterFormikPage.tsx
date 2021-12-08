import {Formik, Form} from 'formik';
import * as Yup from 'yup';

/* Importaciones propias */
import {MyTextInput} from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {
    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string().min(2, 'Debe de tener al menos 2 caracteres').max(15, 'Debe de tener 15 caracteres o menos').required('Requerido'),
                        email: Yup.string().email('El correo no tiene un formato válido').required('Requerido'),
                        password1: Yup.string().min(6, 'Mínimo 6 caracteres').required('Requerido'),
                        password2: Yup.string().oneOf([Yup.ref('password1')], 'Las contraseñas deben de ser iguales').required('Requerido')
                    })}
            >

                {
                    ({handleReset}) => (
                        <Form>
                            <MyTextInput
                                label="Name"
                                name="name"
                                type="text"
                                placeholder="Arian Angoma"/>

                            <MyTextInput
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="arian.angoma.js@gmail.com"/>

                            <MyTextInput
                                label="Password"
                                name="password1"
                                type="password"
                                placeholder="******"/>

                            <MyTextInput
                                label="Repeat Password"
                                name="password2"
                                type="password"
                                placeholder="******"/>

                            <button type="submit">Submit</button>

                             <button type="button" onClick={handleReset}>Reset Form</button>
                        </Form>
                    )
                }

            </Formik>
        </div>
    )
}