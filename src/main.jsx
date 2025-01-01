import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import CompanyForm from "./components/Admin/CompanyForm";
import MethodForm from "./components/Admin/MethodForm";
import CalendarView from "./components/User/CalendarView";
import Dashboard from "./components/User/Dashboard";
import "./styles/user.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<CalendarView />} />
        <Route path="/admin/companies" element={<CompanyForm />} />
        <Route path="/admin/methods" element={<MethodForm />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
