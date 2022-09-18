import styled from "styled-components";
import { pallete } from "../../misc/pallete";

export const MainPageWrapper = styled.main<{ isDarkMode: boolean }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  gap: 1rem;
  background-color: ${(props) =>
    props.isDarkMode ? pallete.DarkGray : pallete.AlmostWhite};
`;
