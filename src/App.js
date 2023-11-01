import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import WordCounter from "./components/WordCounter";
import Calculator from "./components/Calculator";
import ColorPicker from "./components/ColorPicker";
import DummyDataTable from "./components/DummyDataTable";
import AgeCalculator from "./components/AgeCalculator";

const App = () => {
  return (
    <Router>
      <div className="container mx-auto mt-8">
        <h1>Name : Shreyas Nimkar</h1>
        <h1>RollNo : 21BBS0085 </h1>
        <br />
        <h1 className="text-2xl font-bold mb-4">React Task Index</h1>
        <ul className="space-y-2">
          <li>
            <Link to="/word-counter">Word Counter</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/color-picker">Color Picker</Link>
          </li>
          <li>
            <Link to="/dummy-data-table">Dummy Data Table</Link>
          </li>
          <li>
            <Link to="/age-calculator">Age Calculator</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/word-counter" element={<WordCounter />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route
            path="/color-picker"
            element={
              <ColorPicker
                colors={["red", "green", "blue", "yellow", "purple"]}
              />
            }
          />
          <Route path="/dummy-data-table" element={<DummyDataTable />} />
          <Route path="/age-calculator" element={<AgeCalculator />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
