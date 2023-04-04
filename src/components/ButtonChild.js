/** @format */

import { findByLabelText } from "@testing-library/react";
import React, { useEffect, useState } from "react";

export const ButtonChild = () => {
  const [recievedColor, setRecievedColor] = useState("#FFF7F2");
  const styleButton = {
    color: "white",
    backgroundColor: recievedColor,
    padding: "40px",
    display: "flex",
  };

  useEffect(() => {
    window.addEventListener("message", function (e) {
      if (e.origin !== "http://localhost:3001") return;
      setRecievedColor(e.data.toString());
    });
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <button style={styleButton}></button>
    </div>
  );
};
