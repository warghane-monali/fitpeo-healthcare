import { Minus } from 'lucide-react';
import React, { useState } from 'react';
import { data } from 'react-router';

interface TimeSlot {
  day : string;
  date: string;
  times: string[];
}

const calender: TimeSlot[] = [
  {
    day:'Mon',
    date:'25',
    times :['10:00', '11:00', '12:00']
  },
  {
    day:'Tue',
    date:'26',
    times :['08:00', '09:00', '10:00']
  },
  {
    day:'Wed',
    date:'27',
    times :['12:00', '13:00', '']
  },
  {
    day:'Thu',
    date:'28',
    times :['10:00', '11:00' , '']
  },
  {
    day:'Fri',
    date:'29',
    times :['14:00', '16:00', '']
  },
  {
    day:'Sat',
    date:'30',
    times :['12:00', '14:00', '15:00']
  },
  {
    day:'Sun',
    date:'31',
    times :['09:00', '10:00', '11:00']
  },
]


const CalendarUI: React.FC = () => {

  const [selectedSlot, setSelectedSlot] = useState<{date:string, time:string}>({date:'', time:''});

const handleSlotClick = (date:string, time:string)=> {
  setSelectedSlot({date, time});
};

console.log("date, time", selectedSlot);

  return (
    <div className=" bg-[#f4f7fb] text-[#2f2f2f]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">October 2021</h2>
        <div className="flex space-x-2">
          <button className="text-xl">&lt;</button>
          <button className="text-xl">&gt;</button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center ">
        {calender.map((itm, index) =>{
          return(
          <div className={` px-2 py-3 ${selectedSlot.date === itm.date && 'bg-secondary rounded-3xl'}`}>
              <div key={index} className={`font-medium text-sm text-primary`}>
                {itm.day}
              </div>

              <div
              className={`text-xl font-bold text-primary`}>
              {itm.date}
            </div>

            <div className='flex flex-col gap-2'>
              {
                itm.times.map((time, idx)=>{
                  return(
                      time ? 
                      <button
                        key={idx}
                        onClick={() => handleSlotClick(itm.date, time)}
                        className={`w-full text-xs rounded-full py-1 cursor-pointer ${(selectedSlot.time ===time && selectedSlot.date === itm.date) && 'bg-primary text-white font-medium rounded-2xl'}`}>
                        {time}
                      </button> :
                    <Minus  size={22} className='mx-auto text-gray-400 hover:cursor-not-allowed'/>
                    )
                })
              }

            </div>

            </div>
          )})
        }
        </div>

        </div>


      )

};

export default CalendarUI;
