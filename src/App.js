import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Staff from "./pages/Staff";
import StaffList from "./components/StaffComponents/StaffList";
import StaffHire from "./components/StaffComponents/StaffHire";
import Client from "./pages/Client";
import StaffEdit from "./components/StaffComponents/StaffEdit";
import StaffConfirm from "./components/StaffComponents/StaffConfirm";
import Branch from "./pages/Branch";
import IdentifyBranchAddress from "./components/BranchComponents/IdentifyBranchAddress";
import BranchList from "./components/BranchComponents/BranchList";
import OpenABranch from "./components/BranchComponents/OpenABranch";
import BranchEdit from "./components/BranchComponents/BranchEdit";
import BranchConfirm from "./components/BranchComponents/BranchConfirm";
import ClientList from "./components/ClientComponents/ClientList";
import ClientAdd from "./components/ClientComponents/ClientAdd";
import ClientEdit from "./components/ClientComponents/ClientEdit";
import ClientConfirm from "./components/ClientComponents/ClientConfirm";

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
            element={<StaffConfirm type="new" />}
          />
          <Route path="staff-edit/:staffNo" element={<StaffEdit />} />
          <Route
            path="edit-confirmed/:staffNo"
            element={<StaffConfirm type="edit" />}
          />
        </Route>

        <Route path="branch" element={<Branch />}>
          <Route index element={<IdentifyBranchAddress />} />
          <Route
            path="identify-branch-address"
            element={<IdentifyBranchAddress />}
          />
          <Route path="branch-list" element={<BranchList />} />
          <Route path="branch-edit/:branchNo" element={<BranchEdit />} />
          <Route
            path="edit-confirmed/:branchNo"
            element={<BranchConfirm type="edit" />}
          />
          <Route path="open-a-branch" element={<OpenABranch />} />
          <Route
            path="new-branch-confirmed/:branchNo"
            element={<BranchConfirm type="new" />}
          />
        </Route>
        <Route path="client" element={<Client />}>
          <Route index element={<ClientList />} />
          <Route path="client-list" element={<ClientList />} />
          <Route path="client-add" element={<ClientAdd />} />
          <Route
            path="add-client-confirmed/:clientNo"
            element={<ClientConfirm type="new" />}
          />
          <Route path="client-edit/:clientNo" element={<ClientEdit />} />
          <Route
            path="edit-confirmed/:clientNo"
            element={<ClientConfirm type="edit" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
