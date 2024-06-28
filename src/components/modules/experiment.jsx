import React from "react";
import { ReactSVG } from "react-svg";
import clsx from "clsx";
import Iteration from "./iteration";

const Experiment = ({ data, updateIterations }) => {
  const { status, title, iterations } = data;

  return (
    <div
      className={clsx(
        "w-full mx-0 my-auto rounded-xl p-5 bg-zinc-900 text-4xl flex flex-col mt-5",
        status === "unlocked" ? "text-white" : "text-zinc-600"
      )}
    >
      <div className="flex justify-between w-full items-center">
        <div>{title}</div>
        {status === "locked" ? (
          <ReactSVG src="locked.svg" />
        ) : status === "unlocked" ? (
          <ReactSVG src="unlocked.svg" />
        ) : null}
      </div>
      {status !== "locked" && (
        <div className="mt-5">
          {iterations.map((iteration) => (
            <Iteration
              key={iteration.id}
              data={iteration}
              updateIterations={updateIterations}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Experiment;
