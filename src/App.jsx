import React from "react";
import "./app.css";
import Navbar from "./Component/Navbar/Navbar";
import Main from "./Component/Main/Main";
import Home from "./Component/Home/Home";
// import Footer from "./Component/Footer/Footer";

const App = () => {
  return (
    <div className="bg-[url('./Assets/travel.jpg')] bg-center bg-cover h-screen bg-no-repeat text-black">
      <Navbar />
      <Home />
      <Main />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
