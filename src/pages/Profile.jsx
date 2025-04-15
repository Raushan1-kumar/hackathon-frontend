import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ProfilePage = () => {
  const user = {
    username: "john_doe",
    email: "john@example.com",
    profilePic:
      "https://images.unsplash.com/photo-1603415526960-f7e0328b79d5?auto=format&fit=crop&w=200&q=80",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl mx-auto"
      >
        <Card className="rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-xl sm:shadow-2xl bg-white dark:bg-gray-900 text-black dark:text-white">
          <div className="flex flex-col items-center">
            <img
              src="https://th.bing.com/th/id/OIP.n5CeR93916slWXGyV13PuAHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Profile"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full shadow-lg mb-4 sm:mb-6 border-4 border-green-500"
            />
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-center">{user.username}</h1>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base text-center">{user.email}</p>
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Button
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 rounded-xl shadow-lg text-sm sm:text-base"
                onClick={() => window.location.href = "/medical-records"}
              >
                Medical Records
              </Button>
              <Button
                className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-4 sm:px-6 py-2 rounded-xl shadow-lg text-sm sm:text-base"
                onClick={() => window.location.href = "/emergency"}
              >
                Emergency Detail
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default ProfilePage;