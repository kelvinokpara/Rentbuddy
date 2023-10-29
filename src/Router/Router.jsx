import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import NotFoundPage from "../Pages/NotFoundPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/home" element={<Homepage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
