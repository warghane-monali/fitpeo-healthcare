import { Bell, Plus, Search } from 'lucide-react';
import React from 'react';
import Man from "../assets/man-light-skin-tone-svgrepo-com.svg"

const SearchBar: React.FC = () => {
  return (

  <div className='flex justify-between gap-2 md:gap-0 w-full '>

    <div className="flex items-center gap-4 ">
    {/* Search Bar */}
      <div className="flex items-center gap-2 flex-grow rounded-xl border border-gray-200 px-4 py-2 w-40 md:w-100">
        <Search size={16} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="outline-none border-none bg-transparent w-full placeholder-gray-400 text-sm"
          />
      </div>

    {/* Notification Icon with Border */}
      <div className="h-10 w-10 flex items-center justify-center border border-gray-200 rounded-xl cursor-pointer">
        <Bell size={20} className="text-primary fill-primary" />
      </div>
    </div>

    <div className='flex gap-2 md:gap-4'>
        <div className='bg-ternary p-2 rounded-xl'>
          <img src={Man} className='w-5'/>
          {/* <CircleUserRound size={22} className='text-primary' /> */}
        </div>
        <div className='bg-primary p-2 rounded-xl'>
          <Plus size={22} color="white" />
        </div>
      </div>
</div>
  );
};

export default SearchBar;
