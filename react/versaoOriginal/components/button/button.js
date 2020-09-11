import React from 'react'

export default props => {

    return (
        <div className={`btn ${props.setClass}`}>
            <a href={props.link}>
                <i>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.02963 6.88563H15.2696V8.73706H9.02963V15.1485H7.00677V8.73706H0.732483V6.88563H7.00677V0.508484H9.02963V6.88563Z" fill="white"/>
                    </svg>
                </i>
                <span>{props.label}</span>
            </a>
        </div>
    )
}
