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
import ProtectedRoutes from "./pages/ProtectedRoutes";
import BloodRequestForm from "./pages/BloodRequestForm";
import BloodRequestsPage from "./pages/BloodRequestList";
import InputLifestyleForm from "./pages/InputLifestyleDetail";
import MedicalHistoryForm from "./pages/MedicalHistory";
import MedicalHistoryView from "./pages/MedicalHistoryView";
import RiskManagementForm from "./pages/RiskMeasurementForm";
import QRCode from "react-qr-code";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/emergency" element={<EmergencyView />} />
        <Route
          path="/input-detail"
          element={
            <ProtectedRoutes>
              <InputHealthDetail />
            </ProtectedRoutes>
          }
        />
        <Route path="/emergency/access-emergency-detail/:uuid" element={<QRCode />} />
        <Route
          path="/add-emergency-detail"
          element={
            <ProtectedRoutes>
              <InputEmergencyDetail />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/share"
          element={
            <ProtectedRoutes>
              <Share />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/records"
          element={
            <ProtectedRoutes>
              <Record />
            </ProtectedRoutes>
          }
        />
        <Route path="/docs-page" element={<DocsPage />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoutes>
              <ProfilePage />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/blood-request/add"
          element={
            <ProtectedRoutes>
              <BloodRequestForm />
            </ProtectedRoutes>
          }
        />
<Route
          path="/risk-measurement"
          element={
            <ProtectedRoutes>
              <RiskManagementForm />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/blood-request/list"
          element={
            <ProtectedRoutes>
              <BloodRequestsPage />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/setting"
          element={
            <ProtectedRoutes>
              <SettingsPage />
            </ProtectedRoutes>
          }
        />
         <Route
          path="/medical-history-form"
          element={
            <ProtectedRoutes>
              <MedicalHistoryForm />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/medical-history-view"
          element={
            <ProtectedRoutes>
              <MedicalHistoryView />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/input-lifeStyle-detail"
          element={
            <ProtectedRoutes>
              <InputLifestyleForm/>
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
