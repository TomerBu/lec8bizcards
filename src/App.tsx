import { useContext } from "react";
import "./App.css";
import DarkModeContext from "./context/dark-mode-context";

function App() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return <div className="App">
    <p>
      {darkMode ? "DARK" : "NOT DARK"}
    </p>

    <button onClick={()=>{
      toggleDarkMode()
    }}>TOGGLE DARK</button>
  </div>;
}

export default App;
