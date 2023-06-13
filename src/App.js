import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Test from "./pages/Test";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Test" element={<Test />} />
    </Routes>
  );
};

export default App;
