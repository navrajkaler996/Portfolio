
const CardContactMeContent = () => {
  return (
    <div className="card__content--contactme">
      {/* <h1>Send me an email</h1> */}
      <form action="" className="card__form">
        <div>
          <p>
            <label htmlFor="">Enter your email address:</label><br/>
            <input type="email" placeholder="Type your email" />
          </p>
          <p>
            <label htmlFor="">Enter the subject:</label><br/>
            <input type="email" placeholder="Type your email" />
          </p>
          <p>
            <input type="submit" value="Send email" />
          </p>
        </div>
        <div>
          <p>
            <label htmlFor="">Enter the content of the email:</label><br/>
            <textarea rows={15} cols={50} placeholder="Type your email" />
          </p>
        </div>
      </form>
    </div>
  );
};

export default CardContactMeContent;
