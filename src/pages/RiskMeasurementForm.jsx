import React, { useState } from 'react';
import axios from 'axios';

export default function RiskManagementForm() {
  const [form, setForm] = useState({
    Age: '',
    Sex: '',
    ChestPainType: '',
    RestingBP: '',
    Cholesterol: '',
    FastingBS: '',
    MaxHR: '',
    ExerciseAngina: '',
    FamilyHistory: '',
    ECGResults: '',
    STDepression: '',
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const requiredFields = [
      'Age', 'Sex', 'ChestPainType', 'RestingBP', 'Cholesterol', 'FastingBS',
      'MaxHR', 'ExerciseAngina', 'FamilyHistory', 'ECGResults', 'STDepression'
    ];

    for (let field of requiredFields) {
      if (!form[field]) {
        setError(`⚠ Please fill in the ${field} field.`);
        setLoading(false);
        return;
      }
    }

    const payload = {
      Age: parseInt(form.Age),
      Sex: form.Sex,
      ChestPainType: form.ChestPainType,
      RestingBP: parseInt(form.RestingBP),
      Cholesterol: parseInt(form.Cholesterol),
      FastingBS: parseInt(form.FastingBS),
      MaxHR: parseInt(form.MaxHR),
      ExerciseAngina: form.ExerciseAngina,
      FamilyHistory: form.FamilyHistory,
      ECGResults: form.ECGResults,
      STDepression: parseFloat(form.STDepression)
    };

    try {
      const res = await axios.post('http://192.168.126.208:5000/predict-risk', payload);
      if (res.data && res.data.risk_level) {
        setResult(res.data.risk_level);
      } else {
        setError("⚠ Unexpected response from the server.");
      }
      setLoading(false);
    } catch (err) {
      setError("⚠ Error making request. Check your backend.");
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-gray-900 text-white min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center">🩺 Health Risk Prediction</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Dark inputs with white text */}
        <input
          name="Age"
          placeholder="Age"
          value={form.Age}
          onChange={handleChange}
          type="number"
          className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
          required
        />

        <select
          name="Sex"
          value={form.Sex}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
          required
        >
          <option value="">Select Sex</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>

        <select
          name="ChestPainType"
          value={form.ChestPainType}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
          required
        >
          <option value="">Select Chest Pain Type</option>
          <option value="TA">Typical Angina (TA)</option>
          <option value="ATA">Atypical Angina (ATA)</option>
          <option value="NAP">Non-Anginal Pain (NAP)</option>
          <option value="ASY">Asymptomatic (ASY)</option>
        </select>

        <input
          name="RestingBP"
          placeholder="Resting BP"
          value={form.RestingBP}
          onChange={handleChange}
          type="number"
          className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
          required
        />

        <input
          name="Cholesterol"
          placeholder="Cholesterol"
          value={form.Cholesterol}
          onChange={handleChange}
          type="number"
          className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
          required
        />

        <select
          name="FastingBS"
          value={form.FastingBS}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
          required
        >
          <option value="">Fasting Blood Sugar &gt; 120?</option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>

        <input
          name="MaxHR"
          placeholder="Max Heart Rate"
          value={form.MaxHR}
          onChange={handleChange}
          type="number"
          className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
          required
        />

        <select
          name="ExerciseAngina"
          value={form.ExerciseAngina}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
          required
        >
          <option value="">Exercise Angina</option>
          <option value="Y">Yes</option>
          <option value="N">No</option>
        </select>

        <select
          name="FamilyHistory"
          value={form.FamilyHistory}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
          required
        >
          <option value="">Family History of Heart Disease</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <select
          name="ECGResults"
          value={form.ECGResults}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
          required
        >
          <option value="">ECG Results</option>
          <option value="Normal">Normal</option>
          <option value="Abnormal">Abnormal</option>
          <option value="Hyper">Hyper</option>
        </select>

        <input
          name="STDepression"
          placeholder="ST Depression"
          value={form.STDepression}
          onChange={handleChange}
          type="number"
          step="any"
          className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
          required
        />

        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">
          Predict
        </button>
      </form>

      {loading && <div className="mt-4 text-lg text-yellow-300">⏳ Loading...</div>}
      {error && <div className="mt-4 text-lg text-red-400">{error}</div>}
      {result && (
        <div className="mt-4 text-lg text-green-400">
          🧠 Predicted Risk: <strong>{result}</strong>
        </div>
      )}
    </div>
  );
}
