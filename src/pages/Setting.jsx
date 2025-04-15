import React, { useState } from "react";
import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner"; // Add this import

const SettingsPage = () => {
  // State for all toggles
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true,
    twoFactor: false,
    staySignedIn: true,
    emailNotifications: true,
    smsNotifications: false,
    appointmentReminders: true,
    medicationReminders: true
  });

  // Handle toggle changes
  const handleToggle = (setting) => {
    setSettings(prev => {
      const newSettings = { ...prev, [setting]: !prev[setting] };
      
      // Handle special cases
      if (setting === 'darkMode') {
        document.documentElement.classList.toggle('dark');
      }
      
      // Show feedback
      toast.success(`${setting} ${newSettings[setting] ? 'enabled' : 'disabled'}`);
      
      return newSettings;
    });
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-green-50 to-green-200 dark:from-gray-900 dark:to-gray-800 text-black dark:text-white">
      <motion.div
        className="max-w-3xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-6 text-center">Settings</h1>

        <Card className="p-6 shadow-xl rounded-2xl bg-white dark:bg-gray-900">
          <h2 className="text-xl font-semibold mb-4">Privacy & Security</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Two-Factor Authentication</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Add an extra layer of security to your account</p>
              </div>
              <Switch 
                checked={settings.twoFactor}
                onCheckedChange={() => handleToggle('twoFactor')}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Stay Signed In</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Keep me logged in on this device</p>
              </div>
              <Switch 
                checked={settings.staySignedIn}
                onCheckedChange={() => handleToggle('staySignedIn')}
              />
            </div>
          </div>
        </Card>

        <Card className="p-6 shadow-xl rounded-2xl bg-white dark:bg-gray-900">
          <h2 className="text-xl font-semibold mb-4">Notifications</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Receive updates via email</p>
              </div>
              <Switch 
                checked={settings.emailNotifications}
                onCheckedChange={() => handleToggle('emailNotifications')}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">SMS Notifications</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Receive updates via text message</p>
              </div>
              <Switch 
                checked={settings.smsNotifications}
                onCheckedChange={() => handleToggle('smsNotifications')}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Appointment Reminders</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Get notified about upcoming appointments</p>
              </div>
              <Switch 
                checked={settings.appointmentReminders}
                onCheckedChange={() => handleToggle('appointmentReminders')}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Medication Reminders</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Get notified about medication schedules</p>
              </div>
              <Switch 
                checked={settings.medicationReminders}
                onCheckedChange={() => handleToggle('medicationReminders')}
              />
            </div>
          </div>
        </Card>

        <Card className="p-6 shadow-xl rounded-2xl bg-white dark:bg-gray-900">
          <h2 className="text-xl font-semibold mb-4">Appearance</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Dark Mode</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Toggle dark mode theme</p>
            </div>
            <Switch 
              checked={settings.darkMode}
              onCheckedChange={() => handleToggle('darkMode')}
            />
          </div>
        </Card>

        {/* ...existing danger zone card... */}
        <Card className="p-6 shadow-xl rounded-2xl bg-white dark:bg-gray-900 border border-red-500">
          <h2 className="text-xl font-semibold mb-4 text-red-500">
            Danger Zone
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <Button variant="destructive">Delete Account</Button>
        </Card>
      </motion.div>
    </div>
  );
};

export default SettingsPage;



