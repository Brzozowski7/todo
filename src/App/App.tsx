import { useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import Navbar from "../components/Navbar";
import { Wrapper } from "./App.styles";
import MainPage from "../pages/MainPage";
import {
  DarkModeContext,
  DarkModeContextProvider,
} from "../contexts/DarkModeContext";
import TodoPage from "../pages/TodoPage";
import UserTodos from "../pages/UserTodos";
import { messages } from "./App.const";

function App() {
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState<string>("en");
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <DarkModeContextProvider>
      <IntlProvider
        messages={messages[language as keyof typeof messages]}
        locale={language}
        defaultLocale="en"
      >
        <Router>
          <Wrapper isDarkMode={isDarkMode}>
            <Navbar
              setLanguage={setLanguage}
              language={language}
              setSearch={setSearch}
              search={search}
            />
            <Routes>
              <Route path="/" element={<MainPage search={search} />}></Route>
              <Route path="/todo/:todoID" element={<TodoPage />}></Route>
              <Route
                path="/user/:user"
                element={<UserTodos search={search} />}
              ></Route>
            </Routes>
          </Wrapper>
        </Router>
      </IntlProvider>
    </DarkModeContextProvider>
  );
}

export default App;
