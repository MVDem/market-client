import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../pages/layout/Layout";
import {
  // FarmerLayout,
  // OfferDetailsPage,
  // EditOfferPage,
  // CreateOfferPage,
  EditProfilePage,
  ProfilePage,
<<<<<<< 31-create-searchbar-component
} from "../pages/Farmer";
import Guard from "./Guard";
import Login from "../pages/login/Login";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
=======
} from '../pages/Farmer';
import Guard from './Guard';
import Login from '../pages/login/Login';
import OfferPage from '../pages/OfferPage/OfferPage';
>>>>>>> develop

function Routing() {
  return (
    <BrowserRouter>
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          {/* Public routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
<<<<<<< 31-create-searchbar-component
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
=======
            <Route path="/sign" element={<Login />} />
            <Route path="/farmer/profile/:id" element={<ProfilePage />} />
            <Route path="/offer/ditails/:id" element={<OfferPage />} />
            <Route
              path="/farmer/profile/edit"
              element={<Guard role={'FARMER'} element={<EditProfilePage />} />}
            />
>>>>>>> develop
          </Route>

          {/* Farmer routes */}
          {/* <Route
            path="/farmer"
            element={<Guard role={"FARMER"} element={<FarmerLayout />} />}
          >
            <Route index element={<Navigate to="/farmer/offers" />} />
            <Route
              path="/farmer/offers/one/:id"
              element={<OfferDetailsPage />}
            />
            <Route path="/farmer/offers/edit/:id" element={<EditOfferPage />} />
            <Route path="/farmer/offers/create" element={<CreateOfferPage />} />
          </Route> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default Routing;
