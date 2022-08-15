import React from "react";
import classes from "./Main.module.css";
import Image from "next/image";
import imgurl from "./Photos/illustration.png";
function Main() {
  return (
    <main className={classes.mains}>
      <div className={classes.texts}>
        <p className={classes.p}>Are you redy to Learn?</p>
        <h1 className={classes.h1_black}>
          LEARN WITH FUN<br></br> on <span>any shedule</span>
        </h1>
        <p className={classes.p_black}>
          We are the most senscire for care the student as they are able to join
          the market place soon
        </p>
        <button className={classes.start_btn}>Get started</button>
      </div>
      <div className={classes.images}>
        <Image src={imgurl} className={classes.imgs} />
      </div>
    </main>
  );
}

export default Main;
