import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Layout from '../pages/layout/Layout';
import Login from '../pages/login/Login';

function Routing() {
  return (
    <BrowserRouter>
      <Suspense fallback='Loading...'>
        <Routes>
          <Route path='/about' element={<Navigate to='/About' />} />
          <Route path='/login' element={<Login />} />
          <Route path='/layout' element={<Layout />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default Routing;
