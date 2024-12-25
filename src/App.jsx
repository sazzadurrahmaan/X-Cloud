import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChooseProvider from "./pageComponents/ChooseProvider";
import CreateBlueprint from "./pageComponents/CreateBluePrint";
import AllBluePrints from "./pageComponents/AllBluePrints";

const App = () => {
  return (
    <Router>
      <div className="bg-[#171A30]">
        <Header />
        <div className="flex-grow">
          <Routes>
         
            <Route path="/" element={<ChooseProvider />} />
            <Route path="/create-blueprint" element={<CreateBlueprint />} />
            <Route path="/all-blueprints" element={<AllBluePrints />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
