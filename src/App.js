/** @format */

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ButtonChild } from "./components/ButtonChild";
import { DropdownParent } from "./components/DropdownParent";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/button" element={<ButtonChild />} />
        <Route path="/dropdown" element={<DropdownParent />} />
      </Routes>
    </div>
  );
}

export default App;
