import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const AIResultPage = ({ aiData }) => {
  const containerRef = useRef(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (aiData) {
      gsap.to(containerRef.current, {
        height: "100vh",
        duration: 1,
        ease: "power3.out",
        onComplete: () => setShowContent(true),
      });
    }
  }, [aiData]);

  const renderSection = (title, items) => (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg mb-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">{title}</h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-1">
        {items?.map((item, index) => (
          <li key={index} className="leading-relaxed">{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
    <div
      ref={containerRef}
      className="overflow-hidden mt-16 w-full bg-gray-100 dark:bg-gray-800 fixed bottom-0 left-0 z-50"
      style={{ height: "0px" }}
      >
      {showContent && aiData && (
        <div className="p-6 max-w-3xl mx-auto mt-10 overflow-y-auto h-full">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            Your Personalized Health Plan
          </h1>
          {renderSection("Exercise Recommendations", aiData.exercise)}
          {renderSection("Food Suggestions", aiData.food)}
          {renderSection("Good Habits", aiData.goodHabits)}
          {renderSection("Extras", aiData.extras)}
        </div>
      )}
    </div>
      </>
  );
};

export default AIResultPage;
