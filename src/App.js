import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer, PrivacyPolicy,Modeling,FinishingSchool, TermsnConditions, Disclaimer, ShippingandDelivery, ReturnPolicy, Error404, Home, Aboutus, Contactus, Services, Blogs, Clients, Reviews } from './routes/Routesmap';
import NavbarMobile from './components/Navbar/NavbarMobile';
import Notification from "./components/Tools/Notifications";

import {
  WebDevelopment,

} from './routes/Routesmap';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/*', element: <Error404 /> },
  { path: '/services', element: <Services /> },
  { path: '/best-web-developement-company', element: <WebDevelopment /> },
  { path: '/web-developement-company-in-vizag', element: <WebDevelopment /> },
  { path: '/best-web-developement-company-in-vizag', element: <WebDevelopment /> },
  
  { path: '/best-modeling-school-in-india', element: <Modeling /> },
  { path: '/best-Finishing-school-in-india', element: <FinishingSchool /> },

  { path: '/blogs', element: <Blogs /> },
  { path: '/clients', element: <Clients /> },
  { path: '/reviews', element: <Reviews /> },
  { path: '/aboutus', element: <Aboutus /> },
  { path: '/contactus', element: <Contactus /> },
  { path: '/privacypolicy', element: <PrivacyPolicy /> },
  { path: '/termsconditions', element: <TermsnConditions /> },
  { path: '/returnpolicy', element: <ReturnPolicy /> },
  { path: '/shippingdelivery', element: <ShippingandDelivery /> },
  { path: '/disclaimer', element: <Disclaimer /> },
];

export function App() {
  const location = useLocation();
  window.scrollTo(0, 0);

  return (
    <>
      <Navbar />
      <NavbarMobile />
      <Notification />
      <Routes location={location} key={location.pathname}>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
