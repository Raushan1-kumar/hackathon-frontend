"use client";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { IoMdArrowBack } from "react-icons/io";
import { MdEdit, MdClose, MdAdd } from "react-icons/md";

function Record() {
  const [loading, setLoading] = useState(true);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const medicalRecords = {
    documents: [
        {
          id: 1,
          title: "Annual Physical Report",
          date: "2024-12-15",
          doctor: "Dr. Sarah Wilson",
          type: "document",
          details: "Complete physical examination results and recommendations",
        },
        {
          id: 2,
          title: "Cardiology Consultation",
          date: "2024-11-20",
          doctor: "Dr. Michael Chen",
          type: "document",
          details: "Cardiac evaluation and ECG results",
        },
      ],
      tests: [
        {
          id: 3,
          title: "Blood Work Analysis",
          date: "2024-12-10",
          type: "test",
          result: "Normal",
          details: "Complete blood count and metabolic panel results",
        },
        {
          id: 4,
          title: "X-Ray Results",
          date: "2024-11-25",
          type: "test",
          result: "Normal",
          details: "Chest X-ray examination results",
        },
      ],
      vaccinations: [
        {
          id: 5,
          title: "COVID-19 Booster",
          date: "2024-09-15",
          type: "vaccination",
          provider: "City Health Clinic",
          details: "mRNA booster shot",
        },
        {
          id: 6,
          title: "Flu Vaccine",
          date: "2024-10-01",
          type: "vaccination",
          provider: "pharmacy",
          details: "Annual influenza vaccination",
        },
      ],
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen border-2 rounded-4xl bg-white dark:bg-gray-900 p-4 md:p-8">
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
              Medical Records
            </h1>
          </div>
          <button
            onClick={() => (window.location.href = "/input-detail")}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
          >
            <MdAdd className="text-xl" />
            <span>Add Record</span>
          </button>
        </div>

        <div className="space-y-6">
          {/* Medical Documents Section */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white font-inter">
              Medical Documents
            </h2>
            <div className="space-y-3">
              {medicalRecords.documents.map((record) => (
                <div
                  key={record.id}
                  className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                  onClick={() => setSelectedRecord(record)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white font-inter">
                        {record.title}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 font-inter">
                        {record.doctor}
                      </p>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 font-inter">
                      {record.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Test Results Section */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            {/* ...existing test results section... */}
          </div>

          {/* Vaccination Records Section */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            {/* ...existing vaccination records section... */}
          </div>
        </div>

        {/* Record Detail Modal */}
        {selectedRecord && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white font-inter">
                  {selectedRecord.title}
                </h3>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      (window.location.href = `/input-detail?edit=${selectedRecord.id}&type=${selectedRecord.type}`)
                    }
                    className="p-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                  >
                    <MdEdit className="text-xl" />
                  </button>
                  <button
                    onClick={() => setSelectedRecord(null)}
                    className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
                  >
                    <MdClose className="text-xl" />
                  </button>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-gray-600 dark:text-gray-300 font-inter">
                  Date: {selectedRecord.date}
                </p>
                {selectedRecord.doctor && (
                  <p className="text-gray-600 dark:text-gray-300 font-inter">
                    Doctor: {selectedRecord.doctor}
                  </p>
                )}
                {selectedRecord.result && (
                  <p className="text-gray-600 dark:text-gray-300 font-inter">
                    Result: {selectedRecord.result}
                  </p>
                )}
                {selectedRecord.provider && (
                  <p className="text-gray-600 dark:text-gray-300 font-inter">
                    Provider: {selectedRecord.provider}
                  </p>
                )}
                <p className="text-gray-600 dark:text-gray-300 font-inter">
                  Details: {selectedRecord.details}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Record;