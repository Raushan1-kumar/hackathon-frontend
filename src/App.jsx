
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import EmergencyView from "./pages/EmergencyView";
import InputHealthDetail from "./pages/InputHealthDetail";
import Share from "./pages/Share";
import Record from "./pages/Record";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import InputEmergencyDetail from "./pages/InputEmergencyDetail";
import DocsPage from "./pages/DocsPage";
import ProfilePage from "./pages/Profile";
import SettingsPage from "./pages/Setting";




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
      <Route path="/add-emergency-detail" element={<InputEmergencyDetail/>}/>
      <Route path="/share" element={<Share/>}/>
      <Route path="/records" element={<Record/>}/>
      <Route path="/docs-page" element={<DocsPage/>}/>
      <Route path="/profile-page" element={<ProfilePage/>}/>
      <Route path="/setting" element={<SettingsPage/>}/>


    </Routes>
  </BrowserRouter>
  );
}

export default App;