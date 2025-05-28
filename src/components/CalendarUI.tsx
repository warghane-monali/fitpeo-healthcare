import { Minus } from 'lucide-react';
import React, { useState } from 'react';
import Right from "../assets/arrow-right-svgrepo-com.svg";
import Left from "../assets/arrow-left-svgrepo-com.svg";
import { calender } from '@data/calenderData';

const CalendarUI: React.FC = () => {

  const [selectedSlot, setSelectedSlot] = useState<{date:string, time:string}>({date:'26', time:'09:00'});

const handleSlotClick = (date:string, time:string)=> {
  setSelectedSlot({date, time});
};

  return (
    <div className=" bg-[#f4f7fb] text-[#2f2f2f] ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-semibold text-primary">October 2021</h2>
        <div className="flex space-x-2">
          <img src={Left} className='w-5 h-5 text-primary'/>
          <img src={Right} className='w-5 h-5 text-primary'/>
        </div>
      </div>

  <div className="overflow-x-auto">
      <div className="min-w-[500px]  grid grid-cols-7 gap-2 text-center">
        {calender.map((itm, index) =>{
          return(
          <div className={`px-2 py-3 ${selectedSlot.date === itm.date && 'bg-secondary rounded-3xl'} `}>

              <div key={index} className={`font-medium text-sm text-primary`}>
                {itm.day}
              </div>

              <div className={`text-xl font-bold text-primary`}>
                {itm.date}
              </div>

              <div className='flex flex-col gap-2 mt-4'>
                {
                  itm.times.map((time, idx)=>{
                    return(
                        time ? 
                        <button
                          key={idx}
                          onClick={() => handleSlotClick(itm.date, time)}
                          className={`w-full text-xs rounded-full py-1 cursor-pointer text-primary font-bold ${(selectedSlot.time ===time && selectedSlot.date === itm.date) && 'bg-primary text-white font-medium rounded-2xl'}`}>
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
    </div>


      )

};

export default CalendarUI;
