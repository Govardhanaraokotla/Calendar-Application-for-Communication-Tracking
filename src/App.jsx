import React from "react";
import Sidebar from "./components/User/Sidebar";
import CalendarView from "./components/User/CalendarView";
import Footer from "./components/Footer";
import TopBar from "./components/User/TopBar"; // Import TopBar
import "./styles/user.css";

const App = () => {
  return (
    <div className="app-container">
      {/* Top Bar */}
      <TopBar />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">
        <CalendarView />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
