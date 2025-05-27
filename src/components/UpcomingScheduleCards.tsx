import React from 'react';
import { ScheduleItem } from '@/data/types';
import { upcomingScheduleData } from '@data/upcomingSchedule';

const UpcomingScheduleCards: React.FC = () => {
  
  return (
    <div className='mb-10'>

      <h3 className='text-primary text-lg font-bold mb-3'>The Upcoming Schedule</h3>

      {upcomingScheduleData?.map((item: ScheduleItem, index: number) => (
        <div key={index} className='mb-6 w-full'>
          <h3 className='text-gray-400 text-sl mb-2 font-semibold'>On {item.day}</h3>

          <div className='flex flex-col md:flex-row gap-4'>
            {item.appointments.map((appointment) => (
              <div
                key={appointment.id}
                className='bg-secondary rounded-3xl p-4 w-full md:w-fit'>
                <div className='flex items-center justify-between mb-2 gap-6'>
                  <p className='text-primary text-sm font-semibold'>{appointment.appointmentName}</p>
                  <img src={appointment.icon} alt="" className="w-5 h-5" />
                </div>
                <p className="text-primary text-sm font-semibold">{appointment.time}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingScheduleCards;
