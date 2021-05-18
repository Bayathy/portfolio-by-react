import * as React from "react"
import PropTypes from "prop-types"

import "./detailbox.css"

const Box = (props) =>(
    <div className="Box">
        <div className="Box-up">
            <p className="title">{props.title}</p>
        </div>
        <div className="Box-bottom">
            <p className="sentence">{props.sent}</p>
        </div> 
    </div>
)

export default Box