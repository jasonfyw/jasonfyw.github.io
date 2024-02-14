import React from 'react'
import './DownArrow.css'

const DownArrow = () => {
    return (
        <svg className='arrows'>
            <path className='a1' d='M0 0 L15 16 L30 0'></path>
            <path className='a2' d='M0 20 L15 36 L30 20'></path>
            <path className='a3' d='M0 40 L15 56 L30 40'></path>
        </svg>
    )
}

export default DownArrow
