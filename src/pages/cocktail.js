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
  .price {
    text-align: right;
    color: rgba(255, 255, 255, 0.7);
  }

  .cocktail {
    /* border: 1px solid red; */
    background-color: rgba(0, 0, 0, 0.3);
    padding: 1em;
    border-radius: 1em;
    margin-bottom: 1em;
    h2 {
      text-align: center;
      margin-bottom: 0.5em;
    }
    p {
      text-align: center;
    }
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
      <Seo title="QS Bars" />
      <MenuContainer>
        <StaticImage
          className="logo"
          src="../images/cocktail-header.png"
          alt="Signature Cocktail"
        />

        <div className="cocktail">
          <StaticImage
            className="logo"
            src="../images/cocktail-mango.png"
            alt="Mango Tango"
          />
          <h2>Mango Tango</h2>
          <p>Ciroc Mango, Cranberry Juice, Lemonade, Sprite, Lemon</p>
        </div>
        <div className="cocktail">
          <StaticImage
            className="logo"
            src="../images/cocktail-peach.png"
            alt="Peach Punch"
          />
          <h2>Peach Punch</h2>
          <p>Cîroc® Peach, Cranberry Juice, Orange Juice, Lime</p>
        </div>
        <div className="cocktail">
          <StaticImage
            className="logo"
            src="../images/cocktail-pinapple.png"
            alt="Lemon Zinger"
          />
          <h2>Pineapple Breeze</h2>
          <p>Cîroc® Pineapple, Ruby Red Grapefruit Juice, Sprite, Lime</p>
        </div>
        <div className="cocktail">
          <StaticImage
            className="logo"
            src="../images/cocktail-citrus.png"
            alt="Citrus Sling"
          />
          <h2>Citrus Sling (Mocktail)</h2>
          <p>Seedlip®, Non-Alcoholic Spirits, Lemonade, Tonic, Lemon</p>
        </div>
        <div className="cocktail">
          <StaticImage
            className="logo"
            src="../images/cocktail-Jurassic.png"
            alt="Jurassic JUICE"
          />
          <h2>Jurassic Juice</h2>
          <p>Cîroc® Apple, Cranberry Juice, Lemonade</p>
        </div>
        <div className="cocktail">
          <StaticImage
            className="logo"
            src="../images/cocktail-Sangria-red.png"
            alt="RED SANGRIA"
          />
          <h2>Red Sangria</h2>
          <p>
            Crown Black Whisky, Red Wine, Orange Juice, Ginger Ale, Fruit
            Garnish
          </p>
        </div>
        <div className="cocktail">
          <StaticImage
            className="logo"
            src="../images/cocktail-Sangria-white.png"
            alt="WHITE SANGRIA"
          />
          <h2>White Sangria</h2>
          <p>
            Ciroc® Peach, White Wine, Pineapple Juice, Ginger Ale, Fruit Garnish
          </p>
        </div>
        <div className="cocktail">
          <StaticImage
            className="logo"
            src="../images/cocktail-caesar.png"
            alt="Signature Caesar"
          />
          <h2>Signature Caesar</h2>
          <p>
            Smirnoff Vodka, Carrol & Co Bloody Mix, Clamato Juice, Matt & Steves
            Extreme Bean, Lime
          </p>
        </div>
        <div className="cocktail">
          <StaticImage
            className="logo"
            src="../images/cocktail-buzzer.png"
            alt="Buzzer Beater"
          />
          <h2>Buzzer Beater</h2>
          <p>Smirnoff® Vodka, Watermelon Red Bull, Lime</p>
        </div>
        <div className="cocktail">
          <StaticImage
            className="logo"
            src="../images/cocktail-redbull.png"
            alt="Vodka &amp; Redbull"
          />
          <h2>Vodka &amp; Redbull</h2>
          <p>Vodka & Redbull</p>
        </div>
        {/*  
        Jurassic Juice, Sangria – red and white; and Caesar
        */}

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
