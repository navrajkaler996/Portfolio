import {  useState } from "react"
import ExperienceData from "../data/ExperienceData";

const CardExperienceContent = () => {

  const [style, setStyle] = useState("");
  const [selected, setSelected ] = useState<{company: String, designation: String, dates: String, city: String, country: String, description: String, details: Array<String>}>()

  const handleClick = (value: string) => {
    const selectedExperience = ExperienceData.find((d) => d.company == value )
    setSelected(selectedExperience)
    setStyle("card__experience-details card__experience-details--down")
  }  

  const handleClose = () => {
    setStyle("");
  }

  return (
    <div className="card__content--experience">
        <div className="card__vt-line">
          <div className="card__vt-line-circle">
            <p className="first"> <span className="position"> Trainee </span><br/> <span className="company"> Infosys</span><br/><span className="date">Feb, 2019 - Aug, 2019 </span> <br/> <span className="know-more" onClick={()=> handleClick("Telus international")}>know more...</span></p>
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
            <p id="check-next" onClick={() => handleClose()} >x</p>
            <p>{selected?.designation}</p>
            <p> {selected &&  `${selected?.company}, ${selected?.city}, ${selected?.country}`}</p>
            <p>{selected?.dates}</p>
            <p className="description">
              {selected?.description}
            </p> 
            <ul>
              {selected?.details?.map((d,i) => <li key={i}>{d}</li>)}    
            </ul> 
          </div>
        </div>
    </div>
  )
}

export default CardExperienceContent