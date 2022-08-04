import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./containers/Login";
import Register from "./containers/Register";
import ProtectedComponents from "./components/ProtectedComponents";
import Home from "./containers/Home";
import Cuisine from "./containers/Cuisine";
import SearchResult from "./containers/SearchResult";
import Recipe from "./containers/Recipe";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="login"
            element={
              <ProtectedComponents loginOnly={false}>
                <Login />
              </ProtectedComponents>
            }
          />
          <Route
            path="register"
            element={
              <ProtectedComponents loginOnly={false}>
                <Register />
              </ProtectedComponents>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:search" element={<SearchResult />} />
          <Route
            path="/recipe/:name"
            element={
              <ProtectedComponents>
                <Recipe />
              </ProtectedComponents>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
