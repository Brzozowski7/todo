import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Wrapper, DarkModeIconContainer } from "./Navbar.styles";
import { DarkModeContext } from "../../contexts/DarkModeContext";
import Searchbar from "../Searchbar/Searchbar";
export default function Navbar() {
  const { isDarkMode, toggleIsDarkMode } = useContext(DarkModeContext);
  return (
    <Wrapper isDarkMode={isDarkMode}>
      <h1>Todoly</h1>
      <Searchbar />
      <DarkModeIconContainer onClick={toggleIsDarkMode} isDarkMode={isDarkMode}>
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} size="xl" />
      </DarkModeIconContainer>
    </Wrapper>
  );
}
