import { useState } from "react";

const Contact = () => {
  const [isCopy, setIsCopy] = useState(false);

  const copyHandler = async () => {
    try {
      await navigator.clipboard.writeText("oktayshakirov@gmail.com");

      setIsCopy(true);
      setTimeout(() => {
        setIsCopy(false);
      }, 1000);
    } catch (error) {
      setIsCopy(false);
    }
  };
  return (
    <>
      <article className="contact active" data-page="contact">
        <header>
          <h2 className="h2 article-title">Contact</h2>
        </header>

        <div className="content-card">
          <h3 className="h3 form-title" align="center">
            Email:
          </h3>
          <div className="container">
            <div className="email-field">
              <div className="email-text">oktayshakirov@gmail.com</div>
              <button className="copy-button" onClick={copyHandler}>
                {isCopy ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </div>
        <br />

        <div className="content-card">
          <h3 className="h3 form-title" align="center">
            Schedule Video Call with me:
          </h3>
          <br />
          <center>
            <a
              href="/"
              onclick="Calendly.initPopupWidget({url: 'https://calendly.com/oktayshakirov/30min?hide_landing_page_details=1&hide_gdpr_banner=1'});return false;"
            >
              <img
                src="https://oktayshakirov.com/assets/images/calendar.png"
                alt=""
              />
            </a>
          </center>
        </div>
        <br />

        <div className="content-card">
          <h3 className="h3 form-title" align="center">
            Socials:
          </h3>

          <ul className="social-list">
            <li className="social-item">
              <a
                href="https://github.com/oktayshakirov"
                className="socials-item"
              >
                <img
                  src="	https://oktayshakirov.com/assets/images/socials/github.png"
                  alt=""
                />
              </a>
            </li>

            <li className="social-item">
              <a
                href="https://www.linkedin.com/in/oktayshakirov"
                className="socials-item"
              >
                <img
                  src="https://oktayshakirov.com/assets/images/socials/linkedin.png"
                  alt=""
                />
              </a>
            </li>

            <li className="social-item">
              <a
                href="https://www.instagram.com/oktay.shakirov/"
                className="socials-item"
              >
                <img
                  src="https://oktayshakirov.com/assets/images/socials/instagram.png"
                  alt=""
                />
              </a>
            </li>

            <li className="social-item">
              <a
                href="https://twitter.com/oktayshakirov"
                className="socials-item"
              >
                <img
                  src="https://oktayshakirov.com/assets/images/socials/twitter.png"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
        <br />

        <div className="content-card">
          <h3 className="h3 form-title" align="center">
            Support my work:
          </h3>
          <br />
          <center>
            <p className="about-text">
              Your support fuels my development journey! With every small
              donation, you contribute to hostings, domains and other essential
              costs. All my work is open source and free for everyone to use.{" "}
            </p>
          </center>
          <center>
            <a
              href="https://www.buymeacoffee.com/oktayshakirov"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="	https://oktayshakirov.com/assets/images/coffee-sponsort.png"
                alt="Buy me a coffee"
                className="support"
              />
            </a>
          </center>
          <br />
          <center>
            <a
              href="https://github.com/sponsors/oktayshakirov"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://oktayshakirov.com/assets/images/github-sponsors.png"
                alt="Sponsor on GitHub"
                className="support"
              />
            </a>
          </center>
          <br />
          <center>
            <a
              href="https://www.paypal.com/paypalme/OShakirov"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://oktayshakirov.com/assets/images/paypalme.png"
                alt="PayPal Me"
                className="support"
              />
            </a>
          </center>
        </div>
      </article>
    </>
  );
};

export default Contact;
