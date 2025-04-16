import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import axios from "../config/axios"

const exerciseOptions = ["None", "Rarely", "Sometimes", "Regularly"];
const genderOptions = ["Male", "Female", "Other"];
const moodOptions = ["Happy", "Anxious", "Sad", "Neutral"];
const foodOptions = ["Vegetarian", "Non-Vegetarian", "Vegan", "Mixed"];

const MedicalRecordForm = () => {
  const userId = JSON.parse(localStorage.getItem('user')) || null;
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    bloodPressure: "",
    heartRate: "",
    chronicDiseases: "",
    surgeries: "",
    documents:""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const preparedData = {
       userId:userId._id,
      ...formData,
      chronicDiseases: formData.chronicDiseases.split(",").map((i) => i.trim()),
      surgeries: formData.surgeries.split(",").map((i) => i.trim()),
    };

    try {
  console.log(userId._id);
      await axios.post("/medical/medical-info/add",preparedData); 
      alert("Medical record submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Submission failed!");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-4 sm:p-8 flex justify-center items-start">
      <Card className="w-full max-w-4xl bg-muted/20 border-muted/30 shadow-xl rounded-2xl">
        <CardContent className="space-y-6 p-6 sm:p-10">
          <h2 className="text-2xl font-semibold mb-2">Medical Record Input</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Age, Gender, Height, Weight */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <Label>Age</Label>
                <Input name="age" type="number" value={formData.age} onChange={handleChange} />
              </div>
              <div>
                <Label>Gender</Label>
                <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 rounded-md bg-background border">
                  <option value="">Select</option>
                  {genderOptions.map((g) => (
                    <option key={g}>{g}</option>
                  ))}
                </select>
              </div>
              <div>
                <Label>Height (cm)</Label>
                <Input name="height" type="number" value={formData.height} onChange={handleChange} />
              </div>
              <div>
                <Label>Weight (kg)</Label>
                <Input name="weight" type="number" value={formData.weight} onChange={handleChange} />
              </div>
            </div>

            {/* Vitals */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label>Blood Pressure</Label>
                <Input name="bloodPressure" placeholder="e.g. 120/80" value={formData.bloodPressure} onChange={handleChange} />
              </div>
              <div>
                <Label>Heart Rate</Label>
                <Input name="heartRate" type="number" value={formData.heartRate} onChange={handleChange} />
              </div>
            </div>

            {/* Health Background */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label>Chronic Diseases</Label>
                <Textarea name="chronicDiseases" value={formData.chronicDiseases} onChange={handleChange} placeholder="Comma-separated" />
              </div>
              <div>
                <Label>Surgeries</Label>
                <Textarea name="surgeries" value={formData.surgeries} onChange={handleChange} placeholder="Comma-separated" />
              </div>
              <div className="space-y-2">
              <Label>Medical Documents</Label>
              <div className="flex items-center gap-4">
                <Input
                  type="file"
                  name="documents"
                  onChange={(e) => {
                    const files = Array.from(e.target.files);
                    setFormData(prev => ({
                      ...prev,
                      documents: [...prev.documents, ...files]
                    }));
                  }}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium
                    file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100
                    border-2 border-gray-300 dark:border-gray-600"
                  multiple
                />
              </div>
              {formData?.documents && formData?.documents.length > 0 && (
                <div className="mt-2 space-y-1">
                  {formData.documents.map((file, index) => (
                    <div key={index} className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span>{file.name}</span>
                      <button
                        type="button"
                        onClick={() => {
                          setFormData(prev => ({
                            ...prev,
                            documents: prev.documents.filter((_, i) => i !== index)
                          }));
                        }}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
          </div>
          </div>
            {/* Submit */}
            <Button type="submit" className="w-full mt-4">
              Submit Record
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
export default MedicalRecordForm;
