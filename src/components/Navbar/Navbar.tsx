import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Wrapper, DarkModeIconContainer, Logo } from "./Navbar.styles";
import { DarkModeContext } from "../../contexts/DarkModeContext";
import Searchbar from "../Searchbar/Searchbar";
export default function Navbar() {
  const { isDarkMode, toggleIsDarkMode } = useContext(DarkModeContext);
  return (
    <Wrapper isDarkMode={isDarkMode}>
      <Logo>Todoly</Logo>
      <Searchbar />
      <DarkModeIconContainer onClick={toggleIsDarkMode} isDarkMode={isDarkMode}>
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} size="xl" />
      </DarkModeIconContainer>
    </Wrapper>
  );
}
