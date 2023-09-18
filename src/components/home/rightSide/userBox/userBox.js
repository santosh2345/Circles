import { Avatar, Typography } from '@mui/material'
import { DotsThreeOutlineVertical } from 'phosphor-react'
import React from 'react'
import { userData } from '../../../../data/userProfile'

const UserBox = () => {
  return (
    <div className='flex flex-row justify-between items-center mt-3'>
        <div className='flex flex-row w-3/5 justify-around'>
            <div>
                {/* avatar */}
                <Avatar src={userData.avatar} alt={userData.username} sx={{ width: 50, height: 50 }}/>

            </div>
            <div className='flex flex-col'>
                {/* userDetails */}
                <Typography variant='body' className='font-bold' >
                    {userData.username}
                </Typography>
                <Typography variant='caption'>
                    {userData.nickName}

                </Typography>
            </div>
        </div>
        <DotsThreeOutlineVertical size={20} weight="fill" className='w-1/5' />
    </div>
  )
}

export default UserBox