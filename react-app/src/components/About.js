import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import './About.css'

export default function About() {
  return (
    <div className="about-us">
      <p>About us</p>
      <ul>
        <li><a href="https://github.com/AlexanderSMin">Alexander Min</a></li>
        <li><a href="https://github.com/bandrewi">Andrew Bui</a></li>
        <li><a href="https://github.com/jadenlambino">Jaden Lambino</a></li>
        <li><a href="https://github.com/pcricket10">Philip McCrickard</a></li>
      </ul>

    </div>

  )
}
