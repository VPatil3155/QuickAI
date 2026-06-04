import React from 'react'
import  { useUser,useClerk } from '@clerk/react'

const Sidebar = ({sidebar,setSidebar}) => {

    const {user}=useUser()
    const {signOut, openUserProfile}=useClerk();

  return (
    <div className={`w-60 bg-white border-r border-gray-200
     flex flex-col justify-between items-center max-sm:absolute top-14
      bottom-0 ${sidebar ? 'translate-x-0' : 'max-sm:-translate-x-full'} transition-all duration-300 ease-in-out`}>
      <div className='w-full my-7'>
        <img src={user?.imageUrl} alt='User avatar' className='w-13 mx-auto
         rounded-full' />
         <h1 className='mt-1 text-center'>{user?.fullName}</h1>
      </div>
    </div>
  )
}

export default Sidebar
