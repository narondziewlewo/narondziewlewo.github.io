import React, { useState, useEffect } from "react";
import "../../styles/layout/header/header.scss";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Button from "../utility/button/button";
import Logo from "../../images/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [show, setShow] = useState(false);
  const [menu, setMenu] = useState(false);

  const anchors = [
    {
      name: "o nas",
      link: "#about",
    },
    {
      name: "firma",
      link: "#company",
    },
    {
      name: "kontakt",
      link: "#contact",
    },
  ];
  let windowOffset = typeof window !== `undefined` ? window.pageYOffset : "";
  function navLogic() {
    const nav = document.querySelector(".core-header");
    const currentOffest = window.pageYOffset;
    if (menu) {
      const menuList = document.querySelector(".navigation__list--vertical");
      menuList.style.animation = "500ms hide forwards";
      setTimeout(() => {
        setMenu(!menu);
      }, 500);
    }
    nav.style.top = windowOffset < currentOffest ? "-100px" : "0px";
    windowOffset = currentOffest;
  }

  function burgerMenuDisplay() {
    const windowWidth = window.matchMedia("(max-width: 640px)");
    windowWidth.matches ? setShow(true) : setShow(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", navLogic);
    return () => window.removeEventListener("scroll", navLogic);
  });

  useEffect(() => {
    burgerMenuDisplay();
    window.addEventListener("resize", burgerMenuDisplay);
    return () => window.removeEventListener("resize", burgerMenuDisplay);
  });

  return (
    <header className="core-header">
      <div className="core-header__wrapper">
        <img src={Logo} alt="logo" />
      </div>
      <nav className="navigation">
        {show && (
          <div className="navigation__burger">
            <FontAwesomeIcon
              icon={!menu ? faBars : faTimes}
              className="burger"
              onClick={() => {
                const menuList = document.querySelector(
                  ".navigation__list--vertical"
                );
                if (menuList) {
                  menuList.style.animation = "500ms hide forwards";
                  setTimeout(() => {
                    setMenu(!menu);
                  }, 500);
                } else {
                  setMenu(!menu);
                }
              }}
            />
            {menu && (
              <ul className="navigation__list--vertical">
                {anchors.map((anchor) => {
                  const { name, link } = anchor;
                  return (
                    <li key={name} className="navigation__list__element">
                      <AnchorLink
                        to={`/${link}`}
                        className="navigation__anchor"
                      >
                        {name}
                      </AnchorLink>
                    </li>
                  );
                })}
                <li className="navigation__list__element">
                  <a
                    href="https://discord.com/invite/jdPm4TvphH"
                    className="navigation__anchor--button"
                  >
                    <Button colorstyles="button yellow">Dołącz do nas</Button>
                  </a>
                </li>
              </ul>
            )}
          </div>
        )}
        {!show && (
          <ul className="navigation__list">
            {anchors.map((anchor) => {
              const { name, link } = anchor;
              return (
                <li key={name} className="navigation__list__element">
                  <AnchorLink to={`/${link}`} className="navigation__anchor">
                    {name}
                  </AnchorLink>
                </li>
              );
            })}
            <li className="navigation__list__element">
              <a
                href="https://discord.com/invite/jdPm4TvphH"
                className="navigation__anchor--button"
              >
                <Button colorstyles="button yellow">Dołącz do nas</Button>
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
