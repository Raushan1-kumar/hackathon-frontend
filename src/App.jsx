
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import EmergencyView from "./pages/EmergencyView";
import InputHealthDetail from "./pages/InputHealthDetail";
import Share from "./pages/Share";
import Record from "./pages/Record";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";




function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/emergency" element={<EmergencyView/>}/>
      <Route path="/input-detail" element={<InputHealthDetail/>}/>
      <Route path="/share" element={<Share/>}/>
      <Route path="/records" element={<Record/>}/>

    </Routes>
  </BrowserRouter>
  );
}

export default App;