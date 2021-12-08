import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom';

/* Importaciones propias */
import {
    FormikAbstraction,
    FormikComponents,
    FormikYupPage,
    FormikBasicPage,
    RegisterPage,
    RegisterFormikPage
} from '../03-forms/pages';

import logo from '../logo.svg';

export const Navigations = () => {
    return (
        <Router>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo"/>
                    <ul>
                        <li>
                            <NavLink to="/register" activeClassName="nav-active" exact>Register Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-basic" activeClassName="nav-active" exact>Formik Basic Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-yup" activeClassName="nav-active" exact>Formik Yup Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-components" activeClassName="nav-active" exact>Formik
                                Components</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-register" activeClassName="nav-active" exact>Register
                                Formik</NavLink>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/register">
                        <RegisterPage/>
                    </Route>
                    <Route path="/formik-basic">
                        <FormikBasicPage/>
                    </Route>
                    <Route path="/formik-yup">
                        <FormikYupPage/>
                    </Route>
                    <Route path="/formik-components">
                        <FormikComponents/>
                    </Route>
                    <Route path="/formik-abstractions">
                        <FormikAbstraction/>
                    </Route>
                    <Route path="/formik-register">
                        <RegisterFormikPage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}