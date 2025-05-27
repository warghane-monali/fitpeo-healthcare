import  { Suspense } from 'react'
import { Outlet } from 'react-router'
import Sidebar from '@app/Sidebar';
import SearchBar from '@components/SearchBar';

const DashLayout = () => {

  return (
    <div className="min-h-screen flex relative">
    
     <aside className="invisible lg:visible fixed left-0 top-0 bottom-0 w-[16vw]">
        <Sidebar />
     </aside>

      <main className="lg:ml-[16vw] flex-1 flex flex-col h-screen overflow-hidden ">
        
        <div className='sticky top-0 z-10 px-6 py-4'>
          <SearchBar/>
        </div>
        
        <div className="flex-1 overflow-y-auto sm:px-6 md:px-0">
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      
      </main>
  </div>
  )
  
}

export default DashLayout