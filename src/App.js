import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Courses } from "./pages/Courses";
import { useDispatch } from "react-redux";
import { fetchData, error } from "./app/actions";
import { Converter } from "./pages/Converter";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://www.cbr-xml-daily.ru/daily_json.js")
      .then((res) => res.json())
      .then((data) => dispatch(fetchData(data)))
      .catch((err) => dispatch(error()));
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/converter">
            <Converter />
          </Route>
          <Route path="/current-courses">
            <Courses />
          </Route>
          <Route path="/">
            <Redirect to="/current-courses" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
