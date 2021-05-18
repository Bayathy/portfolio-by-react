import * as React from "react"
import PropTypes from "prop-types"

import "./About.css"

import Box from "./detailbox"

const About =()=>(
    <div className="about-back">
        <Box title={" About "} sent={"鈴鹿高専情報工学科二年生です。"}></Box>
        <Box title={"Skils"} sent={"Reactを勉強中です。自信のあるスキルなどはありませんが、これから一年間プログラミングに捧げるつもりです。"}></Box>
    </div>
)

export default About