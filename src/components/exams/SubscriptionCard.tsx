
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface SubscriptionCardProps {
  onSubscribe: () => void;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ onSubscribe }) => {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-lg shadow-sm text-white">
      <h2 className="text-lg font-bold mb-2">Unlock All Exams</h2>
      <p className="text-sm mb-4 text-white/90">
        Subscribe today to access our complete library of practice exams for all subjects and year levels.
      </p>
      <Button 
        variant="secondary"
        className="w-full bg-white hover:bg-gray-100 text-blue-600"
        onClick={onSubscribe}
      >
        View Pricing <ArrowRight size={16} className="ml-2" />
      </Button>
    </div>
  );
};

export default SubscriptionCard;
