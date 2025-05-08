
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Lock } from 'lucide-react';

interface ExamCardProps {
  exam: {
    id: string;
    title: string;
    subject: string;
    yearLevel: string;
    type: string;
    description: string;
    questions?: Array<any>;
    duration: number;
    isFree: boolean;
  };
  isSubscribed: boolean;
  onStartExam: (exam: any) => void;
}

const ExamCard: React.FC<ExamCardProps> = ({ exam, isSubscribed, onStartExam }) => {
  // Helper function to determine button text and icon based on exam status
  const getButtonContent = () => {
    if (exam.isFree === true) {
      return (
        <>
          <BookOpen size={16} className="mr-2" />
          Start Free Exam
        </>
      );
    } else if (isSubscribed) {
      return (
        <>
          <BookOpen size={16} className="mr-2" />
          Start Exam
        </>
      );
    } else {
      return (
        <>
          <Lock size={16} className="mr-2" />
          Premium Exam
        </>
      );
    }
  };

  return (
    <Card 
      className="overflow-hidden hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
    >
      <CardHeader className={`${exam.type === 'NAPLAN' ? 'bg-blue-50' : exam.type === 'ICAS All Stars' ? 'bg-amber-50' : 'bg-purple-50'} py-4`}>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg">{exam.title}</CardTitle>
            <CardDescription>
              {exam.subject} • Year {exam.yearLevel}
            </CardDescription>
          </div>
          <div className={`rounded-full text-xs font-medium px-2 py-1 ${
            exam.type === 'NAPLAN' ? 'bg-blue-100 text-blue-800' : 
            exam.type === 'ICAS All Stars' ? 'bg-amber-100 text-amber-800' : 
            'bg-purple-100 text-purple-800'
          }`}>
            {exam.type}
          </div>
        </div>
      </CardHeader>
      <CardContent className="py-4">
        <p className="text-sm text-gray-600 mb-4">{exam.description}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{exam.questions?.length || 0} questions</span>
          <span>{exam.duration} minutes</span>
        </div>
      </CardContent>
      <CardFooter className="pt-0 pb-4 px-6">
        <Button 
          className="w-full"
          variant={exam.isFree === true ? "default" : (isSubscribed ? "default" : "outline")}
          onClick={() => onStartExam(exam)}
        >
          {getButtonContent()}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ExamCard;
