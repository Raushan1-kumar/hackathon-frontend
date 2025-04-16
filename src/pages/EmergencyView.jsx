"use client";
import React, { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import axios from "../config/axios"
import { MdEdit } from "react-icons/md";
import { toast } from 'sonner';
import { Link } from "react-router-dom";


function EmergencyView() {
  const [loading, setLoading] = useState(true);
  const [emergencyDetail, setEmergencyDetail] = useState({});
  const uuid=localStorage.getItem('emergencyUUID')

  useEffect(() => {
    const fetchData = async () => {
      console.log('hi');
      console.log(uuid);
      try {
        const response = await axios.get(`/emergency/access-emergency-detail/${uuid}`).then((res)=>{
          console.log(res.data);
          if(res.data){
            setEmergencyDetail(res.data.data);
            console.log(emergencyDetail);
          }
        })
      } catch (error) {
        console.error('Error fetching emergency details:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [uuid]);

  const emergencyInfo = {
    bloodType: "A+",
    allergies: ["Penicillin", "Peanuts", "Latex"],
    conditions: ["Asthma", "Hypertension"],
    medications: ["Albuterol", "Lisinopril"],
    contacts: [
      {
        name: "John Smith",
        relation: "Spouse",
        phone: "(555) 123-4567",
      },
      {
        name: "Mary Johnson",
        relation: "Primary Care Physician",
        phone: "(555) 987-6543",
      },
    ],
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
          
          {/* Desktop Edit Button */}
          <button
            onClick={() => (window.location.href = "/input-emergency")}
            className="hidden md:flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
          >
            <MdEdit className="text-xl" />
            <span>Edit Information</span>
          </button>

          {/* Mobile Edit Button */}
          <button
            onClick={() => (window.location.href = "/input-emergency")}
            className="md:hidden p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
          >
            <MdEdit className="text-xl" />
          </button>
        </div>

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
              <div>
                <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white font-inter">
                  Allergies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {emergencyDetail?.allergies.map((allergy) => (
                    <span
                      key={allergy}
                      className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full font-inter"
                    >
                      {allergy}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white font-inter">
                  Medical Conditions
                </h2>
                <div className="flex flex-wrap gap-2">
                  {emergencyInfo.conditions.map((condition) => (
                    <span
                      key={condition}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-inter"
                    >
                      {condition}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white font-inter">
                  Current Medications
                </h2>
                <div className="flex flex-wrap gap-2">
                  {emergencyDetail?.medications.map((medication) => (
                    <span
                      key={medication}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full font-inter"
                    >
                      {medication}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white font-inter">
                  Emergency Family Contacts
                </h2>
                <div className="space-y-3">
                  {emergencyDetail?.emergencyContact&&
                    <div
                      key={emergencyDetail?.emergencyContact.name}
                      className="flex flex-col md:flex-row md:items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white font-inter">
                          {emergencyDetail?.emergencyContact.name}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 font-inter">
                          {emergencyDetail?.emergencyContact.relation}
                        </p>
                      </div>
                      <Link to=""
                        className="mt-2 md:mt-0 inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                      >
                        <IoMdArrowBack className="mr-2" />
                        <span className="font-inter">{emergencyDetail?.emergencyContact.phone}</span>
                      </Link>
                    </div>
                  }
                </div>
                <div className="space-y-3">
                <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white font-inter">
                  Emergency Doctor Contacts
                </h2>
                  {emergencyDetail?.doctorContact &&
                    <div
                      key={emergencyDetail?.doctorContact?.name}
                      className="flex flex-col md:flex-row md:items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white font-inter">
                          {emergencyDetail?.doctorContact?.phone}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 font-inter">
                          {emergencyDetail?.doctorContact?.hospital}
                        </p>
                      </div>
            
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmergencyView;