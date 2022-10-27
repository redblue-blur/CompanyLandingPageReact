import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
    {/* <Home/>
    <Login/> */}
    </>
  );
}

export default App;
