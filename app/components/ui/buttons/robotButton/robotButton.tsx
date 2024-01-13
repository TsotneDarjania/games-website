"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import style from "./style.module.css";
import clsx from "clsx";

export function RobotButton({
  innerText,
  setStartBreakDown,
  startBreakDown,
  customStyle,
  onClick,
}: {
  innerText: string;
  setStartBreakDown: Dispatch<SetStateAction<boolean>>;
  startBreakDown: boolean;
  customStyle?: string;
  onClick: () => void;
}) {
  return (
    <div className={customStyle}>
      <div onClick={() => onClick()} className={style["button"]}>
        <div
          className={clsx(
            style["top"],
            startBreakDown && style["topAnimation"]
          )}
        ></div>
        <div
          className={clsx(
            style["left"],
            startBreakDown && style["leftAnimation"]
          )}
        ></div>
        <div
          className={clsx(
            style["bottom"],
            startBreakDown && style["bottomAnimation"]
          )}
        ></div>
        <div
          className={clsx(
            style["right"],
            startBreakDown && style["rightAnimation"]
          )}
        ></div>
        <p className={style.text}>{innerText}</p>
      </div>
    </div>
  );
}
