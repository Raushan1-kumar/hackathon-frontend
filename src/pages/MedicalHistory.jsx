import axios from "../config/axios"
import React, { useState } from 'react';
import DocumentUploadPage from './DocumentUploadPage';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const MedicalHistoryForm = () => {
  const [formData, setFormData] = useState({
    allergies: [{ allergen: '', allergyType: 'Other', reaction: '', severity: 'Mild' }],
    medications: [{ name: '', dosage: '', frequency: '', purpose: '', prescribedBy: '' }],
    chronicConditions: [{ conditionName: '', diagnosisDate: '', treatment: '', status: 'Active' }],
    surgeries: [{ name: '', date: '', outcome: '', hospital: '', doctor: '' }],
    vaccinations: [{ vaccineName: '', doseDate: '', boosterDate: '', notes: '' }],
  });
  const [documents, setdocuments] = useState([])

  const handleChange = (section, index, field, value) => {
    const updatedSection = [...formData[section]];
    updatedSection[index][field] = value;
    setFormData({ ...formData, [section]: updatedSection });
  };

  const handleSubmit =async (e) => {
    console.log(formData);
    const user = JSON.parse(localStorage.getItem('user'));
    const userId=user._id;
    console.log(userId);
    e.preventDefault();
    console.log('Submitted Data:', {formData,userId});
    await axios.post('/medical/medical-history',formData).then((res)=>{
        console.log(res.data);
    }).catch(err=>{
        console.log(err);
    })
  };

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-900 text-white p-6 rounded-xl shadow-md max-w-5xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold text-center mb-6">Medical History Input</h2>

      
      <div>
        <h3 className="text-xl font-semibold mb-2">Allergies</h3>
        {formData.allergies.map((a, idx) => (
          <div key={idx} className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <input type="text" placeholder="Allergen" value={a.allergen}
              onChange={(e) => handleChange('allergies', idx, 'allergen', e.target.value)}
              className="bg-zinc-800 text-white p-2 rounded" />
            <select value={a.allergyType}
              onChange={(e) => handleChange('allergies', idx, 'allergyType', e.target.value)}
              className="bg-zinc-800 text-white p-2 rounded">
              <option>Food</option><option>Drug</option><option>Environmental</option><option>Other</option>
            </select>
            <input type="text" placeholder="Reaction" value={a.reaction}
              onChange={(e) => handleChange('allergies', idx, 'reaction', e.target.value)}
              className="bg-zinc-800 text-white p-2 rounded" />
            <select value={a.severity}
              onChange={(e) => handleChange('allergies', idx, 'severity', e.target.value)}
              className="bg-zinc-800 text-white p-2 rounded">
              <option>Mild</option><option>Moderate</option><option>Severe</option>
            </select>
          </div>
        ))}
      </div>

      {/* Medications */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Medications</h3>
        {formData.medications.map((m, idx) => (
          <div key={idx} className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <input type="text" placeholder="Name" value={m.name}
              onChange={(e) => handleChange('medications', idx, 'name', e.target.value)}
              className="bg-zinc-800 text-white p-2 rounded" />
            <input type="text" placeholder="Dosage" value={m.dosage}
              onChange={(e) => handleChange('medications', idx, 'dosage', e.target.value)}
              className="bg-zinc-800 text-white p-2 rounded" />
            <input type="text" placeholder="Frequency" value={m.frequency}
              onChange={(e) => handleChange('medications', idx, 'frequency', e.target.value)}
              className="bg-zinc-800 text-white p-2 rounded" />
            <input type="text" placeholder="Purpose" value={m.purpose}
              onChange={(e) => handleChange('medications', idx, 'purpose', e.target.value)}
              className="bg-zinc-800 text-white p-2 rounded" />
            <input type="text" placeholder="Prescribed By" value={m.prescribedBy}
              onChange={(e) => handleChange('medications', idx, 'prescribedBy', e.target.value)}
              className="bg-zinc-800 text-white p-2 rounded" />
          </div>
        ))}
      </div>

      {/* Chronic Conditions */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Chronic Conditions</h3>
        {formData.chronicConditions.map((c, idx) => (
          <div key={idx} className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <input type="text" placeholder="Condition Name" value={c.conditionName}
              onChange={(e) => handleChange('chronicConditions', idx, 'conditionName', e.target.value)}
              className="bg-zinc-800 text-white p-2 rounded" />
            <input type="date" value={c.diagnosisDate}
              onChange={(e) => handleChange('chronicConditions', idx, 'diagnosisDate', e.target.value)}
              className="bg-zinc-800 text-white p-2 rounded" />
            <input type="text" placeholder="Treatment" value={c.treatment}
              onChange={(e) => handleChange('chronicConditions', idx, 'treatment', e.target.value)}
              className="bg-zinc-800 text-white p-2 rounded" />
            <select value={c.status}
              onChange={(e) => handleChange('chronicConditions', idx, 'status', e.target.value)}
              className="bg-zinc-800 text-white p-2 rounded">
              <option>Active</option><option>In Remission</option><option>Resolved</option>
            </select>
          </div>
        ))}
      </div>

      {/* Surgeries */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Surgeries</h3>
        {formData.surgeries.map((s, idx) => (
          <div key={idx} className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <input type="text" placeholder="Surgery Name" value={s.name}
              onChange={(e) => handleChange('surgeries', idx, 'name', e.target.value)}
              className="bg-zinc-800 text-white p-2 rounded" />
            <input type="date" value={s.date}
              onChange={(e) => handleChange('surgeries', idx, 'date', e.target.value)}
              className="bg-zinc-800 text-white p-2 rounded" />
            <input type="text" placeholder="Outcome" value={s.outcome}
              onChange={(e) => handleChange('surgeries', idx, 'outcome', e.target.value)}
              className="bg-zinc-800 text-white p-2 rounded" />
            <input type="text" placeholder="Hospital" value={s.hospital}
              onChange={(e) => handleChange('surgeries', idx, 'hospital', e.target.value)}
              className="bg-zinc-800 text-white p-2 rounded" />
            <input type="text" placeholder="Doctor" value={s.doctor}
              onChange={(e) => handleChange('surgeries', idx, 'doctor', e.target.value)}
              className="bg-zinc-800 text-white p-2 rounded" />
          </div>
        ))}
      </div>

      {/* Vaccinations */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Vaccinations</h3>
        {formData.vaccinations.map((v, idx) => (
          <div key={idx} className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <input type="text" placeholder="Vaccine Name" value={v.vaccineName}
              onChange={(e) => handleChange('vaccinations', idx, 'vaccineName', e.target.value)}
              className="bg-zinc-800 text-white p-2 rounded" />
            <input type="date" value={v.doseDate}
              onChange={(e) => handleChange('vaccinations', idx, 'doseDate', e.target.value)}
              className="bg-zinc-800 text-white p-2 rounded" />
            <input type="date" value={v.boosterDate}
              onChange={(e) => handleChange('vaccinations', idx, 'boosterDate', e.target.value)}
              className="bg-zinc-800 text-white p-2 rounded" />
            <input type="text" placeholder="Notes" value={v.notes}
              onChange={(e) => handleChange('vaccinations', idx, 'notes', e.target.value)}
              className="bg-zinc-800 text-white p-2 rounded" />
          </div>
          
        ))}
      </div>

      {/* document upload */}
              <div className="space-y-2">
              <Label>Medical Documents</Label>
              <div className="flex items-center gap-4">
                <Input
                  type="file"
                  name="documents"
                  onChange={(e) => {
                    const files = Array.from(e.target.files);
                    setdocuments(prev => ({
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
          </div>

      <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded mt-6">
        Save Medical History
      </button>
    </form>
  );
};

export default MedicalHistoryForm;
