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
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string().max(15, 'Debe de tener 15 caracteres o menos').required('Requerido'),
                        lastName: Yup.string().max(10, 'Debe de tener 10 caracteres o menos').required('Requerido'),
                        email: Yup.string().email('El correo no tiene un formato válido').required('Requerido'),
                        terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
                        jobType: Yup.string().notOneOf(['it-jr'], 'Esta opción no es permitida').required('Requerido')
                    })}
            >
                {
                    (formik) => (
                        <Form>
                            <label htmlFor="firstName">First Name</label>
                            <Field type="text" name="firstName" placeholder="First Name"/>
                            <ErrorMessage name="firstName" component="span"/>

                            <label htmlFor="lastName">Last Name</label>
                            <Field type="text" name="lastName"/>
                            <ErrorMessage name="lastName" component="span"/>

                            <label htmlFor="email">Email Address</label>
                            <Field type="email" name="email"/>
                            <ErrorMessage name="email" component="span"/>

                            <label htmlFor="jobType">Job Type</label>
                            <Field as="select" name="jobType">
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">It Senior</option>
                                <option value="it-jr">It Jr.</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span"/>

                            <label>
                                <Field type="checkbox" name="terms"/>
                                Terms and conditions
                            </label>
                            <ErrorMessage name="terms" component="span"/>

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
};
