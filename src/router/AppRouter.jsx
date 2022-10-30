import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import About from "../pages/about/About";
import Css from "../pages/css/Css";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import Html from "../pages/html/Html";
import Javascript from "../pages/javascript/Javascript";
import Services from "../pages/services/Services";

const AppRouter = () => {
	return (
		<BrowserRouter>
      <Navigation />
			<Routes>
				<Route path="*" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/css" element={<Css />} />
				<Route path="/html" element={<Html />} />
				<Route path="/javascript" element={<Javascript />} />
				<Route path="/services" element={<Services />} />
				<Route path="*" element={<Error />} />
			</Routes>
      <Footer />
		</BrowserRouter>
	);
};

export default AppRouter;
