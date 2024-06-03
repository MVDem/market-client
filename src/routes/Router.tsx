import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import SignPage from '../pages/signpage/SignPage';
import Layout from '../pages/layout/Layout';
import OfferCardPage from '../pages/OfferCard/OfferCard';

function Routing() {
  return (
    <BrowserRouter>
      <Suspense fallback='Loading...'>
        <Routes>
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
