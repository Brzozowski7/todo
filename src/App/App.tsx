import {useContext} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Wrapper } from "./App.styles";
import MainPage from "../pages/MainPage";
import {DarkModeContext} from "../contexts/DarkModeContext"

function App() {
  const {isDarkMode} = useContext(DarkModeContext)
  return (
      <Router>
        <Wrapper isDarkMode={isDarkMode}>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
          </Routes>
        </Wrapper>
      </Router>
  );
}

export default App;
