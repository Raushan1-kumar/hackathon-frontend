import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { QRCodeSVG } from "qrcode.react";

const PrivacySharingPage = () => {
  const [shareableFields, setShareableFields] = useState({
    bloodType: true,
    allergies: true,
    medications: false,
    conditions: false,
    emergencyContact: true,
  });
  const [qrVisible, setQrVisible] = useState(false);

  const toggleField = (field) => {
    setShareableFields((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const generateShareLink = () => {
    setQrVisible(true);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center p-6 text-white"
      style={{ backgroundImage: "url('/privacy-bg.jpg')" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6 text-center">
          Privacy & Sharing Controls
        </h1>

        <div className="grid gap-4 bg-white p-6 rounded-2xl shadow-xl text-black">
          <h2 className="text-2xl font-semibold mb-4">Select Info to Share</h2>

          {Object.keys(shareableFields).map((field, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <Label className="capitalize">{field.replace(/([A-Z])/g, ' $1')}</Label>
              <Switch
                checked={shareableFields[field]}
                onCheckedChange={() => toggleField(field)}
              />
            </div>
          ))}

          <Button className="mt-6" onClick={generateShareLink}>
            Generate QR Code to Share
          </Button>

          {qrVisible && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center mt-6"
            >
              <QRCodeSVG
                value="https://medwallet.app/emergency/abc123"
                size={160}
              />
              <p className="text-sm text-gray-600 mt-2">Scan to view emergency info</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacySharingPage;