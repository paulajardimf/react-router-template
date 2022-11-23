import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        {/* nome da chave do path é o que passa no profile/:(aqui) */}
        <Route path="/profile/:name" element={<ProfilePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
