
import React from 'react';
import ExamCard from './ExamCard';

interface ExamListProps {
  exams: Array<{
    id: string;
    title: string;
    subject: string;
    yearLevel: string;
    type: string;
    description: string;
    questions?: Array<any>;
    duration: number;
    isFree: boolean;
  }>;
  isSubscribed: boolean;
  onStartExam: (exam: any) => void;
}

const ExamList: React.FC<ExamListProps> = ({ exams, isSubscribed, onStartExam }) => {
  if (exams.length === 0) {
    return (
      <div className="col-span-3 text-center py-12">
        <p className="text-gray-500">No exams found with the current filters. Please try different filter settings.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {exams.map((exam) => (
        <ExamCard 
          key={exam.id}
          exam={exam}
          isSubscribed={isSubscribed}
          onStartExam={onStartExam}
        />
      ))}
    </div>
  );
};

export default ExamList;
