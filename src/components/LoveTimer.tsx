import React from 'react';
import { useInterval } from 'react-use';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';
import { motion } from 'framer-motion';

interface LoveTimerProps {
  startDate?: string;
}

const LoveTimer: React.FC<LoveTimerProps> = ({ startDate = '2025-02-19T00:00:00' }) => {
  const [now, setNow] = React.useState(new Date());

  useInterval(() => {
    setNow(new Date());
  }, 1000);

  const days = differenceInDays(now, new Date(startDate));
  const hours = differenceInHours(now, new Date(startDate)) % 24;
  const minutes = differenceInMinutes(now, new Date(startDate)) % 60;
  const seconds = differenceInSeconds(now, new Date(startDate)) % 60;

  return (
    <motion.div 
      className="paper-texture p-6 rounded-lg text-center"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="font-headline text-2xl text-secondary mb-4">Time Since We Met</h2>
      <div className="grid grid-cols-4 gap-4">
        <TimeUnit value={days} unit="Days" />
        <TimeUnit value={hours} unit="Hours" />
        <TimeUnit value={minutes} unit="Minutes" />
        <TimeUnit value={seconds} unit="Seconds" />
      </div>
      <p className="font-handwritten text-lg text-text-light mt-4">
        Every moment with you is precious
      </p>
    </motion.div>
  );
};

interface TimeUnitProps {
  value: number;
  unit: string;
}

const TimeUnit: React.FC<TimeUnitProps> = ({ value, unit }) => (
  <div className="flex flex-col items-center">
    <motion.div 
      className="text-3xl font-headline text-secondary"
      key={value}
      initial={{ scale: 1.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {value.toString().padStart(2, '0')}
    </motion.div>
    <div className="text-sm font-handwritten text-text-light">{unit}</div>
  </div>
);

export default LoveTimer;