import styled from "styled-components";


export const Wrapper = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;
