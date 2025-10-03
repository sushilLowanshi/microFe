import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import RemoteLoader from "./components/loader";
import { remotes } from "./components/remote";
import { Provider } from "react-redux";
import { store } from "./store";
import Navbar from "./components/pages/navbar";


function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function App() {
  return (
    
  <Provider store={store}>

    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Layout />}>
        <Route path="/" element={<h1>Host Home</h1>} />
        <Route
          path="/auth/*"
          element={
            <RemoteLoader
              loader={remotes.auth}
              loading={<p>Loading Auth...</p>}
              error={<p>⚠ Auth app unavailable</p>}
            />
          }
        />

        <Route
          path="/booking/*"
          element={
            <RemoteLoader
              loader={remotes.booking}
              loading={<p>Loading Booking...</p>}
              error={<p>⚠ Booking app unavailable</p>}
            />
          }
        />

        <Route
          path="/report/*"
          element={
            <RemoteLoader
              loader={remotes.reporting}
              loading={<p>Loading Reporting...</p>}
              error={<p>⚠ Reporting app unavailable</p>}
            />
          }
        />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
