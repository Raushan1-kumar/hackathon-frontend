import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import axios from "../config/axios"

function InputHealthDetail() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    dob: "",
    gender: "",
    height: "",
    weight: "",
    contactInfo: {
      phone: "",
      email: ""
    },
    emergencyContact: {
      name: "",
      phone: ""
    },
    chronicConditions: [],
    pastSurgeries: [],
    medicalHistoryNotes: "",
    documents: []
  });

  const [tempCondition, setTempCondition] = useState("");
  const [tempSurgery, setTempSurgery] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);




  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddCondition = () => {
    if (tempCondition.trim()) {
      setFormData(prev => ({
        ...prev,
        chronicConditions: [...prev.chronicConditions, tempCondition.trim()]
      }));
      setTempCondition("");
    }
  };

  const handleAddSurgery = () => {
    if (tempSurgery.trim()) {
      setFormData(prev => ({
        ...prev,
        pastSurgeries: [...prev.pastSurgeries, tempSurgery.trim()]
      }));
      setTempSurgery("");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          documents: [
            ...prevData.documents,
            {
              type: file.type,
              url: reader.result, // This is the base64 string Cloudinary needs
            },
          ],
        }));
      };
      reader.readAsDataURL(file); // Converts file to base64
    }
  };
  

  
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  
  try {
    const response = await axios.post('/medical/medical-info/add', {
      dob: formData.dob,
      gender: formData.gender,
      height: Number(formData.height),
      weight: Number(formData.weight),
      chronicConditions: formData.chronicConditions,
      pastSurgeries: formData.pastSurgeries,
      medicalHistoryNotes: formData.medicalHistoryNotes,
      documents: formData.documents
    });

    if (response.data.success) {
      window.location.href = '/records';
    } else {
      
    }
  } catch (error) {
    console.error('Error submitting medical info:', error);

  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen relative bg-white dark:bg-gray-900 p-4 md:p-8 pb-20">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-8">
          <button
            onClick={() => window.location.href = "/"}
            className="mr-4 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
          >
            <IoMdArrowBack className="text-2xl" />
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-inter">
            Health Information
          </h1>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Height (cm)
                </label>
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Chronic Conditions
              </label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={tempCondition}
                  onChange={(e) => setTempCondition(e.target.value)}
                  className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  placeholder="Add a condition"
                />
                <button
                  type="button"
                  onClick={handleAddCondition}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.chronicConditions.map((condition, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {condition}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Past Surgeries
              </label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={tempSurgery}
                  onChange={(e) => setTempSurgery(e.target.value)}
                  className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  placeholder="Add a surgery"
                />
                <button
                  type="button"
                  onClick={handleAddSurgery}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.pastSurgeries.map((surgery, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {surgery}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Medical History Notes
              </label>
              <textarea
                name="medicalHistoryNotes"
                value={formData.medicalHistoryNotes}
                onChange={handleChange}
                rows="4"
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Upload Documents
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                accept=".pdf,.jpg,.jpeg,.png"
              />
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
                <span>Save Information</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InputHealthDetail;