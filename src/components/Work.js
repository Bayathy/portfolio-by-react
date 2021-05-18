import * as React from "react";
import WorkCard from "./Workcard";

import "./Work.css"

const Work = ()=>(
    <div class="works-back">
        <div><p className="Work">Work</p></div>
        <WorkCard className="WorkCard" file={""} text={"このサイト"}/>
    </div>
)

export default Work