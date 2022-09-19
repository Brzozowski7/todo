import styled from "styled-components";
import { pallete } from "../../misc/pallete";

export const Wrapper = styled.div<{ isDarkMode: boolean }>`
  position: absolute;
  top: -1px;
  width: 30%;
  height: 100%;
  padding: 3rem 4rem;
  background-color: ${(props) =>
    props.isDarkMode ? pallete.Black : pallete.VeryLightGray};
  color: ${(props) => (props.isDarkMode ? pallete.White : pallete.Black)};
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
