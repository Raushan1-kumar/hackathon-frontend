"use client";
import React, { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { MdEdit, MdQrCode2 } from "react-icons/md";
import axios from "../config/axios";
import { toast } from "sonner";
import QRCode from "react-qr-code"; 

function EmergencyView() {
  const [loading, setLoading] = useState(true);
  const [emergencyDetail, setEmergencyDetail] = useState({});
  const [showQR, setShowQR] = useState(false);
  const uuid = localStorage.getItem("emergencyUUID");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/emergency/access-emergency-detail/${uuid}`
        );
        if (response.data) {
          setEmergencyDetail(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching emergency details:", error);
        toast.error("Failed to load emergency details");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [uuid]);


  const generateQRData = () => {
    try {
      const qrData = {
        bloodGroup: emergencyDetail?.bloodGroup || '',
        allergies: emergencyDetail?.allergies || [],
        medications: emergencyDetail?.medications || [],
        emergencyContact: emergencyDetail?.emergencyContact || {},
        doctorContact: emergencyDetail?.doctorContact || {},
        uuid: uuid || ''
      };
      return JSON.stringify(qrData);
    } catch (error) {
      console.error('Error generating QR data:', error);
      return '';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 p-4 md:p-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="animate-pulse h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="animate-pulse h-64 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <button
              onClick={() => (window.location.href = "/")}
              className="mr-4 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
            >
              <IoMdArrowBack className="text-2xl" />
            </button>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-inter">
              Emergency Information
            </h1>
          </div>

          <div className="flex items-center space-x-2">
            {/* Desktop Buttons */}
            <button
              onClick={() => setShowQR(true)}
              className="hidden md:flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200"
            >
              <MdQrCode2 className="text-xl" />
              <span>Show QR Code</span>
            </button>

            <button
              onClick={() => (window.location.href = "/input-emergency")}
              className="hidden md:flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
            >
              <MdEdit className="text-xl" />
              <span>Edit Information</span>
            </button>

            {/* Mobile Buttons */}
            <button
              onClick={() => setShowQR(true)}
              className="md:hidden p-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200"
            >
              <MdQrCode2 className="text-xl" />
            </button>

            <button
              onClick={() => (window.location.href = "/input-emergency")}
              className="md:hidden p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
            >
              <MdEdit className="text-xl" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <div className="bg-red-100 dark:bg-red-900 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <i className="fas fa-droplet text-red-600 dark:text-red-400 mr-2"></i>
              <span className="text-xl font-bold text-red-600 dark:text-red-200 font-inter">
                Blood Type: {emergencyDetail?.bloodGroup}
              </span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="space-y-6">
              {/* Allergies Section */}
              <div>
                <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white font-inter">
                  Allergies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {emergencyDetail?.allergies?.map((allergy) => (
                    <span
                      key={allergy}
                      className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full font-inter"
                    >
                      {allergy}
                    </span>
                  ))}
                </div>
              </div>

              {/* Medications Section */}
              <div>
                <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white font-inter">
                  Current Medications
                </h2>
                <div className="flex flex-wrap gap-2">
                  {emergencyDetail?.medications?.map((medication) => (
                    <span
                      key={medication}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full font-inter"
                    >
                      {medication}
                    </span>
                  ))}
                </div>
              </div>

              {/* Emergency Contacts Section */}
              <div>
                <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white font-inter">
                  Emergency Family Contact
                </h2>
                <div className="space-y-3">
                  {emergencyDetail?.emergencyContact && (
                    <div className="flex flex-col md:flex-row md:items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white font-inter">
                          {emergencyDetail.emergencyContact.name}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 font-inter">
                          {emergencyDetail.emergencyContact.relation}
                        </p>
                      </div>
                      <a
                        href={`tel:${emergencyDetail.emergencyContact.phone}`}
                        className="mt-2 md:mt-0 inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                      >
                        <span className="font-inter">
                          {emergencyDetail.emergencyContact.phone}
                        </span>
                      </a>
                    </div>
                  )}
                </div>

                {/* Doctor Contact Section */}
                <h2 className="text-xl font-bold mt-6 mb-3 text-gray-900 dark:text-white font-inter">
                  Emergency Doctor Contact
                </h2>
                <div className="space-y-3">
                  {emergencyDetail?.doctorContact && (
                    <div className="flex flex-col md:flex-row md:items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white font-inter">
                          {emergencyDetail.doctorContact.name}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 font-inter">
                          {emergencyDetail.doctorContact.hospital}
                        </p>
                      </div>
                      <a
                        href={`tel:${emergencyDetail.doctorContact.phone}`}
                        className="mt-2 md:mt-0 inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                      >
                        <span className="font-inter">
                          {emergencyDetail.doctorContact.phone}
                        </span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* QR Code Modal */}
        {showQR && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-sm w-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Emergency Information QR Code
                </h3>
                <button
                  onClick={() => setShowQR(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <IoMdArrowBack className="text-2xl" />
                </button>
              </div>
              <div className="flex justify-center bg-white p-4 rounded-lg">
                <QRCode
                  value={generateQRData()}
                  size={256}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  viewBox={`0 0 256 256`}
                />
              </div>
              <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
                Scan this QR code to access emergency information
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmergencyView;
