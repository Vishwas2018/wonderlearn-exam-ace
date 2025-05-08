
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { toast } from 'sonner';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { AlertCircle, FileCheck, FileX } from 'lucide-react';

// Sample JSON structure for guidance
const sampleExamJson = {
  id: "sample-exam-id",
  title: "Sample Exam Title",
  subject: "Maths",
  yearLevel: "3",
  type: "NAPLAN",
  description: "A brief description of the exam",
  duration: 30,
  isFree: false,
  questions: [
    {
      id: "q1",
      text: "What is 5 + 7?",
      type: "multiple-choice",
      options: [
        { id: "a", text: "10" },
        { id: "b", text: "11" },
        { id: "c", text: "12" },
        { id: "d", text: "13" }
      ],
      correctAnswer: "c",
      explanation: "5 + 7 = 12",
      topic: "Addition"
    }
    // More questions would go here
  ]
};

const ExamManager = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [jsonInput, setJsonInput] = useState('');
  const [validateMessage, setValidateMessage] = useState<string | null>(null);
  const [isValid, setIsValid] = useState<boolean | null>(null);

  // Check if user is admin
  React.useEffect(() => {
    // In a real application, you would check if the user has admin privileges
    if (!isAuthenticated || !user?.isAdmin) {
      toast.error("You don't have permission to access this page");
      navigate('/');
    }
  }, [isAuthenticated, user, navigate]);

  const validateExamJson = () => {
    try {
      if (!jsonInput.trim()) {
        setValidateMessage("JSON input is empty");
        setIsValid(false);
        return false;
      }

      const parsedExam = JSON.parse(jsonInput);
      
      // Check required fields
      const requiredFields = ['id', 'title', 'subject', 'yearLevel', 'type', 'duration', 'questions'];
      const missingFields = requiredFields.filter(field => !parsedExam[field]);
      
      if (missingFields.length > 0) {
        setValidateMessage(`Missing required fields: ${missingFields.join(", ")}`);
        setIsValid(false);
        return false;
      }
      
      // Check if questions array is valid
      if (!Array.isArray(parsedExam.questions) || parsedExam.questions.length === 0) {
        setValidateMessage("Questions must be a non-empty array");
        setIsValid(false);
        return false;
      }
      
      // Check each question
      const invalidQuestions = parsedExam.questions.filter(q => 
        !q.id || !q.text || !q.type || 
        (q.type === 'multiple-choice' && (!Array.isArray(q.options) || q.options.length === 0))
      );
      
      if (invalidQuestions.length > 0) {
        setValidateMessage(`${invalidQuestions.length} questions have invalid formats`);
        setIsValid(false);
        return false;
      }
      
      setValidateMessage("JSON is valid and ready to be added");
      setIsValid(true);
      return true;
    } catch (e) {
      setValidateMessage(`Invalid JSON format: ${e.message}`);
      setIsValid(false);
      return false;
    }
  };

  const handleAddExam = () => {
    if (!validateExamJson()) {
      return;
    }
    
    try {
      const newExam = JSON.parse(jsonInput);
      
      // In a real application, you would save this to your database
      // For now, we'll just show a success message
      toast.success("Exam added successfully!");
      
      // Reset form
      setJsonInput('');
      setValidateMessage(null);
      setIsValid(null);
      
      // In a real application, you might redirect to the exam list
      // navigate('/admin/exams');
    } catch (e) {
      toast.error(`Failed to add exam: ${e.message}`);
    }
  };

  const loadSampleJson = () => {
    setJsonInput(JSON.stringify(sampleExamJson, null, 2));
    setValidateMessage(null);
    setIsValid(null);
  };

  if (!isAuthenticated || !user?.isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <p className="text-gray-600">Checking permissions...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Exam Manager</h1>
            
            <Card>
              <CardHeader>
                <CardTitle>Add New Exam</CardTitle>
                <CardDescription>
                  Enter exam details in JSON format to add a new exam to the system.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="examJson">Exam JSON</Label>
                      <Button variant="outline" size="sm" onClick={loadSampleJson}>
                        Load Sample
                      </Button>
                    </div>
                    <Textarea
                      id="examJson"
                      placeholder="Paste your JSON here..."
                      rows={15}
                      value={jsonInput}
                      onChange={(e) => {
                        setJsonInput(e.target.value);
                        setIsValid(null);
                        setValidateMessage(null);
                      }}
                      className="font-mono text-sm"
                    />
                  </div>
                  
                  {validateMessage && (
                    <div className={`p-3 rounded-md flex items-center gap-2 ${
                      isValid ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                    }`}>
                      {isValid ? (
                        <FileCheck className="h-5 w-5" />
                      ) : (
                        <AlertCircle className="h-5 w-5" />
                      )}
                      <p className="text-sm">{validateMessage}</p>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={validateExamJson}>
                  Validate JSON
                </Button>
                <Button 
                  onClick={handleAddExam}
                  disabled={!isValid}
                >
                  Add Exam
                </Button>
              </CardFooter>
            </Card>
            
            {/* In a real application, you might add components here for:
              - Listing current exams
              - Editing existing exams
              - Deleting exams
              - Importing/exporting exam batches
            */}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ExamManager;
