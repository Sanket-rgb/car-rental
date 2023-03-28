import Image from "next/image";
import Link from "next/link";
import Button from "../UI/Button";

import classes from "./ChooseSection.module.css";
const ChooseSection = () => {
  return (
    <section className={classes.section}>
      <div className={classes["choose-container"]}>
        <div className={classes["image-container"]}>
          <Image
            className={classes.image}
            fill
            alt="choose-car"
            src="/Images/cars/choose-car.png"
          ></Image>
        </div>
        <div className={classes["text-container"]}>
          <div className={classes["text-container__left"]}>
            <h4>Why Choose Us</h4>
            <h2>Best valued deals you will ever find</h2>
            <p>
              Discover the best deals you{"'"}ll ever find with our unbeatable
              offers. We{"'"}re dedicated to providing you with the best value
              for your money, so you can enjoy top-quality services and products
              without breaking the bank. Our deals are designed to give you the
              ultimate renting experience, so don{"'"}t miss out on your chance
              to save big.
            </p>
            <Link style={{ textDecoration: "none" }} href="/">
              <Button>Find Details</Button>
            </Link>
          </div>

          <div className={classes["text-container__right"]}>
            <div className={classes["text-container__right-box"]}>
              <div className={classes["image-container"]}>
                <Image
                  className={classes.image}
                  alt="choose1"
                  src="/Images/Choose/choose1.png"
                  width={110}
                  height={110}
                ></Image>
              </div>
              <div className={classes["text-container__right-box-text"]}>
                <h4>Cross Country Drive</h4>
                <p>
                  Take your driving experience to the next level with our
                  top-notch vehicles for your cross-country adventures.
                </p>
              </div>
            </div>
            <div className={classes["text-container__right-box"]}>
              <div className={classes["image-container"]}>
                <Image
                  className={classes.image}
                  alt="choose2"
                  src="/Images/Choose/choose2.png"
                  width={110}
                  height={110}
                ></Image>
              </div>
              <div className={classes["text-container__right-box-text"]}>
                <h4>All Inclusive Pricing</h4>
                <p>
                  Get everything you need in one convenient, transparent price
                  with our all-inclusive pricing policy.
                </p>
              </div>
            </div>
            <div className={classes["text-container__right-box"]}>
              <div className={classes["image-container"]}>
                <Image
                  className={classes.image}
                  alt="choose3"
                  src="/Images/Choose/choose3.png"
                  width={110}
                  height={110}
                ></Image>
              </div>
              <div className={classes["text-container__right-box-text"]}>
                <h4>No Hidden Charges</h4>
                <p>
                  Enjoy peace of mind with our no hidden charges policy. We
                  believe in transparent and honest pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseSection;
