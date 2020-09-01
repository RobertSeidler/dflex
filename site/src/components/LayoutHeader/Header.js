import React from "react";
import { Link } from "gatsby";
import { colors, media } from "../../theme";
import ContainerLayout from "../ContainerLayout";
import menuLinks from "./content";
import ExternalLinkSvg from "./ExternalLinkSvg";
import MenuLink from "../collection/MenuLink";

const GitHubNav = () => (
  <div
    css={{
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      width: "auto",
    }}
  >
    <a
      css={{
        padding: "5px 10px",
        marginLeft: 10,
        whiteSpace: "nowrap",
        opacity: "95%",
        color: "inherit",
        textDecoration: "none",
        ":hover": {
          color: colors.logo,
        },

        ":focus": {
          outline: 0,
          backgroundColor: colors.light,
          borderRadius: 15,
        },

        [media.lessThan("large")]: {
          display: "none",
        },
      }}
      href="https://github.com/jalal246/dflex/"
      rel="noopener"
    >
      GitHub
      <ExternalLinkSvg
        cssProps={{
          marginLeft: 5,
          verticalAlign: -2,
          color: colors.white,
        }}
      />
    </a>
  </div>
);

const Nav = () => (
  <nav
    css={{
      flex: "1",
      display: "flex",
      flexDirection: "row",
      alignItems: "stretch",
      overflowX: "auto",
      overflowY: "hidden",
      WebkitOverflowScrolling: "touch",
      height: "100%",
      opacity: "95%",

      // Hide horizontal scrollbar
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      "::-webkit-scrollbar": {
        display: "none",
      },

      [media.size("xsmall")]: {
        flexGrow: "1",
        width: "auto",
      },
      [media.greaterThan("xlarge")]: {
        width: null,
      },
      [media.lessThan("small")]: {
        maskImage:
          "linear-gradient(to right, transparent, black 20px, black 90%, transparent)",
      },
    }}
  >
    {menuLinks.map(({ name, to }) => (
      <MenuLink key={name} name={name} to={to} />
    ))}
  </nav>
);

const Logo = () => (
  <Link
    css={{
      display: "flex",
      marginRight: 10,
      height: "100%",
      alignItems: "center",
      color: colors.logo,
      textDecoration: "none",
      ":focus": {
        outline: 0,
        color: colors.white,
      },

      [media.greaterThan("small")]: {
        width: "calc(100% / 6)",
      },
      [media.lessThan("small")]: {
        flex: "0 0 auto",
      },
    }}
    to="/"
  >
    <span
      css={{
        color: "inherit",
        marginLeft: 10,
        fontWeight: 700,
        fontSize: 40,
        lineHeight: "20px",
        [media.lessThan("large")]: {
          fontSize: 16,
          marginTop: 1,
        },
        [media.lessThan("small")]: {
          // Visually hidden
          position: "absolute",
          overflow: "hidden",
          clip: "rect(0 0 0 0)",
          height: 1,
          width: 1,
          margin: -1,
          padding: 0,
          border: 0,
        },
      }}
    >
      DFlex
    </span>
  </Link>
);

const Header = () => (
  <header
    css={{
      backgroundColor: colors.dark,
      color: colors.white,
      position: "fixed",
      zIndex: 1,
      width: "100%",
      top: 0,
      left: 0,
      "@media print": {
        display: "none",
      },
    }}
  >
    <ContainerLayout>
      <div
        css={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: 60,
          [media.between("small", "large")]: {
            height: 50,
          },
          [media.lessThan("small")]: {
            height: 40,
          },
        }}
      >
        <Logo />
        <Nav />
        <GitHubNav />
      </div>
    </ContainerLayout>
  </header>
);

export default Header;
