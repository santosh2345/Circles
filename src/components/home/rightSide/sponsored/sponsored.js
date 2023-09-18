import { Typography } from '@mui/material'
import React from 'react'
import Sponsores from './sponsores/sponsores'

const Sponsored = () => {
  return (
    <div>
        <div className='mt-3'>
            {/* sponsored title */}
            <Typography variant='subtitle' className='w-3/5'>
                Sponsored

            </Typography>
        </div>
        <Sponsores />
        <div className='w-full flex justify-center mt-3 items-center'>
          
          <button>View All</button>
      </div>

    </div>
  )
}

export default Sponsored