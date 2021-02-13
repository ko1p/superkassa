import React from "react"
import './OnButton.css'

export const OnButton = ({onToggleButton}) => (
    <button className='btn btn_on' onClick={onToggleButton}>ON</button>
)