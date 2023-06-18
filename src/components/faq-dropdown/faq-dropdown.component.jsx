import { useState } from "react";
import "./faq-dropdown.styles.scss";

const FaqDropdown = ({ faq, index }) => {
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  const toggleIsFaqOpen = () => setIsFaqOpen(!isFaqOpen);

  return (
    <div className={"faq" + (isFaqOpen ? " open" : "")} key={index}>
      <div className="faq-question" onClick={toggleIsFaqOpen}>
        {faq.question}
      </div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
};

export default FaqDropdown;
