import React from "react";
import style from "./Card.module.css"

function Card({ number, onClick }) {
  return (
    <div className={style.card} onClick={onClick}>
      {number}
    </div>
  )
}

export default Card