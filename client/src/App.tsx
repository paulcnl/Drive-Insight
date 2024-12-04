import Header from "./components/Header";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <header>
        <Header />
      </header>
      <Outlet />
    </div>
  );
}

export default App;
