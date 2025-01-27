import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./features/store"; // Import your Redux store
import PrimarySearchAppBar from "./components/Appbar/Appbar";
import Sidebar from "./components/Sidebar/Sidebar"; // Import your Sidebar
import Dashboard from "./pages/Dashboard/Dashboard"; // Import your Dashboard page

const App = () => {
  return (
    <Provider store={store}> {/* Provide the Redux store to the app */}
      <Router>
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          {/* Sidebar */}
          <Sidebar />

          {/* Main content area */}
          <div style={{ flex: 1 }}> {/* Adjust padding to the sidebar width */}
          <PrimarySearchAppBar />
          <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              {/* Other routes */}
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;