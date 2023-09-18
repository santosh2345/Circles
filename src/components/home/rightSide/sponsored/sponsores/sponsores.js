import { faker } from '@faker-js/faker'
import { Typography } from '@mui/material'
import React from 'react'

const sponsores =[
    {
        image:faker.image.url(),
        title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        link:"www.sitename.com",
    },
    {
        image:faker.image.url(),
        title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        link:"www.sitename.com",
    },
    {
        image:faker.image.url(),
        title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        link:"www.sitename.com",
    },
   
]

const Sponsores = () => {
  return (
    <div className='flex flex-col gap-2 mt-5 pl-3'>
        {sponsores.map(({image,title,link})=>(
            <div className='flex flex-row gap-3 cursor-pointer items-center justify-center'>
                <img src={image} alt={title} height={85} width={105}/>
                <div className='text-xs'>
                    <Typography variant='subtitle2'>
                        {title}

                    </Typography>
                    <Typography variant='caption'>
                        {link}

                    </Typography>
                    </div>
                </div>
        ))}
    </div>
  )
}

export default Sponsores