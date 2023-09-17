import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Administrator from "./components/view/administrator/Administrator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<h1>Hello world</h1>}></Route>
        <Route exact path="/administrator" element={<Administrator />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
