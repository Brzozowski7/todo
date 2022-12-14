import { useState, useContext, Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import {
  Wrapper,
  DarkModeIconAndLanguageContainer,
  Logo,
  LogoContainer,
  LanguagesContainer,
} from "./Navbar.styles";
import { DarkModeContext } from "../../contexts/DarkModeContext/DarkModeContext";
import Searchbar from "./components/Searchbar";
import { languages } from "../../misc/languagesList";

interface NavbarProps {
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
  setLanguage: Dispatch<SetStateAction<string>>;
  language: string;
}

export default function Navbar({
  setSearch,
  search,
  setLanguage,
  language,
}: NavbarProps) {
  const { isDarkMode, toggleIsDarkMode } = useContext(DarkModeContext);
  const [activeLanguageMenu, setActiveLanguageMenu] = useState(false);
  const [activeFlag, setActiveFlag] = useState({
    src: languages.find((element) => element.alt === language)?.src,
    alt: language,
  });

  const handleClick = (alt: string, src: string) => {
    setActiveLanguageMenu(false);
    setActiveFlag({ src: src, alt: alt });
    setLanguage(alt);
  };

  return (
    <Wrapper isDarkMode={isDarkMode}>
      <LogoContainer>
        <Logo to={"/"} isDarkMode={isDarkMode}>
          Todoly
        </Logo>
      </LogoContainer>
      <Searchbar setSearch={setSearch} search={search} />
      <DarkModeIconAndLanguageContainer isDarkMode={isDarkMode}>
        <FontAwesomeIcon
          onClick={toggleIsDarkMode}
          icon={isDarkMode ? faSun : faMoon}
          title={isDarkMode ? "sun-icon" : "moon-icon"}
          size="xl"
          data-testid="mode-icon"
        />
        <LanguagesContainer>
          {activeLanguageMenu ? (
            languages.map((item) => {
              return (
                <img
                  onClick={() => handleClick(item.alt, item.src)}
                  key={item.alt}
                  src={item.src}
                  alt={item.alt}
                  data-testid="language-choice-img"
                />
              );
            })
          ) : (
            <img
              data-testid="language-img"
              src={activeFlag.src}
              alt={activeFlag.alt}
              onClick={() => setActiveLanguageMenu(true)}
            />
          )}
        </LanguagesContainer>
      </DarkModeIconAndLanguageContainer>
    </Wrapper>
  );
}
