import styled from "styled-components";
import { pallete } from "../../misc/pallete";

export const MainPageWrapper = styled.main<{ isDarkMode: boolean }>`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 2rem;
  gap: 2rem;
  background-color: ${(props) =>
    props.isDarkMode ? pallete.DarkGray : pallete.AlmostWhite};
  @media screen and (max-width: 900px) {
    height: 100%;
    justify-content: flex-start;
  }
`;

export const TodosWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const AddTodoBtn = styled.div<{ isDarkMode: boolean }>`
  position: relative;
  background-color: ${(props) =>
    props.isDarkMode ? pallete.Black : pallete.White};
  color: ${(props) => (props.isDarkMode ? pallete.White : pallete.Black)};
  border: ${(props) =>
    props.isDarkMode
      ? `0.5px solid ${pallete.TransparentWhite}`
      : `0.5px solid ${pallete.TransparentBlack}`};
  border-radius: 50%;
  padding: 15px;
  margin: 10px;
  width: 50px;
  height: 50px;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  &:hover {
    scale: 1.05;
    transition: 0.3s ease-in-out;
  }
`;
