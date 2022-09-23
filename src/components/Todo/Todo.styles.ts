import styled from "styled-components";
import { Link } from "react-router-dom";
import { pallete } from "../../misc/pallete";
import guessTodoColor from "../../utils/guessTodoColor";

export const TodoWrapper = styled.div<{
  isDarkMode: boolean;
  urgent: boolean;
  completed: boolean;
}>`
  font-family: "Indie Flower", cursive;
  width: 400px;
  height: 200px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 0, 0, 0.5) inset;
  padding: 3rem 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) =>
    guessTodoColor(props.isDarkMode, props.completed, props.urgent)};
  color: ${(props) => (props.isDarkMode ? pallete.White : pallete.Black)};
  &:hover {
    cursor: pointer;
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

export const BasicTaskInfo = styled(Link)<{ isDarkMode: boolean }>`
  text-decoration: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => (props.isDarkMode ? pallete.White : pallete.Black)};
`;
