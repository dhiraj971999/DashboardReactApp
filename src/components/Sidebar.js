import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { IoMdHeartEmpty } from 'react-icons/io';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
    const {activeMenu, setActiveMenu} = useStateContext();
    const [isMobileDevice, setIsMobileDevice] = useState();


useEffect(()=>{
    let details = navigator.userAgent;
  
        /* Creating a regular expression 
        containing some mobile devices keywords 
        to search it in details string*/
        let regexp = /android|iphone|kindle|ipad/i;
  
        /* Using test() method to search regexp in details
        it returns boolean value*/
        setIsMobileDevice(regexp.test(details));
  
},[])

  return (
    <>
    <div>
        <div className='main-sidebar'>
            <div className='main-sidebar-header'>
                
                <SiShopware color="rgb(60, 248, 186)"/> <span>Shoppy</span>
                {/* <TooltipComponent content="Close" position="BottomRight"> */}
                <button className="main-closeButton" onClick={()=>setActiveMenu((prevActiveMenu)=>!prevActiveMenu)} ><MdOutlineCancel color="rgb(60, 248, 186)"/> </button>
                {/* </TooltipComponent> */}
            </div>
            <div className='sidebar-container'>
                {links.map((item)=>{
                   return( <div key={IoMdHeartEmpty.title} className="sidebar-content">
                        <p>{item.title}</p>
                        {item.links.map((subitem)=>{
                            return(
                                <Link to={`./${subitem.name}`} style={{ textDecoration: 'none' }}>
                            <p className="sidebar-subcontent" onClick={()=>isMobileDevice?setActiveMenu((activeMenu)=>!activeMenu):''}>{subitem.icon} <span>{subitem.name}</span></p></Link>
                            )}
                            )
                        }
                    </div>)
                })}
            </div>
        </div>
    </div>
    </>
  )
}

export default Sidebar
