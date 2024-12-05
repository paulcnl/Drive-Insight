import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/FilAriane";

export default function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
