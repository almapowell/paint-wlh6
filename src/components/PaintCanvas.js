import React, { Component } from 'react'

import ColorPicker from './ColorPicker'
import Square from './Square'

export default class PaintCavnas extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      selectedColor: 'blue',
      mouseDown: false
    }
  }

  changeSelectedColor = color => {
    this.setState({
      selectedColor: color
    })
  }

  handleMouseDown = () => {
    this.setState({ mouseDown: true })
  }

  handleMouseUp = () => {
    this.setState({ mouseDown: false })
  }

  draw() {
    let squares = []

    for (let i = 0; i < 5000; i++) {
      squares.push(<Square selectedColor={this.state.selectedColor} mouseDown={this.state.mouseDown}/>)
    }

    return squares
  }

  render() {
    return (
      <div>
        <ColorPicker handleColorClick={this.changeSelectedColor}/>
        <div 
          onMouseDownCapture={this.handleMouseDown}
          onMouseUpCapture={this.handleMouseUp}
          style={{ display: 'flex', flexWrap: 'wrap' }}>
          {this.draw()}
        </div>
      </div>
    )
  }
}