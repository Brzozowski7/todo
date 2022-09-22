import { Link } from "react-router-dom";
import styled from "styled-components";
import { pallete } from "../../misc/pallete";

export const Wrapper = styled.header<{ isDarkMode: boolean }>`
  width: 100%;
  height: 100px;
  padding: 0;
  background-color: ${(props) =>
    props.isDarkMode ? pallete.Black : pallete.White};
  color: ${(props) => (props.isDarkMode ? pallete.White : pallete.Black)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${(props) =>
    props.isDarkMode
      ? `1px solid ${pallete.TransparentWhite}`
      : `1px solid ${pallete.TransparentBlack}`};
  padding: 0 2rem;
  @media screen and (max-width: 900px) {
    h1 {
      font-size: 1rem;
    }
  }
`;

export const DarkModeIconContainer = styled.div<{ isDarkMode: boolean }>`
  width: 33%;
  display: flex;
  justify-content: flex-end;
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  svg {
    padding: 0.5rem;
    border-radius: 0.5rem;
    &:hover {
      cursor: pointer;
      background-color: ${(props) =>
        props.isDarkMode ? pallete.TransparentWhite : pallete.TransparentBlack};
    }
  }
`;

export const Logo = styled(Link)<{ isDarkMode: boolean }>`
  text-decoration: none;
  width: 33%;
  color: ${(props) => (props.isDarkMode ? pallete.White : pallete.Black)};
  font-size: 2rem;
  font-weight: 700;
  @media screen and (max-width: 900px) {
      font-size: 1rem;
  }
`;
