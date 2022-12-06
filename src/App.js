import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Context } from "./Context";
import List from "./pages/List";
import Add from "./pages/Add";
import Edit from "./pages/Edit";

function App() {
  const [context, setContext] = useState("");

  return (
    <Context.Provider value={[context, setContext]}>
      <div className="App">
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
    </Context.Provider>
  );
}

export default App;
