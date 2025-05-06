
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { toast } from 'sonner';
import exams from '@/data/exams';
import studyTips from '@/data/studyTips';
import { useAuth } from '@/contexts/AuthContext';

// Import the components
import ExamFilters from '@/components/exams/ExamFilters';
import ExamList from '@/components/exams/ExamList';
import StudyTips from '@/components/exams/StudyTips';
import SubscriptionCard from '@/components/exams/SubscriptionCard';

const Exams = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [filters, setFilters] = useState({
    examType: '',
    yearLevel: '',
    subject: '',
  });
  const [filteredExams, setFilteredExams] = useState(exams);

  // Filter exams based on selected filters
  useEffect(() => {
    let result = exams;
    
    if (filters.examType) {
      result = result.filter(exam => exam.type === filters.examType);
    }
    
    if (filters.yearLevel) {
      result = result.filter(exam => exam.yearLevel === filters.yearLevel);
    }
    
    if (filters.subject) {
      result = result.filter(exam => exam.subject === filters.subject);
    }
    
    setFilteredExams(result);
  }, [filters]);

  const handleStartExam = (exam) => {
    if (!exam.isFree && (!isAuthenticated || !user?.isSubscribed)) {
      if (!isAuthenticated) {
        toast.error("Please log in to access premium exams.");
        setTimeout(() => navigate('/login'), 1500);
        return;
      }
      toast.error("This is a premium exam. Please subscribe to access all exams.");
      return;
    }
    
    // Navigate to exam with exam ID
    navigate(`/exam/${exam.id}`);
  };

  const handleSubscribe = () => {
    navigate('/pricing');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="md:w-3/4">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h1 className="text-2xl font-bold mb-6">Practice Exams</h1>
                
                {/* Filters Component */}
                <ExamFilters 
                  filters={filters} 
                  setFilters={setFilters} 
                />
                
                {/* Exam List Component */}
                <ExamList 
                  exams={filteredExams} 
                  isSubscribed={user?.isSubscribed || false} 
                  onStartExam={handleStartExam} 
                />
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="md:w-1/4">
              {/* Study Tips Component */}
              {filters.subject && studyTips[filters.subject] && (
                <StudyTips 
                  subject={filters.subject} 
                  tips={studyTips[filters.subject]} 
                />
              )}
              
              {/* Subscription Card Component */}
              {(!isAuthenticated || !user?.isSubscribed) && (
                <SubscriptionCard onSubscribe={handleSubscribe} />
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Exams;
