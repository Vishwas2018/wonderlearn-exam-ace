
import React from 'react';

interface StudyTipsProps {
  subject: string;
  tips: string[];
}

const StudyTips: React.FC<StudyTipsProps> = ({ subject, tips }) => {
  if (!subject || !tips || tips.length === 0) return null;
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6 animate-fade-in border-l-4 border-amber-400">
      <h2 className="text-lg font-bold mb-4 flex items-center text-amber-700">
        <svg className="w-5 h-5 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        Study Tips: {subject}
      </h2>
      <ul className="space-y-3 text-sm">
        {tips.map((tip, index) => (
          <li key={index} className="flex items-start p-2 hover:bg-amber-50 rounded-md transition-colors">
            <span className="text-amber-500 mr-2 font-bold">•</span>
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudyTips;
