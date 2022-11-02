import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";

function App() {
  const theme = createTheme();
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Container maxWidth="xl">
          <Navbar />
          <Routes>
            <Route path="/posts" exact element={<Home />} />
            <Route path="/" exact element={<Navigate to="/posts" />} />
            <Route path="/posts/search" exact element={<Home />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route
              path="/auth"
              exact
              element={!user ? <Auth /> : <Navigate to="/posts" />}
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
