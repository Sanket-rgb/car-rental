import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import Button from "../UI/Button"
import classes from "./LandingPage.module.css"

const LandingPage = () => {
  return (
    <section className={"hero-section"}>
      <div className={classes.container}>
        <div className={classes["hero-content__text"]}>
          <h4>Plan your trip now</h4>
          <h1>Save big with our car rental</h1>
          <p>
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>

          <div className={classes["hero-content__buttons"]}>
            <Button className={classes.button}>
              Book Ride &nbsp;
              <FontAwesomeIcon icon={faCircleCheck} />
            </Button>

            <Button className={classes.button}>
              Learn More &nbsp; <FontAwesomeIcon icon={faAngleRight} />
            </Button>
          </div>
        </div>
        <div className={classes["hero-content__car-image"]}>
          <Image
            className={classes.image}
            src="/Images/car-image.png"
            fill
            alt="car"
          ></Image>
        </div>
      </div>
    </section>
  )
}

export default LandingPage
