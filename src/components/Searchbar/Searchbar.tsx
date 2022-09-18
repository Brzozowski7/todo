import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { SearchbarContainer, SearchbarInput } from "./Searchbar.styles";
import { DarkModeContext } from "../../contexts/DarkModeContext";

export default function Searchbar() {
  const { isDarkMode } = useContext(DarkModeContext);
  const [active, setActive] = useState(false);

  return (
    <SearchbarContainer isDarkMode={isDarkMode} active={active}>
      <FontAwesomeIcon
        icon={faSearch}
        onClick={() => setActive((prev) => !prev)}
      />
      <SearchbarInput type="text" isDarkMode={isDarkMode} active={active} />
    </SearchbarContainer>
  );
}
