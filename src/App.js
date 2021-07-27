import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TheLayout from "./TheLayout";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route>
            <TheLayout />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
