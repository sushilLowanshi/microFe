import React from "react";
import { Routes, Route } from "react-router-dom";
import Reporting from "./components/reporting";
import Charts from "./components/charts";

const ReportingApp = () => (
  <>
    <h1>Reporting App asd</h1>
    <Routes>
      <Route path="/" element={<Charts/>} />
      {/* <Route path="/report" element={<Reporting/>} /> */}
      <Route path="details" element={<h2>Details Report</h2>} />
      <Route path="*" element={<h2>404 - Page Not Found</h2>} />

    </Routes>
  </>
);

export default ReportingApp;
