import React from 'react'
import Card from '../components/Card'

const Experience = () => {

  const handleClick = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({behavior: "smooth"})
  }
  return (
    <>
    <div id="experience"></div>
    <div className="experience">
      <Card heading="Experience" handleClick={handleClick}/>
    </div>
    </>
  )
}

export default Experience