import * as React from "react"
import PropTypes from "prop-types"

import "./About.css"

import Box from "./detailbox"

const About =()=>(
    <div className="about-back">
        <div id="about"><p className="About">About</p></div>
        <Box title={"My Profile"} sent={"Dammy text"}></Box>
        <Box title={"Skils"} sent={"Reactを勉強中です。"}></Box>
    </div>
)

export default About