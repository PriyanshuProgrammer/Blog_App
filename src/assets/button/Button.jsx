import React from 'react'
import './button.css'

const Button = ({ type,color ,work, width,bgcolor,...rest }) => {
  const hoverbgColor:string = bgcolor ? `#${bgcolor}` : '#fff';
  const hoverColor:string = color ? '#000' : '#fff'
  return (
    
      <button style={{ width, '--bg-hover-bgcolor': hoverbgColor, '--hover-color':hoverColor}as any} type={type} {...rest}>{work}</button>
    </div>
  )
}

export default Button