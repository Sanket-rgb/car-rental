import Image from "next/image";
import classes from "./TestimonialSection.module.css";
const TestimonialSection = () => {
  return (
    <section className={classes["testimonial-section"]}>
      <div className={classes["testimonial-container"]}>
        <div className={classes["testimonial-container__title"]}>
          <h4>Reviewed by People</h4>
          <h2>Client{"'"}s Testimonials</h2>
          <p>
            Discover the positive impact we{"'"}ve made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they{"'"}re eager to share their positive
            experiences with you.
          </p>
        </div>
        <div className={classes["testimonial-container__testimonials"]}>
          <div className={classes["testimonial-container__testimonials-box"]}>
            <p>
              {'"'}We rented a car from this website and had an amazing
              experience! The booking was easy and the rental rates were very
              affordable. {'"'}
            </p>
            <div
              className={
                classes[
                  "testimonial-container__testimonials-box-name-container"
                ]
              }
            >
              <Image
                className={classes.image}
                alt="testimonial1"
                height={60}
                width={60}
                src="/Images/testimonials/harry.jpg"
              ></Image>
              <div
                className={
                  classes["testimonial-container__testimonials-box-name"]
                }
              >
                <h4>Parry Potter</h4>
                <p>Belgrade</p>
              </div>
              {/* <p>Image</p> */}
            </div>
          </div>
          <div className={classes["testimonial-container__testimonials-box"]}>
            <p>
              {'"'}We rented a car from this website and had an amazing
              experience! The booking was easy and the rental rates were very
              affordable. {'"'}
            </p>
            <div
              className={
                classes[
                  "testimonial-container__testimonials-box-name-container"
                ]
              }
            >
              <Image
                className={classes.image}
                alt="testimonial2"
                height={60}
                width={60}
                src="/Images/testimonials/ron.jpg"
              ></Image>

              <div
                className={
                  classes["testimonial-container__testimonials-box-name"]
                }
              >
                <h4>Ron Rizzly</h4>
                <p>Novi Sad</p>
              </div>
              {/* <p>Image</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
