import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages";
import { ThemeProvider } from "styled-components";
import Booth from "./components/booth";

const theme = {
  colors: {
    white: "#ffffff",
    green: "#779c4f",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<IndexPage />} />
          <Route path="/booth/detail" element={<Booth />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
