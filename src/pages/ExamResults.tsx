
import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import exams from '@/data/exams';

const ExamResults = () => {
  const { examId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [exam, setExam] = useState(null);
  const [results, setResults] = useState(null);
  const [timePerQuestion, setTimePerQuestion] = useState([]);
  const [topicResults, setTopicResults] = useState([]);
  const [scorePercent, setScorePercent] = useState(0);
  const [answersBreakdown, setAnswersBreakdown] = useState({
    correct: 0,
    incorrect: 0,
    unanswered: 0
  });

  // Load exam data and results
  useEffect(() => {
    // Get exam data
    const examData = exams.find(e => e.id === examId);
    
    if (!examData) {
      navigate('/exams');
      return;
    }
    
    setExam(examData);
    
    // Get results from location state or mock data
    const resultsData = location.state?.results || {
      examId,
      answers: {
        'q1': 'c',
        'q2': 'b',
        'q3': true,
        'q4': 'c',
        'q5': '10'
      },
      timeSpent: 1200, // 20 minutes
      submittedAt: new Date().toISOString(),
      // Mocked time per question (in seconds)
      questionTimes: {
        'q1': 45,
        'q2': 60,
        'q3': 30,
        'q4': 75,
        'q5': 90
      }
    };
    
    setResults(resultsData);
    
    // Process data for display
    if (examData && resultsData) {
      processResults(examData, resultsData);
    }
  }, [examId, location.state]);

  // Process results for charts and stats
  const processResults = (examData, resultsData) => {
    // Calculate score
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;
    
    // Process topic performance
    const topicData = {};
    
    examData.questions.forEach(question => {
      // Count correct/incorrect/unanswered
      if (!resultsData.answers[question.id]) {
        unanswered++;
      } else if (resultsData.answers[question.id] === question.correctAnswer) {
        correct++;
        
        // Add to topic results
        if (!topicData[question.topic]) {
          topicData[question.topic] = { total: 0, correct: 0 };
        }
        topicData[question.topic].total++;
        topicData[question.topic].correct++;
      } else {
        incorrect++;
        
        // Add to topic results
        if (!topicData[question.topic]) {
          topicData[question.topic] = { total: 0, correct: 0 };
        }
        topicData[question.topic].total++;
      }
    });
    
    setAnswersBreakdown({ correct, incorrect, unanswered });
    
    // Calculate percentage score
    const percentScore = Math.round((correct / examData.questions.length) * 100);
    setScorePercent(percentScore);
    
    // Process time per question
    const timeData = examData.questions.map((q, index) => ({
      name: `Q${index + 1}`,
      seconds: resultsData.questionTimes?.[q.id] || Math.floor(Math.random() * 60) + 30,
      topic: q.topic
    }));
    
    setTimePerQuestion(timeData);
    
    // Process topic results
    const topicsArray = Object.keys(topicData).map(topic => ({
      name: topic,
      percentage: Math.round((topicData[topic].correct / topicData[topic].total) * 100),
      score: `${topicData[topic].correct}/${topicData[topic].total}`
    }));
    
    setTopicResults(topicsArray);
  };

  // Return loading state if data is not yet loaded
  if (!exam || !results) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full inline-block mb-4"></div>
          <p className="text-gray-600">Loading exam results...</p>
        </div>
      </div>
    );
  }

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}m ${seconds}s`;
  };

  // Score-based feedback message
  const getFeedbackMessage = () => {
    if (scorePercent >= 90) return "Excellent work! You're really mastering this subject!";
    if (scorePercent >= 75) return "Great job! You're showing strong understanding.";
    if (scorePercent >= 60) return "Good effort! Keep practicing to improve your score.";
    if (scorePercent >= 40) return "You're making progress. Focus on your weaker topics.";
    return "Keep working at it. With more practice, you'll improve!";
  };

  // Performance-based color
  const getPerformanceColor = (percent) => {
    if (percent >= 80) return "bg-green-500";
    if (percent >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  // Pie chart colors
  const COLORS = ['#4ade80', '#ef4444', '#d4d4d4'];
  
  // Pie chart data
  const pieData = [
    { name: 'Correct', value: answersBreakdown.correct },
    { name: 'Incorrect', value: answersBreakdown.incorrect },
    { name: 'Unanswered', value: answersBreakdown.unanswered }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      
      <main className="flex-grow py-8">
        <div className="container">
          {/* Header Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Exam Results</h1>
                <p className="text-gray-600">
                  {exam.subject} • Year {exam.yearLevel} • {exam.type}
                </p>
              </div>
              
              <div className="mt-4 md:mt-0">
                <Badge variant="outline" className="text-xs font-normal px-2 py-1">
                  Completed on {new Date(results.submittedAt).toLocaleDateString()}
                </Badge>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Score */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Overall Score</CardTitle>
                </CardHeader>
                <CardContent className="text-center py-4">
                  <div className="text-5xl font-bold text-blue-600">{scorePercent}%</div>
                  <p className="mt-2 text-gray-600 text-sm">{getFeedbackMessage()}</p>
                </CardContent>
              </Card>
              
              {/* Time */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Time Spent</CardTitle>
                </CardHeader>
                <CardContent className="text-center py-4">
                  <div className="text-3xl font-bold text-blue-600">{formatTime(results.timeSpent)}</div>
                  <p className="mt-2 text-gray-600 text-sm">
                    {formatTime(results.timeSpent / exam.questions.length)} per question (avg)
                  </p>
                </CardContent>
              </Card>
              
              {/* Questions */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Questions</CardTitle>
                </CardHeader>
                <CardContent className="py-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Correct</span>
                    <span className="text-green-600 font-medium">{answersBreakdown.correct}</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Incorrect</span>
                    <span className="text-red-600 font-medium">{answersBreakdown.incorrect}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Unanswered</span>
                    <span className="text-gray-500 font-medium">{answersBreakdown.unanswered}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Analysis Tabs */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <Tabs defaultValue="topic-analysis">
              <TabsList className="mb-6">
                <TabsTrigger value="topic-analysis">Topic Analysis</TabsTrigger>
                <TabsTrigger value="time-analysis">Time Analysis</TabsTrigger>
                <TabsTrigger value="questions">Review Questions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="topic-analysis">
                <div className="mb-4">
                  <h2 className="text-lg font-medium mb-4">Performance by Topic</h2>
                  
                  {/* Bar chart for topic performance */}
                  <div className="h-[300px] mb-6">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={topicResults}
                        margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                          dataKey="name" 
                          angle={-45} 
                          textAnchor="end" 
                          height={80}
                        />
                        <YAxis 
                          label={{ value: 'Score (%)', angle: -90, position: 'insideLeft' }}
                          domain={[0, 100]}
                        />
                        <Tooltip />
                        <Bar 
                          dataKey="percentage" 
                          name="Percentage" 
                          fill="#3b82f6" 
                          radius={[4, 4, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  
                  {/* Topic breakdown */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {topicResults.map((topic) => (
                      <div key={topic.name} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">{topic.name}</h3>
                          <span className="text-sm">{topic.score}</span>
                        </div>
                        <Progress 
                          value={topic.percentage} 
                          className={`h-2 ${getPerformanceColor(topic.percentage)}`}
                        />
                        {topic.percentage < 60 && (
                          <p className="mt-2 text-sm text-gray-600">
                            <span className="font-medium text-amber-600">Tip:</span> Focus on reviewing {topic.name.toLowerCase()} concepts.
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="time-analysis">
                <div className="mb-4">
                  <h2 className="text-lg font-medium mb-4">Time Spent per Question</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Time bar chart */}
                    <div className="h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={timePerQuestion}
                          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                          layout="vertical"
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis 
                            type="number" 
                            label={{ value: 'Seconds', position: 'insideBottom', offset: -10 }}
                          />
                          <YAxis 
                            dataKey="name" 
                            type="category" 
                            width={40}
                          />
                          <Tooltip formatter={(value) => [`${value} seconds`, 'Time']} />
                          <Bar 
                            dataKey="seconds" 
                            name="Time" 
                            fill="#6366f1" 
                            radius={[0, 4, 4, 0]}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    
                    {/* Answer distribution pie chart */}
                    <div className="h-[300px] flex flex-col items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {pieData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => [`${value} questions`, `${value}`]} />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="text-center">
                        <h3 className="font-medium text-sm">Answer Distribution</h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="font-medium mb-2">Time Management Analysis</h3>
                    <p className="text-sm text-gray-600">
                      {results.timeSpent > (exam.duration * 60) * 0.9 
                        ? "You used most of your available time. Consider practicing faster responses for time-limited exams."
                        : "You finished with plenty of time to spare. Good time management!"
                      }
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="questions">
                <div className="mb-4">
                  <h2 className="text-lg font-medium mb-4">Question Review</h2>
                  
                  <div className="space-y-6">
                    {exam.questions.map((question, index) => {
                      const userAnswer = results.answers[question.id];
                      const isCorrect = userAnswer === question.correctAnswer;
                      const isUnanswered = !userAnswer && userAnswer !== false;
                      
                      return (
                        <div 
                          key={question.id} 
                          className={`p-4 border rounded-lg ${
                            isUnanswered 
                              ? 'border-gray-300 bg-gray-50' 
                              : isCorrect 
                                ? 'border-green-200 bg-green-50' 
                                : 'border-red-200 bg-red-50'
                          }`}
                        >
                          <div className="flex justify-between">
                            <h3 className="font-medium">Question {index + 1}</h3>
                            <Badge className={
                              isUnanswered 
                                ? 'bg-gray-500' 
                                : isCorrect 
                                  ? 'bg-green-500' 
                                  : 'bg-red-500'
                            }>
                              {isUnanswered ? 'Unanswered' : isCorrect ? 'Correct' : 'Incorrect'}
                            </Badge>
                          </div>
                          
                          <p className="my-2">{question.text}</p>
                          
                          {/* Show options for multiple choice */}
                          {question.type === 'multiple-choice' && question.options && (
                            <div className="ml-4 space-y-1 mt-2">
                              {question.options.map(option => (
                                <div 
                                  key={option.id} 
                                  className={`px-2 py-1 rounded ${
                                    option.id === question.correctAnswer
                                      ? 'bg-green-100 border-green-200 border'
                                      : option.id === userAnswer && option.id !== question.correctAnswer
                                        ? 'bg-red-100 border-red-200 border'
                                        : ''
                                  }`}
                                >
                                  {option.id}: {option.text}
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {/* Show true/false */}
                          {question.type === 'true-false' && (
                            <div className="ml-4 space-y-1 mt-2">
                              <div className={`px-2 py-1 rounded ${
                                true === question.correctAnswer
                                  ? 'bg-green-100 border-green-200 border'
                                  : userAnswer === true && true !== question.correctAnswer
                                    ? 'bg-red-100 border-red-200 border'
                                    : ''
                              }`}>
                                True
                              </div>
                              <div className={`px-2 py-1 rounded ${
                                false === question.correctAnswer
                                  ? 'bg-green-100 border-green-200 border'
                                  : userAnswer === false && false !== question.correctAnswer
                                    ? 'bg-red-100 border-red-200 border'
                                    : ''
                              }`}>
                                False
                              </div>
                            </div>
                          )}
                          
                          {/* Show short answer */}
                          {question.type === 'short-answer' && (
                            <div className="ml-4 mt-2 space-y-2">
                              <div>
                                <span className="text-sm font-medium">Your answer: </span>
                                <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                                  {userAnswer || '(none)'}
                                </span>
                              </div>
                              <div>
                                <span className="text-sm font-medium">Correct answer: </span>
                                <span className="text-green-600">{question.correctAnswer}</span>
                              </div>
                            </div>
                          )}
                          
                          {/* Explanation */}
                          <div className="mt-3 pt-2 border-t">
                            <p className="text-sm">
                              <span className="font-medium">Explanation: </span>
                              {question.explanation}
                            </p>
                          </div>
                          
                          <div className="mt-2 text-xs text-gray-500">
                            Topic: {question.topic} • Time: {formatTime(results.questionTimes?.[question.id] || 60)}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Button 
              variant="default" 
              onClick={() => navigate(`/exam/${examId}`)}
              className="flex-1 md:flex-auto"
            >
              Retake Exam
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate('/exams')}
              className="flex-1 md:flex-auto"
            >
              Find Other Exams
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ExamResults;
