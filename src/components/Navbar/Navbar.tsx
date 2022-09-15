import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import {
  Wrapper,
  AuthOptions,
  MenuIconContainer,
  DarkModeIconContainer,
} from "./Navbar.styles";
import { DarkModeContext } from "../../contexts/DarkModeContext";

export default function Navbar() {
  const { isDarkMode, toggleIsDarkMode } = useContext(DarkModeContext);
  return (
    <Wrapper isDarkMode={isDarkMode}>
      <h1>Todoly</h1>
      <AuthOptions>
        <div>Login</div>
        <div>Register</div>
        <DarkModeIconContainer isDarkMode={isDarkMode}>
          <FontAwesomeIcon
            onClick={toggleIsDarkMode}
            icon={isDarkMode ? faSun : faMoon}
          />
        </DarkModeIconContainer>
      </AuthOptions>
      <MenuIconContainer>
        <FontAwesomeIcon icon={faBars} size="2xl" />
      </MenuIconContainer>
    </Wrapper>
  );
}
