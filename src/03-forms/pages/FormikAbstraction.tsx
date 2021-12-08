import {Formik, Form} from 'formik';
import * as Yup from 'yup';

/* Importaciones propias */
import {MyTextInput} from '../components/MyTextInput';
import {MySelect} from '../components/MySelect';
import {MyCheckbox} from '../components/MyCheckbox';

import '../styles/styles.css';

export const FormikAbstraction = () => {
    return (
        <div>
            <h1>Formik Abstraction</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    jobType: '',
                    terms: false
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string().max(15, 'Debe de tener 15 caracteres o menos').required('Requerido'),
                        lastName: Yup.string().max(10, 'Debe de tener 10 caracteres o menos').required('Requerido'),
                        email: Yup.string().email('El correo no tiene un formato válido').required('Requerido'),
                        jobType: Yup.string().notOneOf(['it-jr'], 'Esta opción no es permitida').required('Requerido'),
                        terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones')
                    })}
            >
                {
                    (formik) => (
                        <Form>
                            <MyTextInput
                                label="First Name"
                                name="firstName"
                                type="text"/>

                            <MyTextInput
                                label="Last Name"
                                name="lastName"
                                type="text"/>

                            <MyTextInput
                                label="Email"
                                name="email"
                                type="email"/>

                            <MySelect label="Job Type" name="jobType">
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">It Senior</option>
                                <option value="it-jr">It Jr.</option>
                            </MySelect>

                            <MyCheckbox label="Terms and Conditions" name="terms"/>

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
};

