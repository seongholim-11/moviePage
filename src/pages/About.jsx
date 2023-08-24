import React from 'react'
import { useParams, useLocation  } from 'react-router-dom'

const About = () => {
    const { about } = useParams();
    const location = useLocation();
    console.log("🚀 ~ file: About.jsx:7 ~ About ~ location:", location)

  return (
    <div>{about}</div>
  )
}

export default About