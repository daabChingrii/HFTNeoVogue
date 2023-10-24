import Navbar from "./Navbar";
import Home from "./Home";
import Explore from "./Explore";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Product from "./Product";
function App() {
  return (
    <Router>
      <Navbar/>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/product">
            <Product/>
          </Route>
        </Switch>
      </div></Router>

  );
}

export default App;
