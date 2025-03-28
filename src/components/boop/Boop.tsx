// components/Boop.jsx
import React from "react";
import { animated } from "react-spring";

import useBoop from "@/hooks/use-boop";

const Boop = ({ children, ...boopConfig }) => {
  const [style, trigger] = useBoop(boopConfig);

  return (
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  );
};
