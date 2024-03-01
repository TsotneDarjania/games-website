"use client";

import { RobotButton } from "@/app/components/ui/buttons/robotButton/robotButton";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";

export function HomeClientComponents() {
  const [startLeftButtonBreakDown, setStartLeftButtonBreakDown] =
    useState(false);
  const [startRightButtonBreakDown, setStartRightButtonBreakDown] =
    useState(false);

  const [openGeorgianGames, setOpenGeorgianGames] = useState(false);
  const [openInternationalGames, setOpenInternationalGames] = useState(false);

  const clickButton = (side: string) => {
    side === "left"
      ? setOpenGeorgianGames(true)
      : setOpenInternationalGames(true);
  };

  return (
    <div className="overflow-hidden">
      <h1 className="text-3xl absolute w-fit left-0 right-0 mx-auto text-center mt-3">
        Browser Games
      </h1>

      <motion.div
        onTransitionEnd={() => {
          if (openGeorgianGames) {
            setStartLeftButtonBreakDown(true);
          }
          if (openInternationalGames) {
            setStartRightButtonBreakDown(true);
          }
        }}
        style={{
          x: openGeorgianGames
            ? "49.8vw"
            : openInternationalGames
            ? "-49.8vw"
            : 0,
        }}
        className="relative transition-all duration-[0.7s] w-screen h-screen "
      >
        {/* Georgian Games Button */}
        <RobotButton
          customStyle={
            "absolute w-fit m-auto  top-0 bottom-0 flex items-center justify-center -left-[600px] right-0"
          }
          startBreakDown={startLeftButtonBreakDown}
          setStartBreakDown={setStartLeftButtonBreakDown}
          innerText="Georgian Games"
          onClick={() => clickButton("left")}
        />

        {/* International Games Button */}
        <RobotButton
          customStyle="absolute w-fit m-auto top-0 bottom-0 flex items-center justify-center -right-[600px] left-0  "
          startBreakDown={startRightButtonBreakDown}
          setStartBreakDown={setStartRightButtonBreakDown}
          innerText="International Games"
          onClick={() => clickButton("right")}
        />

        <motion.div
          style={{
            height:
              startLeftButtonBreakDown || startRightButtonBreakDown
                ? "100vh"
                : "40vh",
          }}
          className="w-[0.4vw] transition-all duration-[0.7s] bg-black absolute m-auto left-0 right-0 top-0 bottom-0 "
        ></motion.div>
      </motion.div>
    </div>
  );
}
