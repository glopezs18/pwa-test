import React, { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home'
import Listado from './pages/Listado'
import Acerca from './pages/Acerca'
import Login from './pages/Login'
import Profile from './pages/Profile'
import ForgotPassword from './pages/ForgotPassword'
import Item from './components/Item'
import RouteGuard from "./RouteGuard"
import ReactGA from "react-ga4"
import './App.scss';



function App() {
  const location = useLocation();
  useEffect(() => {
    const TRACKING_ID = "G-VTVDKQW9F8";
    ReactGA.initialize(TRACKING_ID);
    // 
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  // console.log(location.pathname);



  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/list' element={< Listado />}></Route>
        <Route exact path='/list/:id' element={<Item />}></Route>
        <Route exact path='/about' element={< Acerca />}></Route>
        <Route exact path='/login' element={< Login />}></Route>
        <Route exact path='/profile' element={< Profile />}></Route>
        <Route exact path='/forgot-password' element={< ForgotPassword />}></Route>

         <Route path="/profile"
            element={
              <RouteGuard>
                <Profile />
              </RouteGuard>
            }
          />         
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
