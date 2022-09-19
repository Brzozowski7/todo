import styled from "styled-components";
import { pallete } from "../../misc/pallete";

export const TodoWrapper = styled.div<{
  isDarkMode: boolean;
  rotation: number;
  urgent: boolean;
  completed: boolean;
}>`
  font-family: "Indie Flower", cursive;
  width: 400px;
  min-height: 200px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 0, 0, 0.5) inset;
  padding: 3rem 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transform: rotate(${(props) => props.rotation}deg);
  background-color: ${(props) =>
    props.isDarkMode && props.completed
      ? pallete.DarkGreen
      : !props.isDarkMode && props.completed
      ? pallete.Green
      : props.isDarkMode && props.urgent
      ? pallete.DarkRed
      : !props.isDarkMode && props.urgent
      ? pallete.Red
      : props.isDarkMode && !props.urgent && !props.completed
      ? pallete.VeryDarkGray
      : pallete.VeryLightGray};
  color: ${(props) => (props.isDarkMode ? pallete.White : pallete.Black)};
  &:hover {
    cursor: pointer;
    scale: 1.05;
    transition: 0.5s ease-in-out;
  }
  @media screen and (max-width: 900px) {
    transition: none;
    width: 100%;
  }
`;

export const TipContainer = styled.div`
  height: 1.2rem;
`;

export const IconsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  svg {
    padding: 1rem;
  }
`;

export const BasicTaskInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
