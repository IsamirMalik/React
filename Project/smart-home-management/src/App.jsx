import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Zones from "./components/Zones";
import Devices from "./components/Devices";
import Routines from "./components/Routines";
import Settings from "./components/Settings";
import Navbar from "./components/Navbar";
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          element={
            <>
              <Navbar />
              {/* All routes below will show Navbar */}
            </>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/zones" element={<Zones />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/routines" element={<Routines />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
