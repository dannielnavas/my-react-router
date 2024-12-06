import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Home } from "./components/Home";
import { Overview } from "./components/Overview";
import { Product } from "./components/Product";
import { Settings } from "./components/Settings";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          {/* <li>
            <Link to="/product/1">Product 1</Link>
          </li>
          <li>
            <Link to="/product/2">Product 2</Link>
          </li> */}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="overview" element={<Overview />} />

          <Route
            path="settings"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Settings />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

export default App;
