import React from "react"
import './OffButton.css'

export const OffButton = ({onToggleButton}) => (
    <button className='btn btn_off' onClick={onToggleButton}>OFF</button>
)