import styled from "styled-components";
import { guessSearchBarColor } from "./Searchbar.utils";
import { pallete } from "../../../../misc/pallete";

interface SearchbarProps {
  isDarkMode: boolean;
  active: boolean;
}

export const SearchbarContainer = styled.div<SearchbarProps>`
  display: flex;
  width: 33%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  overflow: hidden;
  padding: 0.5rem;
  background-color: ${(props) =>
    props.isDarkMode ? pallete.DarkGray : pallete.VeryLightGray};
  @media screen and (max-width: 900px) {
    width: 60%;
    background-color: ${(props) =>
      guessSearchBarColor(props.isDarkMode, props.active)};
  }
`;

export const SearchbarInput = styled.input<SearchbarProps>`
  width: 100%;
  font-size: 1.1rem;
  padding: 0.5rem;
  border: none;
  background-color: ${(props) =>
    props.isDarkMode ? pallete.DarkGray : pallete.VeryLightGray};
  color: ${(props) => (props.isDarkMode ? pallete.White : pallete.Black)};
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 900px) {
    font-size: 0.55rem;
    display: ${(props) => (props.active ? "inline-block" : "none")};
  }
`;
