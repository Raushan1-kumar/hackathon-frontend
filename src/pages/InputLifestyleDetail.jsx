import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import axios from "../config/axios";
import AIResultPage from "./AIResultPage";
import { useNavigate } from "react-router-dom";

const InputLifestyleForm = () => {
  const [loading, setLoading] = useState(false);
  const [isResponseGenerated, SetIsResponseGenerated] = useState(false);
  const [aiResponse, setAiResponse] = useState({})
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    goal: "",
    conditions: "",
    sleep: "",
    exercise: "",
    smoking: "",
    mood: "",
    foodHabits: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/ai/get-healthylife-detail", formData);
     
    //   if (res.data.success) {
    //     window.location.href = "/lifestyle-suggestions";
    //   }
    console.log(formData);
    console.log(res.data);
    SetIsResponseGenerated(true);
    setAiResponse(res.data.data);
    } catch (err) {
      console.error("Submission Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (

    <>
    <div className="min-h-screen bg-white dark:bg-gray-900 p-4 md:p-8 pb-20">
      <div className="max-w-3xl mx-auto text-gray-900 dark:text-white">
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate("/")}
            className="mr-4 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <IoMdArrowBack className="text-2xl" />
          </button>
          <h1 className="text-3xl md:text-4xl font-bold font-inter">
            Lifestyle & Wellness Form
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6"
          >
          {/* Age & Gender */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="label">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="input"
                required
                />
            </div>
            <div>
              <label className="label">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="input"
                required
                >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Height & Weight */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="label">Height (cm)</label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                className="input"
                required
                />
            </div>
            <div>
              <label className="label">Weight (kg)</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className="input"
                required
                />
            </div>
          </div>

          {/* Goal */}
          <div>
            <label className="label">Your Primary Health Goal</label>
            <input
              type="text"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              placeholder="e.g., Better sleep, quit smoking..."
              className="input"
              required
              />
          </div>

          {/* Conditions */}
          <div>
            <label className="label">Existing Health Conditions (if any)</label>
            <input
              type="text"
              name="conditions"
              value={formData.conditions}
              onChange={handleChange}
              placeholder="e.g., Diabetes, BP"
              className="input"
              />
          </div>

          {/* Sleep & Exercise */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="label">Avg Sleep (hours/day)</label>
              <input
                type="number"
                name="sleep"
                value={formData.sleep}
                onChange={handleChange}
                className="input"
                />
            </div>
            <div>
              <label className="label">Exercise Frequency</label>
              <select
                name="exercise"
                value={formData.exercise}
                onChange={handleChange}
                className="input"
                >
                <option value="">Select</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="rarely">Rarely</option>
                <option value="never">Never</option>
              </select>
            </div>
          </div>

          {/* Smoking & Mood */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="label">Smoking / Alcohol Use</label>
              <select
                name="smoking"
                value={formData.smoking}
                onChange={handleChange}
                className="input"
                >
                <option value="">Select</option>
                <option value="none">None</option>
                <option value="occasionally">Occasionally</option>
                <option value="regularly">Regularly</option>
              </select>
            </div>
            <div>
              <label className="label">Current Mood</label>
              <select
                name="mood"
                value={formData.mood}
                onChange={handleChange}
                className="input"
                >
                <option value="">Select</option>
                <option value="happy">Happy</option>
                <option value="neutral">Neutral</option>
                <option value="stressed">Stressed</option>
                <option value="sad">Sad</option>
              </select>
            </div>
          </div>

          {/* Food Habits */}
          <div>
            <label className="label">Food Habits</label>
            <select
              name="foodHabits"
              value={formData.foodHabits}
              onChange={handleChange}
              className="input"
              >
              <option value="">Select</option>
              <option value="healthy">Healthy</option>
              <option value="balanced">Balanced</option>
              <option value="junk-heavy">Junk-heavy</option>
              <option value="skipping meals">Skipping meals</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition duration-200 flex justify-center items-center space-x-2 disabled:opacity-50"
            >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Submitting...</span>
              </>
            ) : (
              <span>Submit</span>
            )}
          </button>
        </form>
      </div>
    </div>
    {isResponseGenerated && <AIResultPage aiData={aiResponse} />}
            </>
  );
};

export default InputLifestyleForm;
