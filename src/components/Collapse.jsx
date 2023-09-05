import React, { useEffect, useRef, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import "./Collapse.scss";

export function Collapse({ title, children, active }) {
  const collapseRef = useRef(null);
  const [_active, setActive] = useState(active);
  const [sectionHeight, setSectionHeight] = useState(0);

  const toggleActive = () => setActive((active) => !active);

  useEffect(() => {
    setSectionHeight(collapseRef.current.offsetHeight + 5);
  }, [children]);

  return (
    <div
      className={`Collapse ${_active ? "is--active" : ""}`}
      style={{ "--sectionHeight": sectionHeight + "px" }}
    >
      <div className="Collapse__element">
        <h1 className="Collapse__header" onClick={toggleActive}>
          {title}
          <span>
            <FaChevronUp className="Collapse__chevron" />
          </span>
        </h1>
        <div className="Collapse__content">
          <div ref={collapseRef}>{children}</div>
        </div>
      </div>
    </div>
  );
}
