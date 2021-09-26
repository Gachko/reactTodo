import React from 'react'
import './Empty.component.scss'

interface IEmpty {
    text: string
}

export const Empty: React.FC<IEmpty> = ({
    text
}) => {
    return (
        <div className="empty">
            <h3>{text}</h3>
        </div>
    )
}
