import Card from '../components/Card'

const Skills = () => {

  const handleClick = () => {

    const element = document.getElementById("education");
    element?.scrollIntoView({behavior: "smooth"})
  }
  return (
    <>
    <div id="skills" >

    </div>
      <div className="skills" >
        <Card heading="skills" handleClick={handleClick}/>
      </div>
  </>
  )
}

export default Skills