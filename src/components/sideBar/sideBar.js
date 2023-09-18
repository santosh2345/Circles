import React from 'react'
import Logo from "../../assets/logo.png"
import Menu from './menu'

const SideBar = () => {
  return (
    <div className=' w-1/5 h-full flex flex-col gap-5 p-2 justify-between'>
      {/* logo */}
      <img src={Logo} width={100} height={290} className=''/>

      {/* menu  container*/}

      <div className='menu flex mt-5 overflow-hidden '>

        < Menu />

      </div>
      </div>
  )
}

export default SideBar