import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom';

/* Importaciones propias */
import logo from '../logo.svg';
import {LazyPage1, LazyPage2, LazyPage3} from '../01-LazyLoad/pages';

export const Navigations = () => {
    return (
        <Router>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo"/>

                    <ul>
                        <li>
                            <NavLink to="/lazy1" activeClassName="nav-active" exact>Lazy1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy2" activeClassName="nav-active" exact>Lazy2</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy3" activeClassName="nav-active" exact>Lazy3</NavLink>
                        </li>
                    </ul>
                </nav>

                <Switch>

                    <Route path="/lazy1">
                        <LazyPage1/>
                    </Route>
                    <Route path="/lazy2">
                        <LazyPage2/>
                    </Route>
                    <Route path="/lazy3">
                        <LazyPage3/>
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}