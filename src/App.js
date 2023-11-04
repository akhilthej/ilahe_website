import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4'
import { Navbar, Footer, PrivacyPolicy, TermsnConditions, Disclaimer, ShippingandDelivery, ReturnPolicy, Error404, Home, Aboutus, Contactus, Blogs, Reviews,
  Modeling, ModelingBasicService, ModelingEliteService, ModelingExpert,
  FinishingSchool, FinishingBasicService, FinishingEliteService, FinishingExpert, Dashboard, Login,
} from './routes/Routesmap';
import NavbarMobile from './components/Navbar/NavbarMobile';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/*', element: <Error404 /> },
  
  { path: '/best-modeling-school-in-india', element: <Modeling /> },
  { path: '/best-modeling-school-in-basic', element: <ModelingBasicService /> },
  { path: '/best-modeling-school-in-elite', element: <ModelingEliteService /> },
  { path: '/best-modeling-school-in-expert', element: <ModelingExpert /> },

  { path: '/best-Finishing-school-in-india', element: <FinishingSchool /> },
  { path: '/best-Finishing-school-basic', element: <FinishingBasicService /> },
  { path: '/best-Finishing-school-elite', element: <FinishingEliteService /> },
  { path: '/best-Finishing-school-expert', element: <FinishingExpert /> },

  { path: '/blogs', element: <Blogs /> },
  { path: '/reviews', element: <Reviews /> },
  { path: '/aboutus', element: <Aboutus /> },
  { path: '/contactus', element: <Contactus /> },
  { path: '/privacypolicy', element: <PrivacyPolicy /> },
  { path: '/termsconditions', element: <TermsnConditions /> },
  { path: '/returnpolicy', element: <ReturnPolicy /> },
  { path: '/shippingdelivery', element: <ShippingandDelivery /> },
  { path: '/disclaimer', element: <Disclaimer /> },


  { path: '/login', element: <Login /> },
  
];

ReactGA.initialize('G-8QD5KXH3VB'); // Replace with your Tracking ID

export function App() {
  const location = useLocation();
  window.scrollTo(0, 0);

  // Determine if the current route is "/login"
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {!isLoginPage && <Navbar />}
      {!isLoginPage && <NavbarMobile />}
      <Routes location={location} key={location.pathname}>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
}

export default App;
