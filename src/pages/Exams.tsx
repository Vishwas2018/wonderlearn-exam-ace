
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { ArrowRight, BookOpen, Lock } from 'lucide-react';

// Mock exam data
const mockExams = [
  {
    id: 'naplan-y3-maths-1',
    title: 'NAPLAN Practice Exam 1',
    subject: 'Maths',
    yearLevel: '3',
    type: 'NAPLAN',
    description: 'Practice with authentic NAPLAN-style mathematics questions for Year 3 students.',
    questions: 30,
    duration: 45,
    isFree: true,
  },
  {
    id: 'naplan-y3-science-1',
    title: 'NAPLAN Practice Exam 1',
    subject: 'Science',
    yearLevel: '3',
    type: 'NAPLAN',
    description: 'Science knowledge and concepts assessment aligned with NAPLAN expectations.',
    questions: 25,
    duration: 40,
    isFree: false,
  },
  {
    id: 'naplan-y3-digital-1',
    title: 'NAPLAN Practice Exam 1',
    subject: 'Digital Technologies',
    yearLevel: '3',
    type: 'NAPLAN',
    description: 'Digital literacy and reasoning questions for Year 3 students.',
    questions: 20,
    duration: 35,
    isFree: false,
  },
  {
    id: 'icas-y3-maths-1',
    title: 'ICAS Practice Exam 1',
    subject: 'Maths',
    yearLevel: '3',
    type: 'ICAS',
    description: 'Comprehensive mathematics practice test matching ICAS structure and difficulty.',
    questions: 35,
    duration: 50,
    isFree: true,
  },
  {
    id: 'icas-y3-science-1',
    title: 'ICAS Practice Exam 1',
    subject: 'Science',
    yearLevel: '3',
    type: 'ICAS',
    description: 'Science reasoning and knowledge assessment in ICAS format.',
    questions: 30,
    duration: 45,
    isFree: false,
  },
  {
    id: 'naplan-y4-maths-1',
    title: 'NAPLAN Practice Exam 1',
    subject: 'Maths',
    yearLevel: '4',
    type: 'NAPLAN',
    description: 'Math practice questions for Year 4 students preparing for NAPLAN.',
    questions: 35,
    duration: 50,
    isFree: true,
  },
];

// Study tips by subject
const studyTips: Record<string, string[]> = {
  'Maths': [
    'Focus on understanding concepts rather than memorizing formulas',
    'Practice time management by setting a timer during mock tests',
    'Review basic arithmetic skills, which form the foundation of more complex problems',
    'Make a list of formulas you need to remember for quick reference',
  ],
  'Science': [
    'Connect scientific concepts to everyday examples to improve understanding',
    'Practice interpreting data from charts and graphs',
    'Review key vocabulary and scientific terminology',
    'Focus on understanding experimental procedures and scientific methods',
  ],
  'Digital Technologies': [
    'Understand basic computational thinking concepts',
    'Practice logical reasoning problems',
    'Review digital systems terminology',
    'Familiarize yourself with data representation concepts',
  ],
};

const Exams = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    examType: '',
    yearLevel: '',
    subject: '',
  });
  const [filteredExams, setFilteredExams] = useState(mockExams);
  const [isSubscribed, setIsSubscribed] = useState(false); // Mock subscription status

  // Filter exams based on selected filters
  useEffect(() => {
    let result = mockExams;
    
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

  const handleStartExam = (exam: typeof mockExams[0]) => {
    if (!exam.isFree && !isSubscribed) {
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
                
                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <Select
                      value={filters.examType}
                      onValueChange={(value) => setFilters({...filters, examType: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Exam Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-exam-types">All Exam Types</SelectItem>
                        <SelectItem value="NAPLAN">NAPLAN</SelectItem>
                        <SelectItem value="ICAS">ICAS</SelectItem>
                        <SelectItem value="ICAS All Stars">ICAS All Stars</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Select
                      value={filters.yearLevel}
                      onValueChange={(value) => setFilters({...filters, yearLevel: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Year Level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-year-levels">All Year Levels</SelectItem>
                        <SelectItem value="2">Year 2</SelectItem>
                        <SelectItem value="3">Year 3</SelectItem>
                        <SelectItem value="4">Year 4</SelectItem>
                        <SelectItem value="5">Year 5</SelectItem>
                        <SelectItem value="6">Year 6</SelectItem>
                        <SelectItem value="7">Year 7</SelectItem>
                        <SelectItem value="8">Year 8</SelectItem>
                        <SelectItem value="9">Year 9</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Select
                      value={filters.subject}
                      onValueChange={(value) => setFilters({...filters, subject: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-subjects">All Subjects</SelectItem>
                        <SelectItem value="Maths">Maths</SelectItem>
                        <SelectItem value="Science">Science</SelectItem>
                        <SelectItem value="Digital Technologies">Digital Technologies</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                {/* Exam List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredExams.length > 0 ? (
                    filteredExams.map((exam) => (
                      <Card key={exam.id} className="overflow-hidden hover:shadow-md transition-shadow hover-scale">
                        <CardHeader className={`${exam.type === 'NAPLAN' ? 'bg-blue-50' : 'bg-purple-50'} py-4`}>
                          <div className="flex justify-between items-center">
                            <div>
                              <CardTitle className="text-lg">{exam.title}</CardTitle>
                              <CardDescription>
                                {exam.subject} • Year {exam.yearLevel}
                              </CardDescription>
                            </div>
                            <div className={`rounded-full text-xs font-medium px-2 py-1 ${
                              exam.type === 'NAPLAN' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                            }`}>
                              {exam.type}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="py-4">
                          <p className="text-sm text-gray-600 mb-4">{exam.description}</p>
                          <div className="flex justify-between text-sm text-gray-500">
                            <span>{exam.questions} questions</span>
                            <span>{exam.duration} minutes</span>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-0 pb-4 px-6">
                          <Button 
                            className="w-full"
                            variant={exam.isFree || isSubscribed ? "default" : "outline"}
                            onClick={() => handleStartExam(exam)}
                          >
                            {exam.isFree ? (
                              <>
                                <BookOpen size={16} className="mr-2" />
                                Start Free Exam
                              </>
                            ) : isSubscribed ? (
                              <>
                                <BookOpen size={16} className="mr-2" />
                                Start Exam
                              </>
                            ) : (
                              <>
                                <Lock size={16} className="mr-2" />
                                Premium Exam
                              </>
                            )}
                          </Button>
                        </CardFooter>
                      </Card>
                    ))
                  ) : (
                    <div className="col-span-3 text-center py-12">
                      <p className="text-gray-500">No exams found with the current filters. Please try different filter settings.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="md:w-1/4">
              {/* Study Tips */}
              {filters.subject && studyTips[filters.subject] ? (
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6 animate-fade-in">
                  <h2 className="text-lg font-bold mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Study Tips: {filters.subject}
                  </h2>
                  <ul className="space-y-2 text-sm">
                    {studyTips[filters.subject].map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-wl-green mr-2">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              
              {/* Subscription Card */}
              {!isSubscribed && (
                <div className="bg-gradient-to-br from-wl-blue to-wl-purple p-6 rounded-lg shadow-sm text-white">
                  <h2 className="text-lg font-bold mb-2">Unlock All Exams</h2>
                  <p className="text-sm mb-4 text-white/90">
                    Subscribe today to access our complete library of practice exams for all subjects and year levels.
                  </p>
                  <Button 
                    variant="secondary"
                    className="w-full bg-white hover:bg-gray-100 text-wl-blue"
                    onClick={handleSubscribe}
                  >
                    View Pricing <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
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
