import React from "react";
import Nav from "./components/layouts/Nav";
import Footer from "./components/layouts/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <br />
      <Outlet />
      <br />
      <Footer />
    </div>
  );
}

export default App;
