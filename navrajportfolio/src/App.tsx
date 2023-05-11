import './App.css'
import Header from './components/Header'
import ContactMe from './pages/ContactMe'
import Education from './pages/Education'
import Experience from './pages/Experience'

import Projects from './pages/Projects'
import Skills from './pages/Skills'


function App() {


  return (
    <div id="wrapper">
      <Header />
      <Skills />
      <Education />
      {/* <Experience />
      <Projects />
      <ContactMe /> */}

    </div>
  )
}

export default App
