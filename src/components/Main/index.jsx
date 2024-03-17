import React, { useEffect, useState } from "react";
import Card from "../Card";
import style from "./Main.module.css";

function Main() {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(2);
  const [num3, setNum3] = useState(3);
  const [num4, setNum4] = useState(4);
  const [numChanges, setNumChanges] = useState(0);

  useEffect(() => {
    setNumChanges((prev) => prev + 1);
    console.log("changed");
  }, [num1, num2, num3, num4]);

  useEffect(() => {
    setNumChanges(0);
  }, []);

  return (
    <main>
      <h2>{numChanges} number changes detected</h2>

      <div className={style.content}>
        <section className={style.row}>
          <div className={style.card1}>
            <Card number={num1} onClick={() => setNum1(1 + num1)} />
          </div>
          <div className={style.card2}>
            <Card number={num2} onClick={() => setNum2(1 + num2)} />
          </div>
        </section>
        <section className={style.row}>
          <div className={style.card3}>
            <Card number={num3} onClick={() => setNum3(1 + num3)} />
          </div>
        </section>
        <section className={style.row}>
          <div className={style.card4}>
            <Card number={num4} onClick={() => setNum4(1 + num4)} />
          </div>
        </section>
      </div>
    </main>
  );
}

export default Main;
