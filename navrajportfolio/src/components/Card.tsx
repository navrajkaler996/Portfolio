
import DownArrow from "../assets/down-arrow.png";
import CardContactMeContent from "./CardContactMeContent";
import CardEducationContent from "./CardEducationContent";
import CardExperienceContent from "./CardExperienceContent";
import CardSkillsContent from "./CardSkillsContent";

type CardProps = {
    heading: string;
    handleClick: Function
  };
const Card = ({heading, handleClick}: CardProps) => {
  return (
    <div className="card">
        <div className="card__heading">{heading}</div>
        {heading === "skills" && <CardSkillsContent />}
        {heading === "education" && <CardEducationContent />}
        {heading === "experience" && <CardExperienceContent />}
        {heading === "contact me" && <CardContactMeContent />}
        <div className="card__go-down" onClick={() => handleClick()}>
          <img src={DownArrow} className="card__down-arrow" />
        </div>
    </div>
  )
}

export default Card