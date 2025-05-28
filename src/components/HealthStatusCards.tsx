
import { healthStatusData } from '@data/healthData';
import { ProgressBar } from './ProgressBar';
const HealthStatusCards = () => {
  
return (
    <div className='flex flex-col gap-4'>
      {
        healthStatusData && healthStatusData?.map((itm, index)=>{
          const {image, bodyPart, date, range} = itm;

       
       return(
            <div key={index} className="bg-background rounded-3xl p-4 w-full max-w-xs">
              <div className='flex items-center gap-4'>
                <img src={image} alt={bodyPart} className="w-8"/>
                <h3 className="font-semibold text-l text-primary">{bodyPart}</h3>
              </div>

              <p className="text-gray-400 text-xs mt-3 mb-2">Date: {date}</p>
              <ProgressBar range={range}/>
            </div>
        )}
      )
      }
    </div>
  )
}

export default HealthStatusCards;