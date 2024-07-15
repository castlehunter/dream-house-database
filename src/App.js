import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Staff from "./pages/Staff";
import StaffList from "./pages/StaffList";
import StaffHire from "./pages/StaffHire";
import Branch from "./pages/Branch";
import Client from "./pages/Client";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/staff" element={<Staff />}>
          <Route path="/staff-list" element={<StaffList />} />
          <Route path="/staff-hire" element={<StaffHire />} />
        </Route>
        <Route path="/branch" element={<Branch />} />
        <Route path="/client" element={<Client />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
