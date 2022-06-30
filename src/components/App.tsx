import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";

const App = () => {
  return (
    <div className="bg-bkg-pattern h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
