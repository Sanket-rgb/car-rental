import Image from "next/image";
import { useState } from "react";
import classes from "./FAQSection.module.css";
import { accordianData } from "@/styles/Store/AccordianData";
const FAQSection = () => {
  const [accordian, setaccordian] = useState("None");

  const setAccordian = (num) => {
    if (num === accordian) {
      setaccordian("None");
    } else {
      setaccordian(num);
    }
  };

  return (
    <section className={classes["faq-section"]}>
      <div className={classes.container}>
        <div className={classes["faq-content"]}>
          <div className={classes["faq-content__title"]}>
            <h5>FAQ</h5>
            <h2>Frequently Asked Questions</h2>
            <p>
              Frequently Asked Questions About the Car Rental Booking Process on
              Our Website: Answers to Common Concerns and Inquiries.
            </p>
          </div>
          <div className={classes["faq-content__all-questions"]}>
            <div
              onClick={() => setAccordian("0")}
              className={classes["faq-content__all-questions-box"]}
            >
              <p>{accordianData[0].que}</p>
              <Image
                width={17}
                height={20}
                alt="down-arrow"
                src="/Images/SVG/down.svg"
              ></Image>
            </div>
            {accordian === "0" && (
              <div className={classes["question-description"]}>
                <p>{accordianData[0].ans}</p>
              </div>
            )}

            <div
              onClick={() => setAccordian("1")}
              className={classes["faq-content__all-questions-box"]}
            >
              <p>{accordianData[1].que}</p>
              <Image
                width={17}
                height={20}
                alt="down-arrow"
                src="/Images/SVG/down.svg"
              ></Image>
            </div>
            {accordian === "1" && (
              <div className={classes["question-description"]}>
                <p>{accordianData[1].ans}</p>
              </div>
            )}
            <div
              onClick={() => setAccordian("2")}
              className={classes["faq-content__all-questions-box"]}
            >
              <p>{accordianData[2].que}</p>
              <Image
                width={17}
                height={20}
                alt="down-arrow"
                src="/Images/SVG/down.svg"
              ></Image>
            </div>
            {accordian === "2" && (
              <div className={classes["question-description"]}>
                <p>{accordianData[2].ans}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
