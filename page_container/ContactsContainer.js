import classes from "../styles/ContactsContainer.module.scss";
function ContactsContainer() {
  const formHandler = (event) => {
    event.preventDefault()
    const name = document.getElementById('name').value;
    const contactNumber = document.getElementById("contactNumber").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const url = `https://wa.me/8800160543?text=Name: ${name}%0aE-mail: ${email}%0aContact Number: ${contactNumber}%0aMessage: ${message}`
    window.open(url, "_blank").focus();
  }
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.card}>
          <div className={classes.formContainer}>
            <form onSubmit={formHandler} className={classes.form}>
              <fieldset className={classes.fieldset}>
                <legend>Name</legend>
                <input id="name" type="text" required />
              </fieldset>
              <fieldset className={classes.fieldset}>
                <legend>Contact Number</legend>
                <input id="contactNumber" type="number" required />
              </fieldset>
              <fieldset className={classes.fieldset}>
                <legend>E-mail</legend>
                <input id="email" type="email" required />
              </fieldset>
              <fieldset className={classes.fieldset}>
                <legend>Message</legend>
                <textarea id="message" required></textarea>
              </fieldset>
              <button className={classes.submit}>Send Message</button>
            </form>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.contactContainer}>
            <div className={classes.cardsBackground}></div>
            <div className={classes.cards} id={classes.instagram}>
              <a
                className={classes.logoLink}
                href="https://www.instagram.com/ritik_negi2002/"
                target="_blank"
              ></a>
              <span className={classes.QR_Link}></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactsContainer;
