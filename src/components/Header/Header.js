import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Button from "../UI/Button"
import classes from "./Header.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  const [nav, setNav] = useState(false)

  const openNav = () => {
    setNav(!nav)
  }

  return (
    <>
      {nav && (
        <div className={classes["mobile_navbar__links"]}>
          <div className={classes.xmark} onClick={openNav}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <ul className={classes.ul}>
            <li>
              <Link onClick={openNav} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="/About">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="/">
                Vehicle Models
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="/">
                Testimonials
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="/">
                Our Team
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="/">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
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
        <div onClick={openNav} className={classes["hamburger-menu"]}>
          <Image fill alt="menu" src="/Images/SVG/menu.svg"></Image>
        </div>
      </div>
    </>
  )
}

export default Header
