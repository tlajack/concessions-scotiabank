import React, { useState } from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const MenuContainer = styled.div`
  max-width: 620px;
  background-color: #341a0f;
  padding: 1rem;
  margin: auto;
  color: white;
  .notes {
    font-size: 0.8em;
  }
  h1 {
    color: var(--red);
    font-size: 1.8rem;
    margin-top: 2.5rem;
    text-align: center;
    text-transform: uppercase;
  }

  .sectionTitle {
    color: black !important;
    font-size: 2em !important;
    grid-column: 1/3;
  }

  .logo {
    width: 100%;
    display: block !important;
    margin: auto;
  }

  .menuButton {
    background-color: var(--primary-dark);
    color: white;
    display: block;
    position: fixed;
    right: 20px;
    bottom: 20px;
    text-align: center;
    padding: 1em 2em;
    border-radius: 6px;
    z-index: 100;
    cursor: pointer;
  }
  div.active {
    display: block;
  }

  div.inactive {
    display: none;
  }
`;

const FlyingMenuContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 100%;
  max-width: 300px;
  padding: 0 8px 10px;
  background-color: #f8f9fa;
  box-shadow: 0 0 20px rgb(0 0 0 / 15%);
  z-index: 200;
  overflow: auto;
  background-color: var(--primary-dark);

  ul {
    width: 100%;
    height: 100%;
    margin-block-start: 0;
    padding: 8px 0 8px;
  }
  li {
    display: flex;
    flex-direction: column;
    background-color: white;
    text-align: center;
    font-family: var(--titleFont);
    margin-bottom: 8px;
    :hover {
      background-color: var(--grey-dark);
      a {
        color: white;
      }
    }
  }
  a {
    text-decoration: none;
    padding: 23px 0;
    height: 100%;
    color: var(--primary-dark);
  }
  .active {
    display: block;
  }

  .inactive {
    display: none;
  }
`;

const Cocktail = () => {
  const [menuState, setMenuState] = useState(false);

  function clickHandler() {
    setMenuState(!menuState);
  }

  return (
    <Layout bgColour={"#341a0f"}>
      <Seo title="Cherry St Online Menu" />
      <MenuContainer>
        <h1>Cocktail</h1>
        <div>
          <StaticImage
            className="logo"
            src="../images/cocktail-citrus.png"
            alt="Citrus Sling"
          />
          <h2>Citrus Sling (Mocktail)</h2>
          <p>Seedlip®, Non-Alcoholic Spirits, Lemonade, Tonic, Lemon</p>
        </div>
        <div>
          <StaticImage
            className="logo"
            src="../images/cocktail-lemon.png"
            alt="Lemon Zinger"
          />
          <h2>Lemon Zinger</h2>
          <p>Cîroc® Vodka, Ginger Beer, Lemonade, Lemon</p>
        </div>
        <div>
          <StaticImage
            className="logo"
            src="../images/cocktail-peach.png"
            alt="Peach Punch"
          />
          <h2>Peach Punch</h2>
          <p>Cîroc® Peach, Cranberry Juice, Orange Juice, Lime</p>
        </div>
        <div>
          <StaticImage
            className="logo"
            src="../images/cocktail-mango.png"
            alt="Mango Tango"
          />
          <h2>Mango Tango</h2>
          <p>Ciroc Mango, Cranberry Juice, Lemonade, Sprite, Lemon</p>
        </div>
        {/* <div
          role="button"
          tabIndex={-1}
          onClick={clickHandler}
          onKeyDown={clickHandler}
          className="menuButton"
        >
          Menu
        </div> */}
        <FlyingMenuContainer className={menuState ? "active" : "inactive"}>
          <ul>
            <li>
              <a
                role="button"
                tabIndex={-2}
                onClick={clickHandler}
                onKeyDown={clickHandler}
                href="#entree"
              >
                Entrée
              </a>
            </li>
            <li>
              <a
                role="button"
                tabIndex={-3}
                onClick={clickHandler}
                onKeyDown={clickHandler}
                href="#nonalcoholic"
              >
                Non-Alcoholic
              </a>
            </li>
            <li>
              <a
                role="button"
                tabIndex={-4}
                onClick={clickHandler}
                onKeyDown={clickHandler}
                href="#snacks"
              >
                Snacks
              </a>
            </li>
            <li>
              <a
                role="button"
                tabIndex={-5}
                onClick={clickHandler}
                onKeyDown={clickHandler}
                href="#alcohol"
              >
                Alcohol
              </a>
            </li>
          </ul>
        </FlyingMenuContainer>
      </MenuContainer>
    </Layout>
  );
};

export default Cocktail;
