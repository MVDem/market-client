import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import SignPage from "../components/signpage/SignPage";

function Routing() {
  return (
    <BrowserRouter>
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/about" element={<Navigate to="/About" />} />
          <Route path="/login" element={<SignPage/>} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default Routing;
