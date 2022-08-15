import React from "react";
import classes from "./Eschool.module.css";
import NavBar from "./NavBar";
import Main from "./Main";
function Eschool() {
  return (
    <>
      <section className={classes.header}>
        <NavBar />
        <Main />
      </section>
    </>
  );
}

export default Eschool;
