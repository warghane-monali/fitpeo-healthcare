import Anotomy from '@assets/Anotomy.png';
import Heart from "../assets/heart-svgrepo-com.svg";
import Scan from "../assets/scan-it-svgrepo-com.svg";
import Leg from "../assets/leg-svgrepo-com.svg"

const AnatomySection = () => {

  return (
<div className='relative w-full flex justify-center bg-background py-0 md:py-6 rounded-3xl'>

  {/* Human Body Image */}
  <img src={Anotomy} alt="Anatomical illustration" className='h-[360px] object-contain' />

  {/* Heart Overlay */}
  <div className='absolute top-[22%] right-0 flex items-center gap-2'>
    <img src={Scan} alt="Scan Icon" className='w-10 h-10' />
    <div className='flex items-center bg-primary text-white rounded-md py-1 px-2 gap-2 shadow-md'>
      <img src={Heart} className='w-5 h-5' />
      <span className='text-xs'>Healthy Heart</span>
    </div>
  </div>

  {/* Leg Overlay */}
  <div className='absolute bottom-[26%] left-[5%] flex items-center gap-2'>
    <div className='flex items-center bg-cyan-400 text-white rounded-md py-1 px-2 gap-2 shadow-md'>
      <img src={Leg} className='w-5 h-5' />
      <span className='text-xs'>Healthy Leg</span>
    </div>
    <img src={Scan} alt="Scan Icon" className='w-10 h-10' />
  </div>

</div>

  )
}

export default AnatomySection