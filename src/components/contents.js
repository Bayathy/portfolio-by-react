import * as React from "react"
import Home from"./Home"
import About from "./About"
import Work from"./Work"

import "./contents.css"

const contents = () =>(
    <diV>
    <Home id="home"/>
    <About/>
    <Work id="works"/>
    </diV>
)

export default contents