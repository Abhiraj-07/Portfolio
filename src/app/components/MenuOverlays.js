import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'

const MenuOverlays = ({links}) => {
  return (
<ul  className='flex flex-col py-4 items-center'>
{ links.map((link,index)=>(
    <li key={index} className=''>

    <NavLink path={link.path} title={link.title}></NavLink>
    </li>
))
}
</ul>

)
}

export default MenuOverlays