import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

/* Importaciones propias */
import '../styles/styles.css';

export const FormikComponents = () => {
    return (
        <div>
            <h1>Formik Components</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: ''
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string().max(15, 'Debe de tener 15 caracteres o menos').required('Requerido'),
                        lastName: Yup.string().max(10, 'Debe de tener 10 caracteres o menos').required('Requerido'),
                        email: Yup.string().email('El correo no tiene un formato válido').required('Requerido')
                    })}
            >
                {
                    (formik) => (
                        <Form>
                            <label htmlFor="firstName">First Name</label>
                            <Field type="text" name="firstName"/>
                            <ErrorMessage name="firstName" component="span"/>

                            <label htmlFor="lastName">Last Name</label>
                            <Field type="text" name="lastName"/>
                            <ErrorMessage name="lastName" component="span"/>

                            <label htmlFor="email">Email Address</label>
                            <Field type="email" name="email"/>
                            <ErrorMessage name="email" component="span"/>

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
};

