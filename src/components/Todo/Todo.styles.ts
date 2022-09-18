import styled from "styled-components";
import { pallete } from "../../misc/pallete";

export const TodoWrapper = styled.div<{ isDarkMode: boolean }>`
  width: 20%;
  height: 100px;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.isDarkMode ? pallete.VeryDarkGray : pallete.VeryLightGray};
  color: ${(props) => (props.isDarkMode ? pallete.White : pallete.Black)};
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
