import { useEffect, useState } from 'react'

const Header = () => {
    const [showLines, setShowLines] = useState({
        first: false,
        second: false,
        third: false
    })

  
    useEffect(() => {
        setTimeout(() => {

            setShowLines({
                ...showLines,
                first: true
            })

        }, 3500)

        setTimeout(() => {

            setShowLines({
                ...showLines,
                first: true,
                second: true,
                
            })

        }, 6000)

        setTimeout(() => {

            setShowLines({
                ...showLines,
                first: true,
                second: true,
                third: true
                
            })

        }, 8500)
    },[])

    const handleScroll = () => {
        
        const element = document.getElementById("skills")
        element?.scrollIntoView({behavior: "smooth"})
     
    }

  return (
    <div className="header">
        <div className="header__navigation">
            <ul className="header__nav">
                <li className="header__nav-link">Home</li>
                <li className="header__nav-link">Experience</li>
                <li className="header__nav-link">Skills</li>
                <li className="header__nav-link">Education</li>
                <li className="header__nav-link">Projects</li>
            </ul>
        </div>

        <div className="header__welcome">
            <p className="header__line header__line--1 header__typing header__typing--1"> <span className="vs-code__html"> &lt;h1&gt; </span> Hello there! <span className="vs-code__html"> &lt;/h1&gt; </span></p>
            { showLines.first && <p className="header__line header__line--2 header__typing  header__typing--2"><span className="vs-code__html">&lt;p&gt;</span>  My name is Navraj Singh Kaler <span className="vs-code__html">&lt;/p&gt;</span></p>}
            { showLines.second && <p className="header__line header__line--3 header__typing  header__typing--3"><span className="vs-code__html">&lt;p&gt;</span>  I am a full-stack web developer <span className="vs-code__html">&lt;/p&gt;</span></p>}
            { showLines.third && <p className="header__line header__line--4 header__typing  header__typing--4"><span className="vs-code__html">&lt;p&gt; </span> Click on the button below <span className="vs-code__html">&lt;/p&gt;</span></p>}

        </div>

         <button className="header__button" onClick={handleScroll}>
             
             explore
         </button>

         {/* <div className="connection"></div> */}
    </div>
  )
}

export default Header