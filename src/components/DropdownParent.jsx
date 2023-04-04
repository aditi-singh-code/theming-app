/** @format */

import React, { useRef, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";

export const DropdownParent = () => {
  const iFrameRef = useRef(null);
  const defaultTheme = {
    backgroundColor: "#FFF7F2",
    primaryColor: "#70355E",
    secondaryColor: "#98746C",
    textColor: "#3D1F26",
    errorColor: "#DF5662",
  };
  const sendMessage = (value) => {
    if (!iFrameRef.current) return;
    iFrameRef.current.contentWindow.postMessage(value, "http://localhost:3001");
  };

  useEffect(() => {
    window.addEventListener("message", function (e) {
      if (e.origin !== "http://localhost:3001") return;
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "40px",
      }}
    >
      <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          Dropdown Button
        </Dropdown.Toggle>
        <Dropdown.Menu variant="dark">
          {
            <>
              {Object.entries(defaultTheme).map(([key, value]) => {
                return (
                  <Dropdown.Item onClick={() => sendMessage(value)}>
                    {key}
                  </Dropdown.Item>
                );
              })}
            </>
          }
        </Dropdown.Menu>
        ;
      </Dropdown>
      <br />
      <br />

      <iframe
        ref={iFrameRef}
        src="/button"
        width="600"
        height="300"
        title="Child iframe"
      ></iframe>
    </div>
  );
};
