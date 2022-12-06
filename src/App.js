import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import List from "./pages/List";
import Add from "./pages/Add";
import Edit from "./pages/Edit";

import DateRangePicker from "./components/DateRangePicker/DateRangePicker";

function App() {
  const [startDate, setStartDate] = useState("2015");
  const [endDate, setEndDate] = useState("2022");
  useEffect(() => {}, []);

  return (
    <div className="App">
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/list">Home</Link>
              </li>
              <li>
                <Link to="/add">About</Link>
              </li>
              <li>
                <Link to="/edit">Users</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/list" element={<List />} />
            <Route path="/add" element={<Add />} />
            <Route path="/edit" element={<Edit />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
