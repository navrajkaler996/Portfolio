
import Card from '../components/Card'

const Projects = () => {

  const handleClick = () => {
    const element = document.getElementById("contactme");
    element?.scrollIntoView({behavior: "smooth"})
  }
  return (
    <>
    <div id="projects"></div>
    <div className="projects">
      <Card heading="Projects" handleClick={() => handleClick()}/>
    </div>
    </>
  )
}

export default Projects