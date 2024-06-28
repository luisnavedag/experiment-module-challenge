import { useEffect, useState } from "react";
import clsx from "clsx";

const Iteration = ({ data, updateIterations }) => {
  const [editable, setEditable] = useState(false);
  const [type, setType] = useState(data.selection);

  useEffect(() => {
    setType(data.selection);
  }, [data.selection]);

  const handleChangeType = (value) => () => {
    setType(value);
  };

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleDone = () => {
    setEditable(false);
    updateIterations({ ...data, selection: type });
  };

  const handleRemove = () => {
    setEditable(false);
    updateIterations({ ...data, selection: "" });
  };

  return (
    <div
      className="bg-black text-zinc-600 flex p-4 mt-2"
      onClick={handleEditClick}
    >
      <div className="basis-1/4">
        <span>{`EM-${data.id}`}</span>
      </div>
      {!editable ? (
        <>
          <div className="basis-1/2">
            <span className="text-zinc-300">{data.title}</span>
          </div>
          {data.selection && (
            <div className="basis-1/4 text-right">
              <div className="flex items-center gap-10 justify-end">
                <span>Selection</span>
                <span className="flex w-5 h-5 me-5 rounded-full bg-green-500"></span>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="basis-3/4 flex flex-col gap-10">
          <span className="text-zinc-300">{data.title}</span>
          <div className="flex items-center text-zinc-500 gap-10 flex-wrap">
            <div
              className={clsx(
                "border p-5 rounded-2xl",
                type === "short" && "border-green-500 text-green-500",
                type !== "short" && "border-zinc-600"
              )}
              onClick={handleChangeType("short")}
            >
              SHORT
            </div>
            <div
              className={clsx(
                "border p-5 rounded-2xl",
                type === "medium" && "border-green-500 text-green-500",
                type !== "medium" && "border-zinc-600"
              )}
              onClick={handleChangeType("medium")}
            >
              MEDIUM LENGTH
            </div>
            <div
              className={clsx(
                "border p-5 rounded-2xl",
                type === "long" && "border-green-500 text-green-500",
                type !== "long" && "border-zinc-600"
              )}
              onClick={handleChangeType("long")}
            >
              VERY VERY VERY LONG (UP TO 35 CHAR)
            </div>
          </div>
          <hr className="bg-zinc-600 h-[1px] border-none" />
          <div className="flex items-center justify-end gap-10 px-10 font-medium">
            <button onClick={handleRemove}>REMOVE</button>
            <button className="text-gray-200" onClick={handleDone}>
              DONE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Iteration;
