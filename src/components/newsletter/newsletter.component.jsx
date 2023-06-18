import { useState } from "react";
import Button from "../button/button.component";
import "./newsletter.styles.scss";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="sub-section">
      <div className="wrapper">
        <div className="news-form-container">
          <div className="left-sub">
            <h2>Subscribe!</h2>
            <hr className="seperator" />
            <p>Stay up to date with perks and exclusive discount</p>
          </div>
          <div className="right-sub">
            <form onSubmit={submitHandler}>
              <input
                className="email-box"
                type="email"
                aria-label="email"
                placeholder="Your email Address"
                onChange={emailChangeHandler}
                value={email}
                required
              />
              <div className="btn-left">
                <Button>Subscribe</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
