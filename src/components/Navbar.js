import React, { useEffect } from 'react';
import './Navbar.css'
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft, BsChatLeftText } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {BsPersonSquare} from 'react-icons/bs';

import avatar from '../data/avatar.jpg';
// import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const Navbar = () => {
    const {activeMenu, setActiveMenu} = useStateContext();
    
  return (
    <>
        <div className="main-navbar" style={{width:`${activeMenu?'73vw':'98vw'}`}}>
            <div className="menu-icon">
      <AiOutlineMenu color='rgb(60, 248, 186)' onClick={()=>setActiveMenu((prevActiveMenu)=>!prevActiveMenu)}/>
      </div>
      <div className='icons'>
      {/* <AiOutlineMenu color='blue' className='icons'/> */}
      <BsChatLeftText color='rgb(60, 248, 186)' />
      <RiNotification3Line color='rgb(60, 248, 186)'/>
      <BsPersonSquare color='rgb(60, 248, 186)'/>
    </div>
    </div>
    </>
  )
}

export default Navbar
