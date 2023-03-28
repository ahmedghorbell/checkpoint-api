import { Route, Routes } from "react-router-dom";
import "./App.css";
import Details from "./Pages/Details";
import Navigation from "./Components/Navigation";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import User from "./Pages/User";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<User />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
