"use client";

import { RobotButton } from "@/app/components/ui/buttons/robotButton/robotButton";
import clsx from "clsx";
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
      <h1 className="text-3xl text-center mt-3">Browser Games</h1>

      <div
        onTransitionEnd={() => {
          setStartLeftButtonBreakDown(true);
          setStartRightButtonBreakDown(true);
        }}
        className={clsx(
          "relative h-[85vh] transition-all duration-[0.7s] w-screen ",
          openGeorgianGames && "ml-[55vw]",
          openInternationalGames && "ml-[-55vw]"
        )}
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

        <div className="w-2 h-[50%] bg-black absolute m-auto left-0 right-0 top-0 bottom-0"></div>
      </div>
    </div>
  );
}
