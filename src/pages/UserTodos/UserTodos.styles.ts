import styled from "styled-components";
import { pallete } from "../../misc/pallete";

export const UsersTodosPageWrapper = styled.main<{ isDarkMode: boolean }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  gap: 2rem;
  background-color: ${(props) =>
    props.isDarkMode ? pallete.DarkGray : pallete.AlmostWhite};
  color: ${(props) => (props.isDarkMode ? pallete.White : pallete.Black)};
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
