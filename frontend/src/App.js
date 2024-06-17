// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import WebRoutes from "./components/webroutes.component";

function App() {
  return (
    <>
      <Router>
        <WebRoutes/>
      </Router>
    </>
  );
}

export default App;
