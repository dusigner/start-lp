import React from 'react'
import ReactDOM from 'react-dom';
import './title.global.css'

export default props => {
    
    var txtmf = props.textMF,
        txtms = props.textMS,
        txtdf = props.textDF,
        txtds = props.textDS,
        markupM,
        markupD;

    txtmf != undefined && txtms != undefined
    ? markupM = (
        <span className="mobile">
            <h2>{txtmf}</h2>
            <br></br>
            <h2>{txtms}</h2>
        </span>
    )
    : markupM = (
        <span className="mobile">
            <h2>{txtmf}</h2>
        </span>
    )

    txtdf != undefined && txtds != undefined
    ? markupD = (
        <span className="desktop">
            <h2>{txtdf}</h2>
            <br></br>
            <h2>{txtds}</h2>
        </span>
    )
    : markupD = (
        <span className="desktop">
            <h2>{txtdf}</h2>
        </span>
    )


    
    return (
        <div className={`${props.setClass} edge-title`}>
                { markupM }
                { markupD }
        </div>
    )
}
