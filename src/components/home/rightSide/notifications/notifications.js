import React from 'react'
import Notification from './notification/notification'
import { Typography } from '@mui/material'
import { BellRinging } from 'phosphor-react'

const Notifications = () => {
  return (
    <div className='flex flex-col mt-4 pl-3 pr-3'>
        <div className='flex flex-row justify-between items-center'>
            {/* title and the bell */}
            <Typography variant='subtitle' className='w-3/5'>
                Notifications

            </Typography>
            <BellRinging size={22} className='w-1/5' />
            
        </div>
        {/* notifications */}
        <Notification />

        <div className='w-full flex justify-center mt-3 items-center'>
          
            <button>View All</button>
        </div>

    </div>
  )
}

export default Notifications