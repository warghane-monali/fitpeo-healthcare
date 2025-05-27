
import { ArrowRight, ChevronDown} from 'lucide-react';
import AnatomySection from '@components/AnatomySection';
import HealthStatusCards from '@components/HealthStatusCards';
import ActivityChart from '@components/ActivityChart';
import UpcomingScheduleCards from '@components/UpcomingScheduleCards';
import ScheduleCards from '@components/ScheduleCards';
import CalendarUI from '@components/CalendarUI';

const Dashboard = () => {
    return (
        <div className='flex flex-col lg:flex-row '>

            <div className='left w-full lg:w-1/2 p-4 md:px-10 py-6'>

                <div className='flex items-center justify-between mb-5'>
                    <h1 className='text-primary text-2xl font-bold mb-1'>Dashboard</h1>
                    <div className='flex items-center gap-1'>
                        <span className='text-primary text-xs font-semibold'>This Week</span>
                        <ChevronDown size={16} className='text-gray-400'/>
                    </div>
                </div>
                
                <div className='flex flex-col md:flex-row gap-12 w-full my-4 px-2 md:px-0'>
                    <div className='illustration w-full md:w-2/3 mx-auto'>
                        <AnatomySection />
                    </div>
                    <div className=' w-full md:w-1/3'>
                        <HealthStatusCards />
                        <div className='flex items-center gap-1 justify-end mt-4'>
                            <span className='text-primary text-xs font-semibold'>Details</span>
                            <ArrowRight size={16} className='text-gray-400'/>
                        </div>
                    </div>
                </div>

                <div className='bg-background rounded-3xl'>
                    <ActivityChart />
                </div>
            </div>

            <div className='right md:w-1/2 bg-background p-4 md:px-10 py-8 mt-8 md:mt-0'>
                <div>
                    <CalendarUI/>
                </div>

                <div className='my-10'>
                    <ScheduleCards/>
                </div>

                <div className='w-full'>
                    <UpcomingScheduleCards/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard