import React from "react";
import "./App.scss";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import {Switch,Route } from 'react-router-dom'
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import BlogsPage from "./Pages/BlogsPage";
import PortFolioPage from "./Pages/PortFolioPage";
  
function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <Navbar />
      </div>
      <div className="mainContent">
        <div className="content">
          <Switch>
            <Route path="/" exact>
             <HomePage />
            </Route>
            <Route path="/about" exact>
             <AboutPage/>
            </Route>
            <Route path="/portfolio" exact >
             <PortFolioPage/>
            </Route>
            <Route path="/blogs" exact>
             <BlogsPage/>
            </Route>
            <Route path="/contact" exact>
             <ContactPage/>
            </Route>
            
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
