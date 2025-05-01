
import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { ArrowRight, BookOpen, CheckCircle, Clock, XCircle } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

// Mock exam data - would come from API in a real app
const getMockExam = (examId: string) => {
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

const ExamResults = () => {
  const { examId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [exam, setExam] = useState<any>(null);
  const [results, setResults] = useState<any>(null);
  const [scoreData, setScoreData] = useState({
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    percentage: 0,
  });
  const [topicPerformance, setTopicPerformance] = useState<Record<string, {correct: number, total: number, percentage: number}>>({});
  
  // In a real app, we'd fetch these from the server
  useEffect(() => {
    if (examId) {
      const examData = getMockExam(examId);
      setExam(examData);
      
      // Get results from state or mock them
      const userResults = location.state?.results || {
        examId,
        answers: {
          q1: 'c',
          q2: 'c',
          q3: true,
          q5: '10',
        },
        timeSpent: 750, // 12.5 minutes
        submittedAt: new Date().toISOString(),
      };
      setResults(userResults);
      
      // Calculate scores
      const correct = examData.questions.filter((q: any) => 
        userResults.answers[q.id] === q.correctAnswer
      ).length;
      
      const answered = Object.keys(userResults.answers).length;
      const incorrect = answered - correct;
      const unanswered = examData.questions.length - answered;
      const percentage = Math.round((correct / examData.questions.length) * 100);
      
      setScoreData({
        correct,
        incorrect,
        unanswered,
        percentage,
      });
      
      // Calculate topic performance
      const topics: Record<string, {correct: number, total: number, percentage: number}> = {};
      examData.questions.forEach((q: any) => {
        if (!topics[q.topic]) {
          topics[q.topic] = { correct: 0, total: 0, percentage: 0 };
        }
        
        topics[q.topic].total += 1;
        
        if (userResults.answers[q.id] === q.correctAnswer) {
          topics[q.topic].correct += 1;
        }
      });
      
      // Calculate percentages for each topic
      Object.keys(topics).forEach(topic => {
        topics[topic].percentage = Math.round((topics[topic].correct / topics[topic].total) * 100);
      });
      
      setTopicPerformance(topics);
    }
  }, [examId, location.state]);
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins} min ${secs} sec`;
  };
  
  // Performance assessment
  const getPerformanceMessage = () => {
    if (scoreData.percentage >= 85) {
      return "Amazing work! You've shown excellent understanding across the exam.";
    } else if (scoreData.percentage >= 70) {
      return "Great job! You've performed well with room for small improvements.";
    } else if (scoreData.percentage >= 50) {
      return "Good effort! With some focused study, you can improve further.";
    } else {
      return "Keep practicing! Focused revision on key topics will help you improve.";
    }
  };
  
  const getWeakestTopic = () => {
    let weakest = { topic: '', percentage: 100 };
    Object.entries(topicPerformance).forEach(([topic, data]) => {
      if (data.percentage < weakest.percentage) {
        weakest = { topic, percentage: data.percentage };
      }
    });
    return weakest.topic;
  };

  if (!exam || !results) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin h-10 w-10 border-4 border-wl-blue border-t-transparent rounded-full inline-block mb-4"></div>
          <p className="text-gray-600">Loading results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container">
          {/* Exam Overview */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h1 className="text-2xl font-bold">{exam.title} Results</h1>
                <p className="text-gray-600">
                  {exam.subject} • Year {exam.yearLevel} • {exam.type}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Completed on {new Date(results.submittedAt).toLocaleDateString()}
                </p>
              </div>
              
              <div className="mt-4 md:mt-0 text-center">
                <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-blue-50 border-4 border-blue-100">
                  <span className="text-2xl font-bold text-blue-700">{scoreData.percentage}%</span>
                </div>
                <p className="text-gray-600 mt-1">Overall Score</p>
              </div>
            </div>
          </div>
          
          {/* Score Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-lg font-bold mb-4">Score Summary</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center mb-1">
                  <CheckCircle size={18} className="text-green-600 mr-2" />
                  <h3 className="font-medium">Correct</h3>
                </div>
                <p className="text-2xl font-bold text-green-700">{scoreData.correct}</p>
                <p className="text-sm text-gray-600">questions</p>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="flex items-center mb-1">
                  <XCircle size={18} className="text-red-600 mr-2" />
                  <h3 className="font-medium">Incorrect</h3>
                </div>
                <p className="text-2xl font-bold text-red-700">{scoreData.incorrect}</p>
                <p className="text-sm text-gray-600">questions</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-1">
                  <svg className="w-4.5 h-4.5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-medium">Unanswered</h3>
                </div>
                <p className="text-2xl font-bold text-gray-700">{scoreData.unanswered}</p>
                <p className="text-sm text-gray-600">questions</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center mb-1">
                  <Clock size={18} className="text-blue-600 mr-2" />
                  <h3 className="font-medium">Time Spent</h3>
                </div>
                <p className="text-2xl font-bold text-blue-700">{formatTime(results.timeSpent)}</p>
                <p className="text-sm text-gray-600">of {exam.duration} min</p>
              </div>
            </div>
          </div>
          
          {/* Detailed Analysis Tabs */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <Tabs defaultValue="performance">
              <TabsList className="mb-6">
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="time">Time Analysis</TabsTrigger>
                <TabsTrigger value="topics">Topic Breakdown</TabsTrigger>
                <TabsTrigger value="review">Review Questions</TabsTrigger>
              </TabsList>
              
              {/* Performance Tab */}
              <TabsContent value="performance">
                <div className="space-y-6">
                  {/* Animated Performance Feedback */}
                  <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-6 -mr-6">
                      <div className="text-6xl text-blue-200 opacity-50">
                        {scoreData.percentage >= 70 ? '🏆' : 
                         scoreData.percentage >= 50 ? '🌟' : '📝'}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">Your Performance</h3>
                    <p className="text-gray-700 max-w-2xl">{getPerformanceMessage()}</p>
                    
                    <div className="mt-4 space-y-1">
                      <p className="text-sm text-gray-600">Score: {scoreData.percentage}%</p>
                      <Progress value={scoreData.percentage} className="h-2" />
                    </div>
                  </div>
                  
                  {/* Areas for Improvement */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Areas for Improvement</h3>
                    
                    <div className="space-y-4">
                      {getWeakestTopic() && (
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                          <h4 className="font-medium text-amber-800">Focus on: {getWeakestTopic()}</h4>
                          <p className="text-sm text-amber-700 mt-1">
                            This was your weakest topic. Consider spending more time practicing {getWeakestTopic().toLowerCase()} problems.
                          </p>
                        </div>
                      )}
                      
                      {scoreData.unanswered > 0 && (
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <h4 className="font-medium text-blue-800">Time Management</h4>
                          <p className="text-sm text-blue-700 mt-1">
                            You left {scoreData.unanswered} questions unanswered. Try to allocate your time more effectively in future exams.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Time Analysis Tab */}
              <TabsContent value="time">
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Time Summary</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Total Time</p>
                        <p className="text-xl font-bold">{formatTime(results.timeSpent)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Average per Question</p>
                        <p className="text-xl font-bold">{formatTime(Math.round(results.timeSpent / exam.questions.length))}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Time Utilization</p>
                        <p className="text-xl font-bold">{Math.round((results.timeSpent / (exam.duration * 60)) * 100)}%</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Time Distribution</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-center text-sm text-gray-500 mb-2">Time spent visualization would appear here</p>
                      <div className="h-48 flex items-center justify-center border border-dashed border-gray-300 rounded">
                        <p className="text-gray-400">Question Time Analysis Chart</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Time Management Tips</h3>
                    <ul className="space-y-2 text-sm bg-white p-4 rounded border border-gray-200">
                      <li className="flex items-start">
                        <span className="text-wl-blue mr-2">•</span>
                        <span>Aim to spend about {Math.round((exam.duration * 60) / exam.questions.length)} seconds on each question.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-wl-blue mr-2">•</span>
                        <span>If you're stuck on a question for too long, flag it and move on.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-wl-blue mr-2">•</span>
                        <span>Leave time at the end to review flagged questions.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              {/* Topic Breakdown Tab */}
              <TabsContent value="topics">
                <div className="space-y-6">
                  <h3 className="font-medium mb-2">Performance by Topic</h3>
                  
                  <div className="space-y-4">
                    {Object.entries(topicPerformance).map(([topic, data]) => (
                      <div key={topic} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">{topic}</h4>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            data.percentage >= 80 ? 'bg-green-100 text-green-800' :
                            data.percentage >= 60 ? 'bg-blue-100 text-blue-800' :
                            data.percentage >= 40 ? 'bg-amber-100 text-amber-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {data.correct}/{data.total} ({data.percentage}%)
                          </span>
                        </div>
                        
                        <Progress 
                          value={data.percentage} 
                          className={`h-2 ${
                            data.percentage >= 80 ? 'bg-green-100' :
                            data.percentage >= 60 ? 'bg-blue-100' :
                            data.percentage >= 40 ? 'bg-amber-100' :
                            'bg-red-100'
                          }`} 
                        />
                        
                        {data.percentage < 60 && (
                          <p className="text-xs text-gray-600 mt-2">
                            Tip: Review {topic.toLowerCase()} concepts and practice more questions in this area.
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              {/* Review Questions Tab */}
              <TabsContent value="review">
                <div className="space-y-6">
                  <h3 className="font-medium mb-4">Question Review</h3>
                  
                  <div className="space-y-8">
                    {exam.questions.map((question: any, index: number) => {
                      const userAnswer = results.answers[question.id];
                      const isCorrect = userAnswer === question.correctAnswer;
                      const isUnanswered = userAnswer === undefined;
                      
                      return (
                        <div key={question.id} className={`p-4 rounded-lg border ${
                          isUnanswered ? 'border-gray-200 bg-gray-50' :
                          isCorrect ? 'border-green-200 bg-green-50' : 
                          'border-red-200 bg-red-50'
                        }`}>
                          <div className="flex justify-between items-start">
                            <h4 className="font-medium">Question {index + 1}</h4>
                            {!isUnanswered && (
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                              }`}>
                                {isCorrect ? 'Correct' : 'Incorrect'}
                              </span>
                            )}
                            {isUnanswered && (
                              <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                                Not Answered
                              </span>
                            )}
                          </div>
                          
                          <p className="mt-2 mb-4">{question.text}</p>
                          
                          {question.type === 'multiple-choice' && (
                            <div className="space-y-2 mb-4">
                              {question.options.map((option: any) => (
                                <div 
                                  key={option.id}
                                  className={`p-2 rounded ${
                                    userAnswer === option.id && isCorrect ? 'bg-green-200' :
                                    userAnswer === option.id && !isCorrect ? 'bg-red-200' :
                                    option.id === question.correctAnswer ? 'bg-green-100' : ''
                                  }`}
                                >
                                  {option.text}
                                  {option.id === question.correctAnswer && (
                                    <span className="ml-2 text-green-700 text-sm">(Correct Answer)</span>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {question.type === 'true-false' && (
                            <div className="space-y-2 mb-4">
                              <div className={`p-2 rounded ${
                                userAnswer === true && isCorrect ? 'bg-green-200' :
                                userAnswer === true && !isCorrect ? 'bg-red-200' :
                                question.correctAnswer === true ? 'bg-green-100' : ''
                              }`}>
                                True
                                {question.correctAnswer === true && (
                                  <span className="ml-2 text-green-700 text-sm">(Correct Answer)</span>
                                )}
                              </div>
                              
                              <div className={`p-2 rounded ${
                                userAnswer === false && isCorrect ? 'bg-green-200' :
                                userAnswer === false && !isCorrect ? 'bg-red-200' :
                                question.correctAnswer === false ? 'bg-green-100' : ''
                              }`}>
                                False
                                {question.correctAnswer === false && (
                                  <span className="ml-2 text-green-700 text-sm">(Correct Answer)</span>
                                )}
                              </div>
                            </div>
                          )}
                          
                          {question.type === 'short-answer' && (
                            <div className="space-y-2 mb-4">
                              <div className="p-2 rounded bg-gray-100">
                                <p className="text-sm font-medium">Your answer:</p>
                                <p>{userAnswer || '(No answer provided)'}</p>
                              </div>
                              
                              <div className="p-2 rounded bg-green-100">
                                <p className="text-sm font-medium">Correct answer:</p>
                                <p>{question.correctAnswer}</p>
                              </div>
                            </div>
                          )}
                          
                          <div className="bg-white p-3 rounded border border-gray-200">
                            <p className="text-sm text-gray-700">
                              <span className="font-medium">Explanation:</span> {question.explanation}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">Topic: {question.topic}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Call to Actions */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to={`/exam/${examId}`}>
              <Button variant="outline" className="min-w-[150px]">
                Retake This Exam
              </Button>
            </Link>
            
            <Link to="/exams">
              <Button className="min-w-[150px]">
                Try More Exams <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ExamResults;
