import logo from "./logo.svg";
import "./App.css";
import Header from "components/Header/Header";
import HomePage from "containers/home-module/HomePage";
import Footer from "components/Footer/Footer";
import MovieDetail from "containers/home-module/MovieDetail/MovieDetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SeatPlan from "containers/home-module/SeatPlan/SeatPlan";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movie-detail/:movieId" component={MovieDetail} />
          <Route path="/seat-plan/:showTimeId" component={SeatPlan} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
