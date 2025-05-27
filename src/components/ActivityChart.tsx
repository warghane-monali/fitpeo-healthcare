import { Data, FormattedDataItem } from '@data/activityData';
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const formattedData: FormattedDataItem[] = Data.map((item) => ({
  day: item.day,
  val1: item.values[0],
  val2: item.values[1],
  val3: item.values[2],
}));

const ActivityChart: React.FC = () => {
  return (
    <div className='w-full h-[220px] p-5'>
      <div className='flex justify-between items-center mb-4'>
        <h4 className='text-primary font-semibold'>Activity</h4>
        <span className='text-gray-400 text-xs'>3 appointment on this week</span>
      </div>
      <ResponsiveContainer width="100%" height={150}>
        <BarChart
          data={formattedData}
          barCategoryGap={20}
        >
          <XAxis dataKey="day" />
          <Tooltip />
          <Bar dataKey="val1" fill="#00D8FF" barSize={4} />
          <Bar dataKey="val2" fill="#A8A8D8" barSize={4} />
          <Bar dataKey="val3" fill="#4F4F8F" barSize={4} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
