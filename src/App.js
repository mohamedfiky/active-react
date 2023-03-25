import React, { Component } from 'react' ;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import HomePage from "./Pages/Home-Page";
import AboutUsPage from "./Pages/About-Us-Page";
import PortfolioPage from './Pages/Portfolio-Page';
import BlogPage from "./Pages/Blog-Page";
import ContactUsPage from './Pages/Contact-Us-Page';
import Nav from "./Components/Nav-Bar";
import Footer from './Components/Footer';


class App extends Component {
  render() {
    return (
      <BrowserRouter>

      <Nav />

      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/about-us' element={<AboutUsPage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/contact-us' element={<ContactUsPage />} />
      </Routes>

      <Footer />
      
      </BrowserRouter>
    )
  }
}

export default App

