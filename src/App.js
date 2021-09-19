import { BrowserRouter as Router, Route } from "react-router-dom";
import Necttos from "./components/Necttos";
import React, { useState } from "react";


function App() {
  return (
    <Router>
      <Route exact path="/" component={Necttos} />
    </Router>
  );
}

export default App; 
