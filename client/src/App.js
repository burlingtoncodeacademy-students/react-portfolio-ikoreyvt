import React from "react";
import "./App.css";
import "bulma/css/bulma.css";
import "./styles/Home.css";
import Home from "./components/Home";
import About from "./components/About";
import Hobbies from "./components/Hobbies";
import Portfolio from "./components/Portfolio";
import WorkHistory from "./components/WorkHistory";
import Contact from "./components/Contact";
import { useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <BrowserRouter>
      {modalOpen ? <Contact setModalOpen={setModalOpen} /> : null}
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Home setModalOpen={setModalOpen} />}
        />
        <Route path="/about" component={About} />
        <Route path="/hobbies" component={Hobbies} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/workhistory" component={WorkHistory} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
