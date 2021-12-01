import {Suspense} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink, Redirect
} from 'react-router-dom';

/* Importaciones propias */
import logo from '../logo.svg';
import {routes} from './routes';

export const Navigations = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <Router>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React Logo"/>
                        <ul>

                            {
                                routes.map(({path, name}) => (
                                    <li key={path}>
                                        <NavLink to={path}
                                                 activeClassName="nav-active">
                                            {name}
                                        </NavLink>
                                    </li>
                                ))
                            }

                        </ul>
                    </nav>

                    <Switch>

                        {
                            routes.map(({path, Component}) => (
                                <Route key={path}
                                       path={path}
                                       render={() => <Component/>}/>
                            ))
                        }

                        <Redirect to={routes[0].path}/>
                    </Switch>
                </div>
            </Router>
        </Suspense>
    );
}