import Anotomy from '@assets/Anotomy.png';

const AnatomySection = () => {
  return (
    <div className='w-full flex justify-center bg-background py-0 md:py-6 rounded-3xl'>
       <img src={Anotomy} alt="Anatomical illustration (human body)" className='h-[320px] object-fit'/>
    </div>
  )
}

export default AnatomySection