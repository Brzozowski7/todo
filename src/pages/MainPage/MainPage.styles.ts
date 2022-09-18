import styled from "styled-components";
import { pallete } from "../../misc/pallete";

export const MainPageWrapper = styled.main<{ isDarkMode: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 1rem 2rem;
  background-color: ${(props) =>
    props.isDarkMode ? pallete.DarkGray : pallete.AlmostWhite};
  @media screen and (max-width: 900px) {
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1rem 2rem;
    gap: 1rem;
  }
`;
