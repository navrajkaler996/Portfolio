import Card from '../components/Card';

const ContactMe = () => {
    const handleClick = () => {

        const element = document.getElementById("education");
        element?.scrollIntoView({behavior: "smooth"})
      }
      return (
        <>
        <div id="contactme" >
    
        </div>
          <div className="contactme" >
            {/* <Card heading="contact me" handleClick={handleClick}/> */}
          </div>
      </>
      )
}

export default ContactMe