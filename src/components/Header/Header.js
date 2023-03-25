import Image from "next/image";
import Button from "../UI/Button";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes["image-container"]}>
        <Image fill alt="logo" src="/Images/logo.png" />
      </div>
      <nav className={classes["navbar__links"]}>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Vehicle Models</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>Our Team</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
      <div className={classes["navbar-buttons-layout"]}>
        <a>Sign In</a>
        <a>
          <Button className={classes.button}>Register</Button>
        </a>
      </div>
    </div>
  );
};

export default Header;
