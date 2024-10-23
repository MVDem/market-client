import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Layout from '../pages/layout/Layout';
import Guard from './Guard';
// import { ProfilePage } from '../pages/Farmer';
// import Login from '../pages/login/Login';
// import OfferPage from '../pages/OfferPage/OfferPage';
// import FarmerPage from '../pages/FarmerPage/FarmerPage';

const Login = lazy(() => import('../pages/SignPage/SignPage'));
const OfferPage = lazy(() => import('../pages/OfferPage/OfferPage'));
const FarmerPage = lazy(() => import('../pages/FarmerPage/FarmerPage'));
const ProfilePage = lazy(
  () => import('../pages/Farmer/ProfilePage/ProfilePage'),
);

function Routing() {
  return (
    <BrowserRouter>
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}>
              <Route path="/offer/ditails/:id" element={<OfferPage />} />
            </Route>
            <Route path="/signUp" element={<Login />} />
            <Route path="/signIn" element={<Login />} />
            <Route path="/farmer/ditails/:id" element={<FarmerPage />} />
            <Route
              path="/profile/:id"
              element={<Guard role={'FARMER'} element={<ProfilePage />} />}
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default Routing;
