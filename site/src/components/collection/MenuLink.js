import React from "react";
import { Link } from "gatsby";

import { colors, media } from "../../theme";

const css = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  color: colors.white,
  transition: "color 0.2s ease-out",
  paddingLeft: 15,
  paddingRight: 15,
  fontWeight: 300,
  textDecoration: "none",
  ":focus": {
    outline: 0,
    backgroundColor: colors.light,
    color: colors.white,
  },

  [media.size("xsmall")]: {
    paddingLeft: 8,
    paddingRight: 8,
  },

  [media.between("small", "medium")]: {
    paddingLeft: 10,
    paddingRight: 10,
  },

  [media.greaterThan("xlarge")]: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18,

    ":hover:not(:focus)": {
      color: colors.logo,
    },
  },
};

const MenuLink = ({ name, to }) => {
  return (
    <Link css={css} to={to}>
      {name}
    </Link>
  );
};

export default MenuLink;
