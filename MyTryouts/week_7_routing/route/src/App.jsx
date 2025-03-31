import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import "./App.css";

const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));

function App() {
  return (
    <>
      <div style={{ background: "black", color: "white" }}>THIS IS CONSTANT</div>

      <BrowserRouter basename="/">
        <Appbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/")}>Landing page</button>
      <button onClick={() => navigate("/dashboard")}>Dashboard page</button>
    </>
  );
}

export default App;
