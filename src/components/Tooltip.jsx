import { cloneElement, useId } from "react";

const POSITIONS = {
  left: { box: "left-0", arrow: "left-4" },
  center: { box: "left-1/2 -translate-x-1/2", arrow: "left-1/2 -translate-x-1/2" },
};

const Tooltip = ({ content, children, align = "center" }) => {
  const id = useId();
  const position = POSITIONS[align] || POSITIONS.center;

  return (
    <span className="group relative inline-flex">
      {cloneElement(children, { "aria-describedby": id })}
      <span
        id={id}
        role="tooltip"
        className={`pointer-events-none invisible absolute bottom-full z-20 mb-3 w-max max-w-[14rem] translate-y-1 rounded-xl bg-gradient-to-r from-primary-500/60 to-purple-500/60 p-px opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 ${position.box}`}
      >
        <span className="block rounded-xl bg-gray-900 px-4 py-3 text-left text-xs leading-relaxed text-gray-300">
          {content}
        </span>
        <span
          className={`absolute -bottom-1 h-2 w-2 rotate-45 border-b border-r border-purple-500/60 bg-gray-900 ${position.arrow}`}
        ></span>
      </span>
    </span>
  );
};

export default Tooltip;
