import React from "react";
// Navbar
import DashboardNavbar from "../dashboard/DashboardNavbar";

export default function AuthLayout({ children }) {
  return (
    <div>
      <DashboardNavbar />
      {children}
    </div>
  );
}
