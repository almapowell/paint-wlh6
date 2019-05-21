import React from 'react'

export default function ColorPicker(props) {
  return (
    <div>
      <button 
        onClick={() => props.handleColorClick('blue')}>blue</button>
      <button onClick={() => props.handleColorClick('green')}>green</button>
      <button onClick={() => props.handleColorClick('brown')}>brown</button>
      <button onClick={() => props.handleColorClick('red')}>red</button>
      <button onClick={() => props.handleColorClick('purple')}>purple</button>
      <button onClick={() => props.handleColorClick('yellow')}>yellow</button>
      <button onClick={() => props.handleColorClick('pink')}>pink</button>
    </div>
  )
}