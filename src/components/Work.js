import * as React from "react";
import WorkCard from "./Workcard";

import Workimg from "./works-portfolio.png"
import "./Work.css"

const Work = ()=>(
    <div class="works-back">
        <div><p className="Work">Works</p></div>
        <WorkCard className="WorkCard" file={Workimg} text={"このサイト"}/>
    </div>
)

export default Work