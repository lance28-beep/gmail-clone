import React from 'react'
import './SideOption.css'

function SideOption({ Icon, title, number, selected }) {
  return (
    <div className={`sideOption ${selected && 'sidebar-Option--active'}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  )
}

export default SideOption
