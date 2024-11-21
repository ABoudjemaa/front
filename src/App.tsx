import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ModulesPage from "./pages/ModulesPage";
import RootLayout from "./Layouts/RootLayout";
import NoPage from "./pages/NoPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<LoginPage />} />
        <Route path="/modules" element={<ModulesPage />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};

export default App;
