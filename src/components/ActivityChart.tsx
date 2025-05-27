import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Data setup
interface RawDataItem {
  day: string;
  values: [number, number, number];
}

interface FormattedDataItem {
  day: string;
  val1: number;
  val2: number;
  val3: number;
}

const data: RawDataItem[] = [
  { day: 'Mon', values: [40, 60, 80] },
  { day: 'Tue', values: [30, 50, 70] },
  { day: 'Wed', values: [20, 40, 60] },
  { day: 'Thu', values: [50, 70, 90] },
  { day: 'Fri', values: [60, 30, 100] },
  { day: 'Sat', values: [30, 50, 70] },
  { day: 'Sun', values: [20, 40, 60] },
];

const formattedData: FormattedDataItem[] = data.map((item) => ({
  day: item.day,
  val1: item.values[0],
  val2: item.values[1],
  val3: item.values[2],
}));

const ActivityChart: React.FC = () => {
  return (
    <div className='w-full h-[240px] p-5'>
      <div className='flex justify-between items-center mb-4'>
        <h4 className='text-primary font-semibold'>Activity</h4>
        <span className='text-gray-400 text-xs'>3 appointment on this week</span>
      </div>
      <ResponsiveContainer width="100%" height={180}>
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
