import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
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
  );
}

function List() {
  return <h2>List</h2>;
}

function Edit() {
  return <h2>Edit</h2>;
}

function Add() {
  return <h2>Add</h2>;
}

export default App;
