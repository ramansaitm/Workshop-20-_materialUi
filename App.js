import "./App.css";
import NavBar from "./NavBar/Navbar";
import Patients from "./component/Pages/Patients";
import Billing from "./component/Pages/Billing";
import User from "./component/Pages/User";
import Calendar from "./component/Pages/Calendar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
    <div className="body"> 
      <Router>
        <NavBar />
        <Switch>
          <Route path="/Patients" exact>
            {Patients}
          </Route>
          <Route path="/User" exact>
            {User}
          </Route>
          <Route path="/Billing" exact>
            {Billing}
          </Route>
          <Route path="/Calendar" exact>
            {Calendar}
          </Route>
        </Switch>
      </Router>
      </div>
    </>
  );
}

export default App;
