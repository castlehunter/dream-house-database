import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Staff from "./pages/Staff";
import StaffList from "./components/StaffComponents/StaffList";
import StaffHire from "./components/StaffComponents/StaffHire";
import Client from "./pages/Client";
import StaffEdit from "./components/StaffComponents/StaffEdit";
import Confirm from "./components/StaffComponents/Confirm";
import Branch from "./pages/Branch";
import IdentifyBranchAddress from "./components/BranchComponents/IdentifyBranchAddress";
import OpenABranch from "./components/BranchComponents/OpenABranch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="staff" element={<Staff />}>
          <Route index element={<StaffList />} />
          <Route path="staff-list" element={<StaffList />} />
          <Route path="staff-hire" element={<StaffHire />} />
          <Route
            path="hire-confirmed/:staffNo"
            element={<Confirm type="hire" />}
          />
          <Route path="staff-edit/:staffNo" element={<StaffEdit />} />
          <Route
            path="edit-confirmed/:staffNo"
            element={<Confirm type="edit" />}
          />
        </Route>

        <Route path="branch" element={<Branch />}>
          <Route index element={<IdentifyBranchAddress />} />
          <Route
            path="identify-branch-address"
            element={<IdentifyBranchAddress />}
          />
          <Route path="open-a-branch" element={<OpenABranch />} />
        </Route>
        <Route path="client" element={<Client />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
