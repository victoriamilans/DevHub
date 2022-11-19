import "./App.css";
import { GlobalStyle } from "./styles/global";
import { RoutesMain } from "./routes";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./contexts/AuthContext";
import { UserTechProvider } from "./contexts/TechContext";

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <ToastContainer></ToastContainer>
      <UserProvider>
        <UserTechProvider>
          <RoutesMain />
        </UserTechProvider>
      </UserProvider>
    </>
  );
}

export default App;
