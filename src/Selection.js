import React from 'react'
import './Selection.css'
const Selection = ({ Icon, title, color, selected }) => {
  return (
    <div
      className={`selected ${selected && 'section--selected'}`}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`,
      }}
    >
      <Icon />
      <h3>{title}</h3>
    </div>
  )
}

export default Selection
