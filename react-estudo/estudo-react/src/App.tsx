import { Outlet } from "react-router-dom";
import Rodape from "./components/Rodape";
import Menu from "./components/Menu";
import './App.css'

export default function App() {
  return (
    <>
      <Menu/>
      <Outlet/>
      <Rodape/>
    </>
  )
}
