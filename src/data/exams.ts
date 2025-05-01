
// This file would contain the data for all exams in a real application
// For now, it's just a structure example

export interface ExamOption {
  id: string;
  text: string;
}

export interface ExamQuestion {
  id: string;
  text: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer';
  options?: ExamOption[];
  correctAnswer: string | boolean;
  explanation: string;
  topic: string;
}

export interface Exam {
  id: string;
  title: string;
  subject: string;
  yearLevel: string; 
  type: 'NAPLAN' | 'ICAS' | 'ICAS All Stars';
  description: string;
  questions: ExamQuestion[];
  duration: number; // in minutes
  isFree: boolean;
}

const exams: Exam[] = [
  {
    id: 'naplan-y3-maths-1',
    title: 'NAPLAN Practice Exam 1',
    subject: 'Maths',
    yearLevel: '3',
    type: 'NAPLAN',
    description: 'Practice with authentic NAPLAN-style mathematics questions for Year 3 students.',
    duration: 30,
    isFree: true,
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
  },
  // Additional exams would be defined here
];

export default exams;
