import styled from "styled-components";
import { pallete } from "../../misc/pallete";

export const Wrapper = styled.div<{ isDarkMode: boolean }>`
  position: absolute;
  top: -1px;
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 3rem 4rem;
  background-color: ${(props) =>
    props.isDarkMode ? pallete.Black : pallete.VeryLightGray};
  color: ${(props) => (props.isDarkMode ? pallete.White : pallete.Black)};
  input {
    background-color: ${(props) =>
      props.isDarkMode ? pallete.DarkGray : pallete.VeryLightGray};
    color: ${(props) => (props.isDarkMode ? pallete.White : pallete.Black)};
    padding: 0.5rem;
    font-size: 1.2rem;
  }
  textarea {
    background-color: ${(props) =>
      props.isDarkMode ? pallete.DarkGray : pallete.VeryLightGray};
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

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const StyledBtn = styled.button<{ isDarkMode: boolean }>`
  padding: 1rem;
  font-weight: 700;
  font-size: 1.3rem;
  background-color: ${(props) =>
    props.isDarkMode ? pallete.DarkGray : pallete.VeryLightGray};
  color: ${(props) => (props.isDarkMode ? pallete.White : pallete.Black)};
  &:hover {
    cursor: pointer;
  }
`;
