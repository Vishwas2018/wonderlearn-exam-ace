
// This file contains the data for all exams in the application

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
  {
    id: 'naplan-y3-science-1',
    title: 'NAPLAN Practice Exam 1',
    subject: 'Science',
    yearLevel: '3',
    type: 'NAPLAN',
    description: 'Science knowledge and concepts assessment aligned with NAPLAN expectations.',
    duration: 40,
    isFree: false,
    questions: [
      {
        id: 'q1',
        text: 'Which of the following is a living thing?',
        type: 'multiple-choice',
        options: [
          { id: 'a', text: 'Rock' },
          { id: 'b', text: 'Water' },
          { id: 'c', text: 'Tree' },
          { id: 'd', text: 'Sun' }
        ],
        correctAnswer: 'c',
        explanation: 'Trees are living organisms that grow, reproduce, and respond to their environment.',
        topic: 'Living Things'
      },
      {
        id: 'q2',
        text: 'What do plants need to make their own food?',
        type: 'multiple-choice',
        options: [
          { id: 'a', text: 'Water only' },
          { id: 'b', text: 'Sunlight and water' },
          { id: 'c', text: 'Air and soil only' },
          { id: 'd', text: 'Sunlight, water, air, and soil' }
        ],
        correctAnswer: 'd',
        explanation: 'Plants need sunlight, water, air (carbon dioxide), and nutrients from soil to make their own food through photosynthesis.',
        topic: 'Plants'
      },
      {
        id: 'q3',
        text: 'Is the sun a star?',
        type: 'true-false',
        correctAnswer: true,
        explanation: 'The sun is indeed a star, it is the closest star to Earth.',
        topic: 'Space'
      },
      {
        id: 'q4',
        text: 'Which state of matter takes the shape of its container but has a definite volume?',
        type: 'multiple-choice',
        options: [
          { id: 'a', text: 'Solid' },
          { id: 'b', text: 'Liquid' },
          { id: 'c', text: 'Gas' },
          { id: 'd', text: 'Plasma' }
        ],
        correctAnswer: 'b',
        explanation: 'Liquids have a definite volume but take the shape of their container.',
        topic: 'States of Matter'
      },
      {
        id: 'q5',
        text: 'Name one way heat can be transferred.',
        type: 'short-answer',
        correctAnswer: 'conduction',
        explanation: 'Heat can be transferred through conduction, convection, or radiation. Any one of these answers would be correct.',
        topic: 'Heat Transfer'
      }
    ]
  },
  {
    id: 'naplan-y3-digital-1',
    title: 'NAPLAN Practice Exam 1',
    subject: 'Digital Technologies',
    yearLevel: '3',
    type: 'NAPLAN',
    description: 'Digital literacy and reasoning questions for Year 3 students.',
    duration: 35,
    isFree: false,
    questions: [
      {
        id: 'q1',
        text: 'What does the term "algorithm" mean?',
        type: 'multiple-choice',
        options: [
          { id: 'a', text: 'A type of computer' },
          { id: 'b', text: 'A step-by-step set of instructions' },
          { id: 'c', text: 'A computer game' },
          { id: 'd', text: 'A type of robot' }
        ],
        correctAnswer: 'b',
        explanation: 'An algorithm is a step-by-step set of instructions to solve a problem or complete a task.',
        topic: 'Algorithms'
      }
    ]
  },
  {
    id: 'icas-y3-maths-1',
    title: 'ICAS Practice Exam 1',
    subject: 'Maths',
    yearLevel: '3',
    type: 'ICAS',
    description: 'Comprehensive mathematics practice test matching ICAS structure and difficulty.',
    duration: 50,
    isFree: true,
    questions: [
      {
        id: 'q1',
        text: 'How many sides does a hexagon have?',
        type: 'multiple-choice',
        options: [
          { id: 'a', text: '4' },
          { id: 'b', text: '5' },
          { id: 'c', text: '6' },
          { id: 'd', text: '8' }
        ],
        correctAnswer: 'c',
        explanation: 'A hexagon is a polygon with 6 sides.',
        topic: 'Geometry'
      }
    ]
  },
  {
    id: 'icas-y3-science-1',
    title: 'ICAS Practice Exam 1',
    subject: 'Science',
    yearLevel: '3',
    type: 'ICAS',
    description: 'Science reasoning and knowledge assessment in ICAS format.',
    duration: 45,
    isFree: false,
    questions: [
      {
        id: 'q1',
        text: 'Which of the following objects would sink in water?',
        type: 'multiple-choice',
        options: [
          { id: 'a', text: 'A wooden block' },
          { id: 'b', text: 'A balloon' },
          { id: 'c', text: 'A metal coin' },
          { id: 'd', text: 'A plastic bottle with air inside' }
        ],
        correctAnswer: 'c',
        explanation: 'A metal coin is denser than water, so it sinks.',
        topic: 'Floating and Sinking'
      }
    ]
  },
  {
    id: 'naplan-y4-maths-1',
    title: 'NAPLAN Practice Exam 1',
    subject: 'Maths',
    yearLevel: '4',
    type: 'NAPLAN',
    description: 'Math practice questions for Year 4 students preparing for NAPLAN.',
    duration: 50,
    isFree: true,
    questions: [
      {
        id: 'q1',
        text: 'What is 12 × 5?',
        type: 'multiple-choice',
        options: [
          { id: 'a', text: '50' },
          { id: 'b', text: '55' },
          { id: 'c', text: '60' },
          { id: 'd', text: '65' }
        ],
        correctAnswer: 'c',
        explanation: '12 × 5 = 60',
        topic: 'Multiplication'
      },
      {
        id: 'q2',
        text: 'Which fraction is equivalent to 0.5?',
        type: 'multiple-choice',
        options: [
          { id: 'a', text: '1/4' },
          { id: 'b', text: '1/2' },
          { id: 'c', text: '2/3' },
          { id: 'd', text: '3/4' }
        ],
        correctAnswer: 'b',
        explanation: '1/2 = 0.5',
        topic: 'Fractions and Decimals'
      },
      {
        id: 'q3',
        text: 'Is 28 an even number?',
        type: 'true-false',
        correctAnswer: true,
        explanation: '28 is even because it can be evenly divided by 2.',
        topic: 'Number Properties'
      },
      {
        id: 'q4',
        text: 'What is the value of 7 × 8?',
        type: 'multiple-choice',
        options: [
          { id: 'a', text: '48' },
          { id: 'b', text: '54' },
          { id: 'c', text: '56' },
          { id: 'd', text: '64' }
        ],
        correctAnswer: 'c',
        explanation: '7 × 8 = 56',
        topic: 'Multiplication'
      },
      {
        id: 'q5',
        text: 'What is 36 ÷ 4?',
        type: 'short-answer',
        correctAnswer: '9',
        explanation: '36 ÷ 4 = 9',
        topic: 'Division'
      }
    ]
  },
  {
    id: 'icas-all-stars-y5-maths-1',
    title: 'ICAS All Stars Exam 1',
    subject: 'Maths',
    yearLevel: '5',
    type: 'ICAS All Stars',
    description: 'Advanced mathematics problems for high-achieving students.',
    duration: 60,
    isFree: false,
    questions: [
      {
        id: 'q1',
        text: 'If 3x + 7 = 22, what is the value of x?',
        type: 'short-answer',
        correctAnswer: '5',
        explanation: '3x + 7 = 22\n3x = 15\nx = 5',
        topic: 'Algebra'
      }
    ]
  }
];

export default exams;
