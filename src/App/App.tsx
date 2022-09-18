import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Wrapper } from "./App.styles";
import { DarkModeContextProvider } from "../contexts/DarkModeContext";
import MainPage from "../pages/MainPage";

function App() {
  return (
    <DarkModeContextProvider>
      <Router>
        <Wrapper>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
          </Routes>
        </Wrapper>
      </Router>
    </DarkModeContextProvider>
  );
}

export default App;
