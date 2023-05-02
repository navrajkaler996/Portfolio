import React from 'react'
import Card from '../components/Card'

const Education = () => {

  const handleClick = () => {
    const element = document.getElementById("experience");
    element?.scrollIntoView({behavior: "smooth"})
  }
  return (
    <>
    <div id="education"> </div>
    <div className="education">
      <Card heading="education" handleClick={handleClick}/>
    </div>
    </>
  )
}

export default Education