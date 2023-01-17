import React from 'react';
import Home from "./modules/home/Home";

import {
  BrowserRouter as Router, Navigate,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />}/>
          <Route path="/" element={<Navigate to="/Home" />}/>
        </Routes>
      </Router>
  );
}

export default App;
