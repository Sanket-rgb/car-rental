import Image from "next/image";
import Link from "next/link";
import Button from "../UI/Button";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes["image-container"]}>
        <Image
          className={classes.image}
          fill
          alt="logo"
          src="/Images/logo.png"
        />
      </div>
      <nav className={classes["navbar__links"]}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/">Vehicle Models</Link>
          </li>
          <li>
            <Link href="/">Testimonials</Link>
          </li>
          <li>
            <Link href="/">Our Team</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className={classes["navbar-buttons-layout"]}>
        <a>Sign In</a>

        <Button className={classes.button}>Register</Button>
      </div>
      <div className={classes["hamburger-menu"]}>
        <Image fill alt="menu" src="/Images/SVG/menu.svg"></Image>
      </div>
    </div>
  );
};

export default Header;
