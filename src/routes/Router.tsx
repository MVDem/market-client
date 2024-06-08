import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Layout from '../pages/layout/Layout';
import OfferCardPage from '../pages/OfferCardPage/OfferCardPage';
import {
  // FarmerLayout,
  // OfferDetailsPage,
  // EditOfferPage,
  // CreateOfferPage,
  EditProfilePage,
  ProfilePage,
} from '../pages/Farmer';
import Guard from './Guard';
import Login from '../pages/login/Login';

function Routing() {
  return (
    <BrowserRouter>
      <Suspense fallback='Loading...'>
        <Routes>
          <Route path='*' element={<Navigate to='/' />} />
          {/* Public routes */}
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/offer/:id' element={<OfferCardPage />} />
          </Route>

          {/* Farmer routes */}
          <Route
            path='/farmer'
            element={<Guard role={'FARMER'} element={<FarmerLayout />} />}
          >
            <Route index element={<Navigate to='/farmer/offers' />} />
            <Route path='/farmer/offers' element={<OffersListPage />} />

            <Route
              path='/farmer/offers/one/:id'
              element={<OfferDetailsPage />}
            />
            <Route path='/farmer/offers/edit/:id' element={<EditOfferPage />} />
            <Route path='/farmer/offers/create' element={<CreateOfferPage />} />
            <Route path='/farmer/profile' element={<ProfilePage />} />
            <Route path='/farmer/profile/edit' element={<EditProfilePage />} />
          </Route>

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default Routing;
