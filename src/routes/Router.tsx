import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Layout from '../pages/layout/Layout';
import { EditProfilePage, ProfilePage } from '../pages/Farmer';
import Guard from './Guard';
import Login from '../pages/login/Login';
import OfferPage from '../pages/OfferPage/OfferPage';
import FarmerPage from '../pages/FarmerPage/FarmerPage';

function Routing() {
  return (
    <BrowserRouter>
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/sign" element={<Login />} />
            <Route path="/farmer/ditails/:id" element={<FarmerPage />} />
            <Route path="/offer/ditails/:id" element={<OfferPage />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route
              path="/farmer/profile/edit"
              element={<Guard role={'FARMER'} element={<EditProfilePage />} />}
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default Routing;
