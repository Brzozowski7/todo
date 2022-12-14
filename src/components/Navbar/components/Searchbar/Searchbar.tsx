import { useContext, useState, Dispatch, SetStateAction } from "react";
import { useLocation } from "react-router-dom";
import { injectIntl, IntlShape } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { SearchbarContainer, SearchbarInput } from "./Searchbar.styles";
import { DarkModeContext } from "../../../../contexts/DarkModeContext/DarkModeContext";

interface SearchbarProps {
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
  intl: IntlShape;
}
function Searchbar({ setSearch, search, intl }: SearchbarProps) {
  const { isDarkMode } = useContext(DarkModeContext);
  const [active, setActive] = useState(false);
  const subpage = useLocation().pathname.split("/")[1];
  return (
    <SearchbarContainer isDarkMode={isDarkMode} active={active}>
      <FontAwesomeIcon
        title="search icon"
        icon={faSearch}
        onClick={() => setActive((prev) => !prev)}
        data-testid="search-icon"
      />
      <SearchbarInput
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        isDarkMode={isDarkMode}
        active={active}
        data-testid="search-input"
        placeholder={
          subpage === "user"
            ? intl.formatMessage({
                id: "SearchbarTask",
                defaultMessage: "Search by task...",
              })
            : intl.formatMessage({
                id: "SearchbarTaskAndName",
                defaultMessage: "Search by task or name...",
              })
        }
        disabled={subpage === "todo" ? true : false}
      />
    </SearchbarContainer>
  );
}
export default injectIntl(Searchbar);
