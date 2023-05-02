
import DownArrow from "../assets/down-arrow.png";
import CardEducationContext from "./CardEducationContext";
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
        {heading === "education" && <CardEducationContext />}
        <div className="card__go-down" onClick={handleClick}>
          <img src={DownArrow} className="card__down-arrow" />
        </div>
    </div>
  )
}

export default Card