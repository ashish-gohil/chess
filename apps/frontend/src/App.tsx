import { BrowserRouter, Route, Routes } from "react-router-dom";
import Themes from "./pages/Themes";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Game from "./pages/Game";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Landing />
            </Layout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/game/:gameId"
          element={
            <Layout>
              <Game />
            </Layout>
          }
        />
        <Route path="themes" element={<Themes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
