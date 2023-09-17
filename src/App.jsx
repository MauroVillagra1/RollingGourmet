import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Administrator from "./components/view/administrator/Administrator";
import Home from "./components/view/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/administrator" element={<Administrator />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
