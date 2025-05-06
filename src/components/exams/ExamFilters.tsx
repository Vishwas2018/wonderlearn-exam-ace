
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ExamFiltersProps {
  filters: {
    examType: string;
    yearLevel: string;
    subject: string;
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    examType: string;
    yearLevel: string;
    subject: string;
  }>>;
}

const ExamFilters: React.FC<ExamFiltersProps> = ({ filters, setFilters }) => {
  return (
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
            <SelectItem value="all-types">All Exam Types</SelectItem>
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
            <SelectItem value="all-years">All Year Levels</SelectItem>
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
  );
};

export default ExamFilters;
