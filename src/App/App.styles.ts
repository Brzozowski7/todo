import styled from "styled-components";
import { pallete } from "../misc/pallete";

export const Wrapper = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) =>
    props.isDarkMode ? pallete.DarkGray : pallete.AlmostWhite};
  overflow-x: hidden;
`;
