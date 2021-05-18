import * as React from "react"

import "./Workcard.css"

const WorkCard = (props) =>(
    <div className="worksample">
    <img src ={props.file} className="works-img"/>
    <p className="works-detail">{props.text}</p>
    </div>
)

export default WorkCard