import { useContext, Dispatch, SetStateAction } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Wrapper, DarkModeIconContainer, Logo } from "./Navbar.styles";
import { DarkModeContext } from "../../contexts/DarkModeContext";
import Searchbar from "../Searchbar/Searchbar";

interface NavbarProps {
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
}

export default function Navbar({ setSearch, search }: NavbarProps) {
  const { isDarkMode, toggleIsDarkMode } = useContext(DarkModeContext);

  return (
    <Wrapper isDarkMode={isDarkMode}>
      <Logo to={"/"} isDarkMode={isDarkMode}>
        Todoly
      </Logo>
      <Searchbar setSearch={setSearch} search={search} />
      <DarkModeIconContainer onClick={toggleIsDarkMode} isDarkMode={isDarkMode}>
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} size="xl" />
      </DarkModeIconContainer>
    </Wrapper>
  );
}
