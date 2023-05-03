import { useEffect, useState } from "react"


const CardExperienceContent = () => {

  const [style, setStyle] = useState("")

  // useEffect(()=> {

  //   setTimeout(() => {

  //     setStyle("card__experience-details")
      
  //   }, 5000);

  // },[])
  return (
    <div className="card__content--experience">

        <div className="card__vt-line">
          <div className="card__vt-line-circle">
            <p className="first"> <span className="position"> Trainee </span><br/> <span className="company"> Infosys</span><br/><span className="date">Feb, 2019 - Aug, 2019 </span> <br/> <span className="know-more" onClick={()=> setStyle("card__experience-details card__experience-details--down")}>know more...</span></p>
          </div>
          <div className="card__vt-line-circle">
          <p className="second"><span className="position"> Systems Engineer</span> <br/><span className="company">Infosys</span><br/><span className="date">Aug 2019 - Aug, 2021 </span> <br/> <span className="know-more" onClick={()=> setStyle("card__experience-details card__experience-details--top")}>know more...</span></p>
          </div>
          <div className="card__vt-line-circle">
          <p className="third"><span className="position"> Software Engineer </span><br/><span className="company">Bacancy</span><br/><span className="date">Aug 2021 - Apr, 2022 </span> <br/> <span className="know-more" onClick={()=> setStyle("card__experience-details card__experience-details--top")}>know more...</span></p>
          </div>
          <div className="card__vt-line-circle">
          <p className="forth"><span className="position"> Sr. App developer</span> <br/> <span className="company">Telus International</span><br/><span className="date">Apr 2022 - Dec, 2022 </span> <br/> <span className="know-more" onClick={()=> setStyle("card__experience-details card__experience-details--down")}>know more...</span></p>
          </div>
          
        </div>
        <div className={style} style={style?.length ===0 ? {display: "none"} : {}}>

          <div>
          <p>Senior Application developer</p>
          <p> Telus Internationa, Noida, India</p>
          <p>April 4, 2022 - Decemeber 23, 2022</p>
          <p className="description">
             I worked on a single react-based web application which was started from scratch. We used webpack and babel along with TypeScript to setup this project. Redux was used for state management while Sass was used for CSS. 
           </p> 
            <ul>
              <li>Worked as a full-stack developer.</li>
              <li>Used React.js along with Redux and Sass on frontend.</li>
              <li>Used fastify and node.js on backend.</li>
              <li>Worked in a team of 12; 9 developers and 3 testers.</li>
              <li>Regularly communicated with the product owners.</li>
              <li>Regularly contributed in the project planning.</li>
              <li>Headed a sub-team of 4.</li>
     
            </ul> 
          </div>
         
         

        </div>
    
    </div>
  )
}

export default CardExperienceContent