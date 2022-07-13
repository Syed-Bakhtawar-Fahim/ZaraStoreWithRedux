import React from 'react'
import "./Heading.css"

export const Heading = (props) => {
    return (
        <>
            <div className='Heading'>
                <h1 className='Heading-h1'>{props.heading}</h1>
            </div>
        </>
    )
}
