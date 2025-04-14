import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const MedicalRecordsPage = () => {
  const [formData, setFormData] = useState({
    condition: "",
    medication: "",
    allergy: "",
    surgery: "",
    doctor: "",
  });

  const [records, setRecords] = useState({
    conditions: [],
    medications: [],
    allergies: [],
    surgeries: [],
    doctors: [],
  });

  const handleAdd = (type) => {
    if (formData[type]) {
      setRecords((prev) => ({
        ...prev,
        [type + "s"]: [...prev[type + "s"], formData[type]],
      }));
      setFormData((prev) => ({ ...prev, [type]: "" }));
    }
  };

  return (
    <div
      className="min-h-screen p-6 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/medical-records-bg.jpg')" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6 text-center">
          Medical Records
        </h1>
        <Tabs defaultValue="conditions" className="bg-white rounded-xl p-6 text-black shadow-xl">
          <TabsList className="grid grid-cols-5 gap-2 mb-4">
            <TabsTrigger value="conditions">Conditions</TabsTrigger>
            <TabsTrigger value="medications">Medications</TabsTrigger>
            <TabsTrigger value="allergies">Allergies</TabsTrigger>
            <TabsTrigger value="surgeries">Surgeries</TabsTrigger>
            <TabsTrigger value="doctors">Doctors</TabsTrigger>
          </TabsList>

          {[
            "conditions",
            "medications",
            "allergies",
            "surgeries",
            "doctors",
          ].map((type) => (
            <TabsContent key={type} value={type}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-semibold mb-4 capitalize">
                  Manage {type}
                </h2>
                <div className="flex gap-2 mb-4">
                  <Input
                    value={formData[type.slice(0, -1)]}
                    onChange={(e) =>
                      setFormData({ ...formData, [type.slice(0, -1)]: e.target.value })
                    }
                    placeholder={`Add new ${type.slice(0, -1)}`}
                  />
                  <Button onClick={() => handleAdd(type.slice(0, -1))}>Add</Button>
                </div>
                <div className="space-y-2">
                  {records[type].map((item, idx) => (
                    <Card key={idx} className="p-3">
                      <p>{item}</p>
                    </Card>
                  ))}
                  {records[type].length === 0 && (
                    <p className="text-gray-500">No {type} added yet.</p>
                  )}
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </div>
  );
};

export default MedicalRecordsPage;