import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Staff from "./pages/Staff";
import StaffList from "./components/StaffComponents/StaffList";
import StaffHire from "./components/StaffComponents/StaffHire";
import Branch from "./pages/Branch";
import Client from "./pages/Client";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="staff" element={<Staff />}>
          <Route path="staff-list" element={<StaffList />} />
          <Route path="staff-hire" element={<StaffHire />} />
        </Route>
        <Route path="branch" element={<Branch />} />
        <Route path="client" element={<Client />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
