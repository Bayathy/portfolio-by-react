import * as React from "react"
import PropTypes from "prop-types"

import "./About.css"

import Box from "./detailbox"

const About =()=>(
    <div className="about-back">
        <div><p className="About">About</p></div>
        <Box title={"My Profile"} sent={"鈴鹿高専電子情報工学科二年生です。"}></Box>
        <Box title={"Skils"} sent={"Reactを勉強中です。自信のあるスキルなどはありませんが、これからの人生をプログラミングに捧げるつもりです。"}></Box>
    </div>
)

export default About