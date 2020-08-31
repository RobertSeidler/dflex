import React from "react";

function Sidebar({ children }) {
  return (
    <aside
      css={{
        width: "100%",
        height: "100vh",
        overflow: "auto",
        position: "sticky",
        paddingLeft: 0,
        top: 0,
        paddingRight: 0,
        "-webkit-box-shadow": "-1px 0px 4px 1px rgba(175, 158, 232, 0.4)",

        "@media only screen and (max-width: 1023px)": {
          width: "100%",
          /* position: relative, */
          height: "100vh",
        },

        "@media (min-width: 767px) and (max-width: 1023px)": {
          paddingLeft: 0,
        },

        "@media only screen and (max-width: 767px)": {
          paddingLeft: 0,
          height: "auto",
        },
      }}
    >
      {children}
    </aside>
  );
}

export default Sidebar;
