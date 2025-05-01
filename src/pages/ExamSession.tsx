
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

// Mock exam data - this would come from an API in a real app
const getMockExam = (examId: string) => {
  // This function would fetch the correct exam data based on the ID
  return {
    id: examId,
    title: 'NAPLAN Practice Exam 1',
    subject: 'Maths',
    yearLevel: '3',
    type: 'NAPLAN',
    duration: 30, // in minutes
    questions: [
      {
        id: 'q1',
        text: 'What is 5 + 7?',
        type: 'multiple-choice',
        options: [
          { id: 'a', text: '10' },
          { id: 'b', text: '11' },
          { id: 'c', text: '12' },
          { id: 'd', text: '13' }
        ],
        correctAnswer: 'c',
        explanation: '5 + 7 = 12',
        topic: 'Addition'
      },
      {
        id: 'q2',
        text: 'What is 15 - 6?',
        type: 'multiple-choice',
        options: [
          { id: 'a', text: '7' },
          { id: 'b', text: '8' },
          { id: 'c', text: '9' },
          { id: 'd', text: '10' }
        ],
        correctAnswer: 'c',
        explanation: '15 - 6 = 9',
        topic: 'Subtraction'
      },
      {
        id: 'q3',
        text: 'Is 15 an odd number?',
        type: 'true-false',
        correctAnswer: true,
        explanation: '15 is odd because it cannot be evenly divided by 2',
        topic: 'Number Properties'
      },
      {
        id: 'q4',
        text: 'What is 4 × 3?',
        type: 'multiple-choice',
        options: [
          { id: 'a', text: '7' },
          { id: 'b', text: '10' },
          { id: 'c', text: '12' },
          { id: 'd', text: '15' }
        ],
        correctAnswer: 'c',
        explanation: '4 × 3 = 12',
        topic: 'Multiplication'
      },
      {
        id: 'q5',
        text: 'What is the next number in the sequence: 2, 4, 6, 8, ...?',
        type: 'short-answer',
        correctAnswer: '10',
        explanation: 'The sequence is increasing by 2 each time, so the next number is 8 + 2 = 10',
        topic: 'Patterns'
      }
    ]
  };
};

interface Answer {
  [key: string]: string | boolean;
}

interface FlaggedQuestion {
  [key: string]: boolean;
}

const ExamSession = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const [exam, setExam] = useState<any>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<FlaggedQuestion>({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [showStartDialog, setShowStartDialog] = useState(true);
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);
  const [showTimeWarning, setShowTimeWarning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const warningShownRef = useRef(false);
  const finalWarningShownRef = useRef(false);
  const tabSwitchCountRef = useRef(0);

  // Load exam data
  useEffect(() => {
    if (examId) {
      const examData = getMockExam(examId);
      setExam(examData);
      setTimeLeft(examData.duration * 60); // Convert minutes to seconds
    }
  }, [examId]);

  // Handle timer
  useEffect(() => {
    if (!showStartDialog && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          const newTime = prev - 1;
          
          // Show 2 minute warning
          if (newTime === 120 && !warningShownRef.current) {
            setShowTimeWarning(true);
            warningShownRef.current = true;
          }
          
          // Show 1 minute warning (blinking)
          if (newTime === 60 && !finalWarningShownRef.current) {
            toast.warning("1 minute remaining!", { duration: 5000 });
            finalWarningShownRef.current = true;
          }
          
          // Time's up
          if (newTime <= 0) {
            clearInterval(timerRef.current!);
            handleTimeUp();
            return 0;
          }
          
          return newTime;
        });
      }, 1000);
      
      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }
  }, [showStartDialog]);
  
  // Tab visibility change detection
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden' && !showStartDialog && timeLeft > 0) {
        tabSwitchCountRef.current += 1;
        
        if (tabSwitchCountRef.current === 1) {
          toast.warning("Please stay on this tab. Switching tabs may result in automatic exam submission.", {
            duration: 5000,
          });
        }
        
        if (tabSwitchCountRef.current >= 3) {
          toast.error("Too many tab switches detected. Your exam will be submitted.", {
            duration: 5000,
          });
          setTimeout(() => handleSubmit(), 2000);
        }
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [showStartDialog, timeLeft]);

  const handleTimeUp = () => {
    toast.error("Time's up! Your exam is being submitted.", {
      duration: 5000,
    });
    setTimeout(() => handleSubmit(), 2000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartExam = () => {
    setShowStartDialog(false);
  };

  const handleAnswer = (questionId: string, answer: string | boolean) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleFlag = (questionId: string) => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < exam.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmitClick = () => {
    // Check if there are unanswered or flagged questions
    const unansweredExists = exam.questions.some(
      (q: any) => !answers[q.id]
    );
    
    const flaggedExists = Object.values(flaggedQuestions).some(Boolean);
    
    if (unansweredExists || flaggedExists) {
      setShowSubmitDialog(true);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    // Stop timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    // Prepare results data
    const results = {
      examId,
      answers,
      timeSpent: exam.duration * 60 - timeLeft,
      submittedAt: new Date().toISOString(),
    };
    
    // In a real app, you would send this to the server
    console.log('Exam submitted:', results);
    
    // Navigate to results page
    navigate(`/results/${examId}`, { state: { results } });
  };

  const goToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  if (!exam) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin h-10 w-10 border-4 border-wl-blue border-t-transparent rounded-full inline-block mb-4"></div>
          <p className="text-gray-600">Loading exam...</p>
        </div>
      </div>
    );
  }

  const currentQuestion = exam.questions[currentQuestionIndex];
  const progressPercentage = (Object.keys(answers).length / exam.questions.length) * 100;
  const timeWarningActive = timeLeft <= 120;
  const criticalTimeWarning = timeLeft <= 60;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Start Dialog */}
      <Dialog open={showStartDialog} onOpenChange={setShowStartDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Ready to Begin Your Exam</DialogTitle>
            <DialogDescription>
              You're about to start {exam.title} for Year {exam.yearLevel} {exam.subject}.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div>
              <h3 className="font-medium">Exam Instructions:</h3>
              <ul className="list-disc pl-5 text-sm space-y-2 mt-2">
                <li>You have <span className="font-semibold">{exam.duration} minutes</span> to complete this exam.</li>
                <li>This exam contains <span className="font-semibold">{exam.questions.length} questions</span>.</li>
                <li>You can flag questions to review later.</li>
                <li>Use the navigation panel to move between questions.</li>
              </ul>
            </div>
            
            <div className="bg-amber-50 border border-amber-200 rounded-md p-3">
              <h3 className="font-medium text-amber-800">Important:</h3>
              <p className="text-sm text-amber-700 mt-1">
                Please do not switch tabs or use external help. Your exam will auto-submit if tab focus is lost repeatedly.
              </p>
            </div>
          </div>
          
          <DialogFooter>
            <Button type="button" onClick={handleStartExam} size="lg">
              Start Exam
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Submit Confirmation Dialog */}
      <Dialog open={showSubmitDialog} onOpenChange={setShowSubmitDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Are you sure you want to submit?</DialogTitle>
            <DialogDescription>
              You have unanswered or flagged questions in your exam.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            {exam.questions.some((q: any) => !answers[q.id]) && (
              <div>
                <h3 className="font-medium text-red-600">Unanswered Questions:</h3>
                <ul className="list-decimal pl-5 text-sm space-y-1 mt-2">
                  {exam.questions.map((q: any, i: number) => (
                    !answers[q.id] && (
                      <li key={q.id} className="text-gray-600">
                        Question {i + 1}
                        <Button 
                          variant="link" 
                          size="sm"
                          className="ml-2 p-0 h-auto text-xs text-blue-600"
                          onClick={() => {
                            setShowSubmitDialog(false);
                            goToQuestion(i);
                          }}
                        >
                          Go to question
                        </Button>
                      </li>
                    )
                  ))}
                </ul>
              </div>
            )}
            
            {Object.keys(flaggedQuestions).length > 0 && (
              <div>
                <h3 className="font-medium text-amber-600">Flagged Questions:</h3>
                <ul className="list-decimal pl-5 text-sm space-y-1 mt-2">
                  {Object.keys(flaggedQuestions).map((qId) => {
                    if (!flaggedQuestions[qId]) return null;
                    const index = exam.questions.findIndex((q: any) => q.id === qId);
                    return (
                      <li key={qId} className="text-gray-600">
                        Question {index + 1}
                        <Button 
                          variant="link" 
                          size="sm"
                          className="ml-2 p-0 h-auto text-xs text-blue-600"
                          onClick={() => {
                            setShowSubmitDialog(false);
                            goToQuestion(index);
                          }}
                        >
                          Go to question
                        </Button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
          
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowSubmitDialog(false)}
            >
              Review Questions
            </Button>
            <Button
              variant="destructive"
              onClick={handleSubmit}
            >
              Submit Anyway
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Time Warning Dialog */}
      <Dialog open={showTimeWarning} onOpenChange={setShowTimeWarning}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-amber-600">
              2 Minutes Left!
            </DialogTitle>
            <DialogDescription>
              You have only 2 minutes remaining to complete your exam.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-2">
            <p className="text-sm text-gray-600">
              Please review your answers and submit soon. Your exam will be automatically submitted when time runs out.
            </p>
          </div>
          
          <DialogFooter>
            <Button
              onClick={() => setShowTimeWarning(false)}
            >
              Continue Exam
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Main Exam Interface */}
      <div className="container py-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">{exam.title}</h1>
            <p className="text-gray-600">
              {exam.subject} • Year {exam.yearLevel} • {exam.type}
            </p>
          </div>
          
          <div className={`flex items-center mt-4 md:mt-0 px-4 py-2 rounded-full ${
            criticalTimeWarning ? 'bg-red-100 text-red-800 animate-pulse' : 
            timeWarningActive ? 'bg-amber-100 text-amber-800' : 
            'bg-blue-50 text-blue-800'
          }`}>
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">{formatTime(timeLeft)}</span>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Question Area */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="mb-6 flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500">
                  Question {currentQuestionIndex + 1} of {exam.questions.length}
                </span>
                
                <div className="flex items-center gap-2">
                  <Checkbox 
                    id="flagQuestion"
                    checked={flaggedQuestions[currentQuestion.id]}
                    onCheckedChange={() => handleFlag(currentQuestion.id)}
                  />
                  <Label htmlFor="flagQuestion" className="text-sm cursor-pointer">
                    Flag for review
                  </Label>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-lg font-medium mb-4">{currentQuestion.text}</h2>
                
                {currentQuestion.type === 'multiple-choice' && (
                  <RadioGroup 
                    value={answers[currentQuestion.id] as string || ''} 
                    onValueChange={(value) => handleAnswer(currentQuestion.id, value)}
                    className="space-y-3"
                  >
                    {currentQuestion.options.map((option: any) => (
                      <div key={option.id} className="flex items-center space-x-2">
                        <RadioGroupItem value={option.id} id={`option-${option.id}`} />
                        <Label htmlFor={`option-${option.id}`} className="text-base">
                          {option.text}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                )}
                
                {currentQuestion.type === 'true-false' && (
                  <RadioGroup 
                    value={answers[currentQuestion.id] === true ? 'true' : answers[currentQuestion.id] === false ? 'false' : ''} 
                    onValueChange={(value) => handleAnswer(currentQuestion.id, value === 'true')}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="true" id="true" />
                      <Label htmlFor="true" className="text-base">True</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="false" id="false" />
                      <Label htmlFor="false" className="text-base">False</Label>
                    </div>
                  </RadioGroup>
                )}
                
                {currentQuestion.type === 'short-answer' && (
                  <div className="space-y-2">
                    <Input
                      type="text"
                      value={answers[currentQuestion.id] as string || ''}
                      onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
                      placeholder="Type your answer here"
                      className="max-w-md"
                    />
                  </div>
                )}
              </div>
              
              <div className="flex justify-between">
                <Button 
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                >
                  Previous
                </Button>
                
                {currentQuestionIndex === exam.questions.length - 1 ? (
                  <Button onClick={handleSubmitClick}>
                    Submit Exam
                  </Button>
                ) : (
                  <Button onClick={handleNext}>
                    Next
                  </Button>
                )}
              </div>
            </div>
          </div>
          
          {/* Sidebar - Question Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="mb-4">
                <h3 className="font-medium text-gray-700 mb-2">Progress</h3>
                <Progress value={progressPercentage} className="h-2" />
                <p className="text-sm text-gray-600 mt-2">
                  {Object.keys(answers).length} of {exam.questions.length} questions answered
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium text-gray-700 mb-2">Questions</h3>
                <div className="grid grid-cols-5 gap-2">
                  {exam.questions.map((_: any, index: number) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className={`p-0 w-10 h-10 flex items-center justify-center ${
                        index === currentQuestionIndex ? 'bg-primary text-primary-foreground' :
                        answers[exam.questions[index].id] ? 'bg-green-50 border-green-200 text-green-800' :
                        flaggedQuestions[exam.questions[index].id] ? 'bg-amber-50 border-amber-200 text-amber-800' :
                        ''
                      }`}
                      onClick={() => goToQuestion(index)}
                    >
                      {index + 1}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <Button 
                  onClick={handleSubmitClick}
                  className="w-full"
                >
                  Submit Exam
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamSession;
