import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";


import Menu from './components/menu'
import Landing from './components/landing'
import GiftCards from "./components/giftCards";
import Jobs from "./components/jobs";
import Locations from "./components/locations";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/giftcards" element={<GiftCards/>}/>
          <Route path="/jobs" element={<Jobs/>}/>
          <Route path="/locations" element={<Locations/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
