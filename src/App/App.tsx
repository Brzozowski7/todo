import Navbar from "../components/Navbar";
import { Wrapper } from "./App.styles";
import { DarkModeContextProvider } from "../contexts/DarkModeContext";

function App() {
  return (
    <DarkModeContextProvider>
      <Wrapper>
        <Navbar />
      </Wrapper>
    </DarkModeContextProvider>
  );
}

export default App;
