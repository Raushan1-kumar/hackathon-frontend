import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";

import axios from "../config/axios"

function InputEmergencyDetail() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    bloodGroup: "",
    secretKey:"",
    allergies: [],
    medications: [],
    emergencyContact: {
      name: "",
      phone: "",
      relation: ""
    },
    doctorContact: {
      name: "",
      phone: "",
      hospital: ""
    }
  });

  const [tempAllergy, setTempAllergy] = useState("");
  const [tempMedication, setTempMedication] = useState("");

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleAddAllergy = () => {
    if (tempAllergy.trim()) {
      setFormData(prev => ({
        ...prev,
        allergies: [...prev.allergies, tempAllergy.trim()]
      }));
      setTempAllergy("");
    }
  };

  const handleAddMedication = () => {
    if (tempMedication.trim()) {
      setFormData(prev => ({
        ...prev,
        medications: [...prev.medications, tempMedication.trim()]
      }));
      setTempMedication("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const emergency_detail = await axios.post('/emergency/add-emergency-detail',formData).then((res)=>{
        console.log(res.data);
        console.log(emergency_detail);
      })
      .catch((error) => {
        console.error(error);

        });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative bg-white dark:bg-gray-900 p-4 md:p-8 pb-20">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-8">
          <button
            onClick={() => window.location.href = "/emergency"}
            className="mr-4 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
          >
            <IoMdArrowBack className="text-2xl" />
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-inter">
            Emergency Information
          </h1>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Blood Group
                </label>
                <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Blood Group</option>
                  {bloodGroups.map(group => (
                    <option key={group} value={group}>{group}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Allergies
              </label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={tempAllergy}
                  onChange={(e) => setTempAllergy(e.target.value)}
                  className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  placeholder="Add an allergy"
                />
                <button
                  type="button"
                  onClick={handleAddAllergy}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.allergies.map((allergy, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm"
                  >
                    {allergy}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Current Medications
              </label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={tempMedication}
                  onChange={(e) => setTempMedication(e.target.value)}
                  className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  placeholder="Add a medication"
                />
                <button
                  type="button"
                  onClick={handleAddMedication}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.medications.map((medication, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm"
                  >
                    {medication}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Emergency Contact
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Contact Name
                    </label>
                    <input
                      type="text"
                      name="emergencyContact.name"
                      value={formData.emergencyContact.name}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      name="emergencyContact.phone"
                      value={formData.emergencyContact.phone}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Relationship
                    </label>
                    <input
                      type="text"
                      name="emergencyContact.relation"
                      value={formData.emergencyContact.relation}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Doctor Contact
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Doctor Name
                    </label>
                    <input
                      type="text"
                      name="doctorContact.name"
                      value={formData.doctorContact.name}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Doctor Phone
                    </label>
                    <input
                      type="tel"
                      name="doctorContact.phone"
                      value={formData.doctorContact.phone}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Hospital
                    </label>
                    <input
                      type="text"
                      name="doctorContact.hospital"
                      value={formData.doctorContact.hospital}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Secret Key
                </label>
                <input
                  type="text"
                  name="secretKey"
                  value={formData.secretKey}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Saving...</span>
                </>
              ) : (
                <span>Save Emergency Information</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InputEmergencyDetail;