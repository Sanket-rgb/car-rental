import Image from "next/image";
import Button from "../UI/Button";

import classes from "./VehicleFleet.module.css";
const VehicleFleet = () => {
  return (
    <div className={classes["vehicle-fleet__container"]}>
      <div className={classes["vehicle-fleet__title"]}>
        <h3>Vehicle Models</h3>
        <h2>Our rental fleet</h2>
        <p>
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </div>
      <div className={classes["vehicle-fleet__car-content"]}>
        <div className={classes["vehicle-fleet__car-list"]}>
          <Button>Audi A1 S-Line</Button>
          <Button>VW Golf 6</Button>
          <Button>Toyota Camry</Button>
          <Button>BMW 320 ModernLine</Button>
          <Button>Mercedes-Benz GLK</Button>
          <Button>VW Passat CC</Button>
        </div>
        {/* <div className={classes["vehicle-fleet__car-image-details"]}> */}
        <div className={classes["vehicle-fleet__car-image"]}>
          <Image fill alt="car" src="/Images/cars/audi.jpeg"></Image>
        </div>
        <div className={classes["vehicle-fleet__car-details"]}>
          <div className={classes["vehicle-fleet__car-details-price"]}>
            <h2>$45</h2>
            <p>/ rent per day</p>
          </div>
          <div
            className={
              classes["vehicle-fleet__car-details-description-container"]
            }
          >
            <div
              className={classes["vehicle-fleet__car-details-description-grid"]}
            >
              <span>Model</span>
              <span>Audi</span>
            </div>
            <div
              className={classes["vehicle-fleet__car-details-description-grid"]}
            >
              <span>Mark</span>
              <span>A1</span>
            </div>
            <div
              className={classes["vehicle-fleet__car-details-description-grid"]}
            >
              <span>Year</span>
              <span>2012</span>
            </div>
            <div
              className={classes["vehicle-fleet__car-details-description-grid"]}
            >
              <span>Doors</span>
              <span>4/5</span>
            </div>
            <div
              className={classes["vehicle-fleet__car-details-description-grid"]}
            >
              <span>AC</span>
              <span>Yes</span>
            </div>
            <div
              className={classes["vehicle-fleet__car-details-description-grid"]}
            >
              <span>Transmission</span>
              <span>Manual</span>
            </div>
            <div
              className={classes["vehicle-fleet__car-details-description-grid"]}
            >
              <span>Fuel</span>
              <span>Gasoline</span>
            </div>
          </div>
          <Button className={classes.button}>reserve now</Button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default VehicleFleet;
