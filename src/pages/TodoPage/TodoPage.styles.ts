import { Link } from "react-router-dom";
import styled from "styled-components";
import { pallete } from "../../misc/pallete";
import guessTodoColor from "../../utils/guessTodoColor";

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
  position: relative;
  font-family: "Indie Flower", cursive;
  width: 400px;
  height: 600px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 0, 0, 0.5) inset;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background-color: ${(props) =>
    guessTodoColor(props.isDarkMode, props.completed, props.urgent)};
  color: ${(props) => (props.isDarkMode ? pallete.White : pallete.Black)};
  @media screen and (max-width: 900px) {
    height: 100%;
    width: 100%;
  }
`;
export const StyledLink = styled(Link)<{ isDarkMode: boolean }>`
  color: ${(props) => (props.isDarkMode ? pallete.White : pallete.Black)};
`;
