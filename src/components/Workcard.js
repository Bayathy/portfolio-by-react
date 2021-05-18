import * as React from "react"

import "./Work.css"

const WorkCard = (props) =>(
    <div className="workssample">
    <img src ={props.file} className="works-img"/>
    <p className="works-detail">{props.text}</p>
    </div>
)

export default WorkCard