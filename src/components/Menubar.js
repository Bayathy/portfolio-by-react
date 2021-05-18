import * as React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-scroll';

import "./menubar.css"



const Menubar = () =>(
    <div className="menubar">
        <Link className="menucontainar"
             activeClass="active"
             to="home"
             spy={true}
             smooth={true}
             offset={-70}
            duration= {800}>Home</Link>
        <Link className="menucontainar"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {800}>About</Link>
         <Link className="menucontainar"
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {800}>Works</Link>
         <Link className="menucontainar"
            activeClass="active"
            to="title"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {800}>Histry</Link>
    </div>
)

export default Menubar