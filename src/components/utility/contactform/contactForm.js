import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitch } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import "./contactform.scss";
import "../button/button.scss";

const ContactForm = () => {
  return (
    <section className="section contact" id="contact">
      <h2 className="section__title">Skontaktuj się z nami</h2>
      <div className="contact__wrapper">
        <form
          className="contact__form form"
          method="post"
          action="https://formsubmit.co/narondziewlewo.oficial@gmail.com"
        >
          <label for="nickname" className="form__label">
            <p className="form__label--text">Nick</p>
            <input
              type="text"
              id="nickname"
              name="nickname"
              className="form__input"
            />
          </label>
          <label for="mail" className="form__label">
            <p className="form__label--text">E-mail</p>
            <input type="text" id="mail" name="mail" className="form__input" />
          </label>
          <label for="message" className="form__label">
            <p className="form__label--text">Wiadomość</p>
            <textarea rows="10" cols="50" className="form__input" />
          </label>
          <input type="submit" value="Wyślij" className="button yellow" />
        </form>
        <section className="contact__socialmedia">
          <div className="media">
            <FontAwesomeIcon icon={faDiscord} className="media__icon" />
            <a
              className="media__anchor"
              href="https://discord.com/invite/jdPm4TvphH"
              target="_blank"
            >
              Discord
            </a>
          </div>
          <div className="media">
            <FontAwesomeIcon icon={faTwitch} className="media__icon" />
            <a
              className="media__anchor"
              href="https://www.twitch.tv/darrener"
              target="_blank"
            >
              Twitch
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ContactForm;
