import { useState } from "react";
import "./index.scss";

export function Container({ title, children }) {
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleReact = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div className="container">
      <div onClick={toggleReact}>{title}</div>
      <div className={!isCollapsed ? "container" : "container-hidden"}>
        {children}
      </div>
    </div>
  );
}
