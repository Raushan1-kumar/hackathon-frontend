import React, { useState, useEffect } from "react";
import axios from "../config/axios";
import { toast } from "sonner";
import Header from "./Header";

function BloodRequestsPage() {
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [sending, setSending] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBloodRequests = async () => {
      try {
        const response = await axios.get("/blood/blood-requests/list");
        if (response.data.success) {
          setRequests(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching blood requests:", error);
        toast.error("Failed to load blood requests");
      } finally {
        setLoading(false);
      }
    };

    fetchBloodRequests();
  }, []);
  const openDetails = (req) => {
    setSelectedRequest(req);
    setShowDetailsModal(true);
  };

  const sendHelpRequest = async () => {
    setSending(true);
    try {
      const response = await axios.post(`/blood/help-request/${selectedRequest._id}`);
      if (response.data.success) {
        toast.success("Help request sent successfully!");
        setShowConfirmModal(false);
        setShowDetailsModal(false);
      }
    } catch (error) {
      console.error("Error sending help request:", error);
      toast.error("Failed to send help request");
    } finally {
      setSending(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }


  return (
    <>
     <Header/>
    <div className="min-h-screen mt-14 bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">

        {requests.length === 0 ? (
            <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">No blood requests found</p>
          </div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {requests.map((req) => (
              <div
              key={req._id}
                className="p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow hover:shadow-md transition cursor-pointer"
                onClick={() => openDetails(req)}
              >
                <p className="text-lg font-semibold text-gray-800 dark:text-white">{req.name}</p>
                <p className="text-red-500 font-medium">Blood Group: {req.bloodGroup}</p>
                <p className="text-gray-600 dark:text-gray-300">Location: {req.location}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                  Contact: {req.contact}
                  </p>
              </div>
            ))}
          </div>
        )}
        </div>
      {/* Detail Modal */}
      {showDetailsModal && selectedRequest && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-lg p-6 relative">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-white"
              onClick={() => setShowDetailsModal(false)}
              >
              ✖
            </button>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Request Details</h2>
            <div className="space-y-2 text-gray-700 dark:text-gray-200">
              <p><strong>Name:</strong> {selectedRequest.name}</p>
              <p><strong>Contact:</strong> {selectedRequest.contact}</p>
              <p><strong>Blood Group:</strong> {selectedRequest.bloodGroup}</p>
              <p><strong>Required Date:</strong> {selectedRequest.dateRequired}</p>
              <p><strong>Location:</strong> {selectedRequest.location}</p>
              <p><strong>Reason:</strong> {selectedRequest.reason}</p>
            </div>
            <button
              onClick={() => setShowConfirmModal(true)}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
              >
              Send Request for Help
            </button>
          </div>
        </div>
      )}

      {/* Confirm Modal */}
      {showConfirmModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md text-center">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Confirm Help Request</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Are you sure you want to send a help request to blood donors?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded hover:bg-gray-400 dark:hover:bg-gray-500 text-black dark:text-white"
                >
                Cancel
              </button>
              <button
                onClick={sendHelpRequest}
                disabled={sending}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded disabled:opacity-50"
                >
                {sending ? "Sending..." : "Confirm & Send"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
      </>
  );
}

export default BloodRequestsPage;
