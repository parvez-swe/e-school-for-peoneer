import React from "react";
import classes from "./NavBar.module.css";
import Image from "next/image";
import logos from "./ICON/Logo.png";
function NavBar() {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo_box}>
        <Image src={logos} className={classes.img} />
      </div>
      <ul className={classes.nav_item}>
        <li className={classes.li}>Home</li>
        <li className={classes.li}>courses</li>
        <li className={classes.li}>Contact</li>
      </ul>
    </nav>
  );
}

export default NavBar;
