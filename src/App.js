import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Apply from "./Screens/Apply";
import "./App.css";
import Submitted from "./Screens/Submitted";
import TrackingPage from "./Screens/TrackingPage";
import Login from "./Screens/Admin/Login";
import CardRecords from "./Screens/Admin/CardRecords";
import { AuthContextProvider } from "./Context/AuthContext";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Apply />}></Route>
          <Route path="submit-true" element={<Submitted />}></Route>
          <Route path="track-card" element={<TrackingPage />}></Route>
          <AuthContextProvider>
            <Route path="admin/login" element={<Login />}></Route>
            <Route path="admin/card-records" element={<CardRecords />}></Route>
          </AuthContextProvider>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
