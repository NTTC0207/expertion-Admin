import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import "./scss/main.scss";
import SignIn from "./pages/SignIn";
import Manage from "./pages/Manage";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import { persistor } from './store/homeReducer'
import { Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "./assets/styles/responsive.css";
import { history } from "./history";

const App = () => {
  return (
    <div className="App">
      <PersistGate persistor={persistor}>
        <Router history={history}>
        <Switch>
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/sign-in" exact component={SignIn} />
          <Main>
            <Route exact path="/" component={Home} />
            <Route exact path="/tables" component={Tables} />
            <Route exact path="/manage" component={Manage} />
            <Route exact path="/billing" component={Billing} />
            <Route exact path="/rtl" component={Rtl} />
            <Route exact path="/profile" component={Profile} />
            {/* <Redirect from="*" to="/dashboard" /> */}
          </Main>
        </Switch>
        </Router>
      </PersistGate>
    </div>
  );
}

export default App;
