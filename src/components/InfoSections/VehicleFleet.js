import Image from "next/image";
import Button from "../UI/Button";

import { CarDetails } from "@/styles/Store/CarDetails";

import classes from "./VehicleFleet.module.css";
import { useState } from "react";
const VehicleFleet = () => {
  const [selectedCar, setSelectedCar] = useState(0);

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
          <Button
            className={selectedCar === 0 ? classes.active : ""}
            onClick={() => setSelectedCar(0)}
          >
            Audi A1 S-Line
          </Button>
          <Button
            className={selectedCar === 1 ? classes.active : ""}
            onClick={() => setSelectedCar(1)}
          >
            VW Golf 6
          </Button>
          <Button
            className={selectedCar === 2 ? classes.active : ""}
            onClick={() => setSelectedCar(2)}
          >
            Toyota Camry
          </Button>
          <Button
            className={selectedCar === 3 ? classes.active : ""}
            onClick={() => setSelectedCar(3)}
          >
            BMW 320 ModernLine
          </Button>
          <Button
            className={selectedCar === 4 ? classes.active : ""}
            onClick={() => setSelectedCar(4)}
          >
            Mercedes-Benz GLK
          </Button>
          <Button
            className={selectedCar === 5 ? classes.active : ""}
            onClick={() => setSelectedCar(5)}
          >
            VW Passat CC
          </Button>
        </div>
        {/* <div className={classes["vehicle-fleet__car-image-details"]}> */}
        <div className={classes["vehicle-fleet__car-image"]}>
          <Image fill alt="car" src={CarDetails[selectedCar].image}></Image>
        </div>
        <div className={classes["vehicle-fleet__car-details"]}>
          <div className={classes["vehicle-fleet__car-details-price"]}>
            <h2>${CarDetails[selectedCar].rent}</h2>
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
              <span>{CarDetails[selectedCar].model}</span>
            </div>
            <div
              className={classes["vehicle-fleet__car-details-description-grid"]}
            >
              <span>Mark</span>
              <span>{CarDetails[selectedCar].mark}</span>
            </div>
            <div
              className={classes["vehicle-fleet__car-details-description-grid"]}
            >
              <span>Year</span>
              <span>{CarDetails[selectedCar].year}</span>
            </div>
            <div
              className={classes["vehicle-fleet__car-details-description-grid"]}
            >
              <span>Doors</span>
              <span>{CarDetails[selectedCar].doors}</span>
            </div>
            <div
              className={classes["vehicle-fleet__car-details-description-grid"]}
            >
              <span>AC</span>
              <span>{CarDetails[selectedCar].ac}</span>
            </div>
            <div
              className={classes["vehicle-fleet__car-details-description-grid"]}
            >
              <span>Transmission</span>
              <span>{CarDetails[selectedCar].transmission}</span>
            </div>
            <div
              className={classes["vehicle-fleet__car-details-description-grid"]}
            >
              <span>Fuel</span>
              <span>{CarDetails[selectedCar].fuel}</span>
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
