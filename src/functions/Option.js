import React from 'react'

export default function Option(props) {
    return (
        <div className="opt">
            <button>{props.buttonName} <i className="fas fa-plus"></i></button>
            
        </div>
    )
}
