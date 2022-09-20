import styled from "styled-components";
import { pallete } from "../../misc/pallete";

export const Wrapper = styled.div<{ isDarkMode: boolean }>`
  position: fixed;
  width: 30%;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 3rem 4rem;
  background-color: ${(props) =>
    props.isDarkMode ? pallete.Black : pallete.VeryLightGray};
  color: ${(props) => (props.isDarkMode ? pallete.White : pallete.Black)};
  textarea {
    width: 100%;
    background-color: ${(props) =>
      props.isDarkMode ? pallete.DarkGray : pallete.White};
    color: ${(props) => (props.isDarkMode ? pallete.White : pallete.Black)};
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    height: 150px;
    resize: none;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const IconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  svg {
    cursor: pointer;
  }
`;
export const StyledBtn = styled.button<{ isDarkMode: boolean }>`
  width: 100%;
  padding: 1rem;
  font-weight: 700;
  font-size: 1.3rem;
  background-color: ${(props) =>
    props.isDarkMode ? pallete.DarkGray : pallete.VeryLightGray};
  color: ${(props) => (props.isDarkMode ? pallete.White : pallete.Black)};
  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.isDarkMode ? pallete.VeryLightGray : pallete.VeryDarkGray};
    color: ${(props) => (props.isDarkMode ? pallete.Black : pallete.White)};
    transition: 0.2s ease-in-out;
  }
`;

export const StyledLabelAndInput = styled.div<{
  isDarkMode: boolean;
  err: boolean | undefined;
}>`
  input {
    width: 100%;
    border: ${(props) => (props.err ? `0.5px ${pallete.Red} solid` : "none")};
    background-color: ${(props) =>
      props.isDarkMode ? pallete.DarkGray : pallete.White};
    color: ${(props) => (props.isDarkMode ? pallete.White : pallete.Black)};
    padding: 0.5rem;
    font-size: 1.2rem;
  }
  input[type="checkbox"] {
    height: 20px;
    width: 20px;
    display: flex;
  }
`;
export const ErrorMessageContainer = styled.div<{ isDarkMode: boolean }>`
  height: 1.5rem;
  color: ${(props) => (props.isDarkMode ? pallete.DarkRed : pallete.Red)};
`;
