import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ErrorPage from "../Views/ErrorPage";
import Home from "../Views/Home";

function RoutingHandler() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default RoutingHandler;
