import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function Routing() {
  return (
    <BrowserRouter>
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default Routing;
