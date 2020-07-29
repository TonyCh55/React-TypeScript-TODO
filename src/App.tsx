import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { TodosPage } from "./pages/todosPage";
import { AboutPage } from "./pages/aboutPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={TodosPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
