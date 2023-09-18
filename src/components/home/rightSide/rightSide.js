import React from 'react'
import UserBox from './userBox/userBox'
import Notifications from './notifications/notifications'
import { Divider } from '@mui/material'
import Sponsored from './sponsored/sponsored'

const RightSide = () => {
  return (
    <div className='RightSide overflow-y-scroll p-3 w-2/6 '>
        {/* search Tab */}
        <div className='p-2 w-full'>
            <input placeholder='Search' className='w-full p-2 pl-8 text-sm flex border rounded-3xl outline-none bg-slate-200'/>
        </div>
        <div>

        <UserBox />
        <Notifications />
        <Divider sx={{borderBottomWidth: 1, borderBottomColor:"black"}} />
        <Sponsored />
        <Divider sx={{borderBottomWidth: 1, borderBottomColor:"black"}} />
        </div>



    </div>
  )
}

export default RightSide