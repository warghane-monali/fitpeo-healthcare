import React from 'react';
import { scheduleData } from '@data/scheduleData';
import { Schedule } from '@data/types';

const ScheduleCards: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {scheduleData?.map((item: Schedule) => {
        const cardBg = item.selected ? 'bg-primary' : 'bg-secondary';
        const textColor = item.selected ? 'text-white' : 'text-primary';

        return (
          <div
            key={item.id}
            className={`${cardBg} rounded-3xl p-4 w-full md:w-fit`}>
            <div className="flex items-center justify-between gap-5 mb-2">
              <p className={`${textColor} text-sm font-semibold`}>
                {item.appointmentName}
              </p>
              <img src={item.icon} alt="icon" className="w-5 h-5" />
            </div>
            <p className={`${textColor} text-xs font-semibold`}>{item.time}</p>
            <p className={`${textColor} text-xs font-semibold`}>{item.drName}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ScheduleCards;