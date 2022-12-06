import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "./Context";
import ListPage from "./pages/ListPage";
import AddPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";

function App() {
  const [context, setContext] = useState("");

  return (
    <Context.Provider value={[context, setContext]}>
      <div className="App">
        <Router>
          <div>
            <Routes>
              <Route path="/list" element={<ListPage />} />
              <Route path="/add" element={<AddPage />} />
              <Route path="/edit/:carId" element={<EditPage />} />
            </Routes>
          </div>
        </Router>
      </div>
    </Context.Provider>
  );
}

export default App;
