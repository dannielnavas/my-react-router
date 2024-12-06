import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Product } from "./components/Product";

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
      </Routes>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

export default App;
