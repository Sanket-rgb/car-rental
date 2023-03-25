import Image from "next/image";
import classes from "./PlanSection.module.css";
const PlanSection = () => {
  return (
    <div className={classes["plan-section"]}>
      <div className={classes["plan-section__heading"]}>
        <h3>Plan your trip now</h3>
        <h2>Quick & easy car rental</h2>
      </div>
      <div className={classes["plan-section__container"]}>
        <div className={classes["plan-section__container-box"]}>
          <div className={classes["image-container"]}>
            <Image alt="plan1" fill src="/Images/Plan/plan1.png"></Image>
          </div>
          <h3>Select Car</h3>
          <p>
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs
          </p>
        </div>
        <div className={classes["plan-section__container-box"]}>
          <div className={classes["image-container"]}>
            <Image alt="plan2" fill src="/Images/Plan/plan2.png"></Image>
          </div>
          <h3>Contact Operator</h3>
          <p>
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns
          </p>
        </div>
        <div className={classes["plan-section__container-box"]}>
          <div className={classes["image-container"]}>
            <Image alt="plan3" fill src="/Images/Plan/plan3.png"></Image>
          </div>
          <h3>Let{"'"}s Drive</h3>
          <p>
            Whether you{"'"}re hitting the open road, we{"'"}ve got you covered
            with our wide range of cars
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanSection;
