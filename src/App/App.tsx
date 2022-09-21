import { useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Wrapper } from "./App.styles";
import MainPage from "../pages/MainPage";
import { DarkModeContext } from "../contexts/DarkModeContext";
import TodoPage from "../pages/TodoPage/TodoPage";

function App() {
  const [search, setSearch] = useState("");
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <Router>
      <Wrapper isDarkMode={isDarkMode}>
        <Navbar setSearch={setSearch} search={search} />
        <Routes>
          <Route path="/" element={<MainPage search={search} />}></Route>
          <Route path="/:todoID" element={<TodoPage />}></Route>
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
