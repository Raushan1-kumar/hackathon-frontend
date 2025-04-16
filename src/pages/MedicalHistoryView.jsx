import React, { useEffect, useState } from 'react';
import axios from "../config/axios"
import Header from './Header';

const MedicalHistoryView = () => {
  const [history, setHistory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await axios.get('/medical/get-medical-history')
        console.log(res.data);
        if(res.data){
            setHistory(res.data.data[0]);
            console.log(history);
        }
        
      } catch (error) {
        console.error('Error fetching medical history:', error);
      } finally {
        setLoading(false);
      }
    };

     fetchHistory();
  },[]);

  if (loading) return <p className="text-center text-white mt-10">Loading...</p>;
  if (!history) return <p className="text-center text-red-400 mt-10">No medical history found.</p>;

  const Section = ({ title, data, fields }) => (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-3 text-green-400">{title}</h2>
      {data.length === 0 ? (
        <p className="text-gray-400 italic">None</p>
      ) : (
        <div className="space-y-4">
          {data.map((item, idx) => (
            <div key={idx} className="bg-zinc-800 p-4 rounded-lg shadow">
              {fields.map((field) => (
                <p key={field} className="text-sm text-white">
                  <span className="font-semibold text-gray-300">{field}: </span>
                  {item[field] || <span className="text-gray-500 italic">N/A</span>}
                </p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
    <Header/>
    <div className="bg-zinc-900 mt-16 min-h-screen text-white p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">Medical History Overview</h1>

      <Section
        title="Allergies"
        data={history.allergies}
        fields={['allergen', 'allergyType', 'reaction', 'severity']}
      />
      <Section
        title="Medications"
        data={history.medications}
        fields={['name', 'dosage', 'frequency', 'purpose', 'prescribedBy']}
        />
      <Section
        title="Chronic Conditions"
        data={history.chronicConditions}
        fields={['conditionName', 'diagnosisDate', 'treatment', 'status']}
        />
      <Section
        title="Surgeries"
        data={history.surgeries}
        fields={['name', 'date', 'outcome', 'hospital', 'doctor']}
        />
      <Section
        title="Vaccinations"
        data={history.vaccinations}
        fields={['vaccineName', 'doseDate', 'boosterDate', 'notes']}
        />
    </div>
        </>
  );
};

export default MedicalHistoryView;
