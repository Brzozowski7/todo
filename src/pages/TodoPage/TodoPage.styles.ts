import styled from "styled-components";
import { pallete } from "../../misc/pallete";

export const TodoPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TodoDetailsWrapper = styled.div<{
  isDarkMode: boolean;
  urgent: boolean;
  completed: boolean;
}>`
  font-family: "Indie Flower", cursive;
  width: 400px;
  height: 600px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 0, 0, 0.5) inset;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align:center;
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
`;
