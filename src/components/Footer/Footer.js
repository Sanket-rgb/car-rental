import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes["footer-content"]}>
          <ul className={classes["footer-content__1"]}>
            <li>
              <span>CAR</span> Rental
            </li>
            <li>
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </li>
            <li>
              <a href="tel:123456789">
                {/* <i class="fa-solid fa-phone"></i> &nbsp;  */}
                (123) -456-789
              </a>
            </li>
            <li>
              <a href="mailto:  carrental@gmail.com">
                {/* <i class="fa-solid fa-envelope"></i>&nbsp;  */}
                carrental@gmail.com
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://xpeedstudio.com/"
                // style={{ fontSize: "14px" }}
              >
                Design by XpeedStudio
              </a>
            </li>
          </ul>
          <ul className={classes["footer-content__2"]}>
            <li>Company</li>
            <li>
              <a href="#home">New York</a>
            </li>
            <li>
              <a href="#home">Careers</a>
            </li>
            <li>
              <a href="#home">Mobile</a>
            </li>
            <li>
              <a href="#home">Blog</a>
            </li>
            <li>
              <a href="#home">How we work</a>
            </li>
          </ul>
          <ul className={classes["footer-content__2"]}>
            <li>Working Hours</li>
            <li>Mon - Fri: 9:00AM - 9:00PM</li>
            <li>Sat: 9:00AM - 19:00PM</li>
            <li>Sun: Closed</li>
          </ul>
          <ul className={classes["footer-content__2"]}>
            <li>Subscription</li>
            <li>
              <p>Subscribe your Email address for latest news &amp; updates.</p>
            </li>
            <li>
              <input type="email" placeholder="Enter Email Address" />
            </li>
            <li>
              <button className={classes["submit-email"]}>Submit</button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
