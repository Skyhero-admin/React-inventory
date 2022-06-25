import './App.css';
import Homepage from "./components/Homepage";
import Dashboard from './components/Dashboard';
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element= {<Homepage />} />
          <Route path = "/login" element = {<Login />} />
          <Route path = "/dashboard" element = {<Dashboard />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
