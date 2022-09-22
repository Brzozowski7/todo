import { useContext, useState, Dispatch, SetStateAction } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { SearchbarContainer, SearchbarInput } from "./Searchbar.styles";
import { DarkModeContext } from "../../contexts/DarkModeContext";

interface SearchbarProps {
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
}
export default function Searchbar({ setSearch, search }: SearchbarProps) {
  const { isDarkMode } = useContext(DarkModeContext);
  const [active, setActive] = useState(false);
  const subpage = useLocation().pathname.split("/")[1];

  return (
    <SearchbarContainer isDarkMode={isDarkMode} active={active}>
      <FontAwesomeIcon
        icon={faSearch}
        onClick={() => setActive((prev) => !prev)}
      />
      <SearchbarInput
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        isDarkMode={isDarkMode}
        active={active}
        placeholder={
          subpage === "user" ? "Search by task..." : "Search by task or name..."
        }
        disabled={subpage === "todo" ? true : false}
      />
    </SearchbarContainer>
  );
}
