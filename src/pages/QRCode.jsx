"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import axios from "../config/axios"; // your axios config
import { toast } from "sonner"; // for showing errors or loading messages

function QRCode() {
  const { uuid } = useParams(); 
  const [emergencyData, setEmergencyData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmergencyDetail = async () => {
      try {
        const response = await axios.get(`/emergency/access-emergency-detail/${uuid}`);
        if (response.data?.data) {
          setEmergencyData(response.data.data);
        } else {
          toast.error("Emergency data not found");
        }
      } catch (error) {
        console.error("Error fetching emergency data:", error);
        toast.error("Error fetching emergency details");
      } finally {
        setLoading(false);
      }
    };

    if (uuid) {
      fetchEmergencyDetail();
    }
  }, [uuid]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!emergencyData) {
    return <div className="flex justify-center items-center h-screen text-red-500">No Emergency Data Found</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Emergency Details</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
        <div><strong>Name:</strong> {emergencyData.name}</div>
        <div><strong>Blood Group:</strong> {emergencyData.bloodGroup}</div>
        <div><strong>Allergies:</strong> {emergencyData.allergies?.join(", ")}</div>
        <div><strong>Medications:</strong> {emergencyData.medications?.join(", ")}</div>
        <div><strong>Emergency Contact:</strong> {emergencyData.emergencyContact?.name} ({emergencyData.emergencyContact?.relation}) - {emergencyData.emergencyContact?.phone}</div>
        <div><strong>Doctor Contact:</strong> {emergencyData.doctorContact?.name} ({emergencyData.doctorContact?.hospital}) - {emergencyData.doctorContact?.phone}</div>
      </div>
    </div>
  );
}

export default QRCode;
