import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import SignPage from '../pages/signpage/SignPage';
import Layout from '../pages/layout/Layout';
import OfferCardPage from '../pages/OfferCardPage/OfferCardPage';
import {
  FarmerLayout,
  OffersListPage,
  OfferDetailsPage,
  EditOfferPage,
  CreateOfferPage,
  EditProfilePage,
  ProfilePage,
} from '../pages/Farmer';
import Guard from './Guard';

function Routing() {
  return (
    <BrowserRouter>
      <Suspense fallback='Loading...'>
        <Routes>
          <Route path='*' element={<Navigate to='/' />} />
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/login' element={<SignPage />} />
            <Route path='/about' element={<Navigate to='/About' />} />
          </Route>
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
          <Route path='/about' element={<Navigate to='/About' />} />
          <Route path='/login' element={<SignPage />} />
          <Route path='/layout' element={<Layout />} />
          <Route path='/offer/:id' element={<OfferCardPage />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default Routing;
