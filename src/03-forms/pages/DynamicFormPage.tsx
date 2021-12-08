import {Formik, Form} from 'formik';

/* Importaciones propias */
import formJson from '../data/custom-form.json';
import {MyTextInput} from '../components';

export const DynamicFormPage = () => {

    return (
        <div>
            <h1>Dynamic Form Page</h1>

            <Formik
                initialValues={{
                    name: ''
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {
                    (formik) => (
                        <Form>
                            {
                                formJson.map(({type, name, placeholder, label}) => {
                                    return (
                                        <MyTextInput
                                            key={name}
                                            type={(type as any)}
                                            name={name} label={label}
                                            placeholder={placeholder}
                                        />
                                    )
                                })
                            }

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
