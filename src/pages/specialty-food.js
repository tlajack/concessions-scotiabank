import React, { useState } from "react";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import styled from "styled-components";

const Container = styled.div`
  padding: 1em;
  h1,
  h2 {
    text-align: center;
  }

  h1 {
    font-size: 2em;
    margin-top: -0.8em;
  }

  h2 {
    font-size: 1.5em;
  }
  .scotiaBank {
    display: flex;
    justify-content: space-evenly;
  }
  .notice {
    text-align: center;
  }
  .icons {
    display: flex;
    justify-content: space-evenly;
    margin: 3em 0;
  }
  .offerings {
    margin: 3em auto;
    display: grid;
    grid-template-columns: 1fr 3fr;
    .title {
      grid-column: 1/3;
      h3 {
        display: inline-block;
      }
      display: flex;
      flex-direction: row;
      justify-content: center;
      .titleIcon {
        margin-left: 1em;
        height: 60px;
      }
    }
    .eventGrid {
      margin-top: 1em;
      grid-column: 1/3;
      justify-content: center;
      display: grid;
      grid-template-columns: 1fr 3fr;
      strong {
        font-family: "Proza Libre", sans-serif;
        font-weight: bold;
        color: black;
        font-size: larger;
      }

      .level {
        background-color: lightgray;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h4 {
          display: inline-block;
          transform: rotate(-90deg);
        }
      }
      .content {
        padding: 1em;
      }
    }
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

const SpecialtyPage = () => {
  const [menuState, setMenuState] = useState(false);

  function clickHandler() {
    setMenuState(!menuState);
  }

  return (
    <Layout>
      <Seo title="Specialty Offerings Guide" />
      <Container>
        <div className="scotiaBank">
          <StaticImage
            src="../images/logo-scotiabankarena.png"
            alt="Scotiabank Arena Logo"
            height={200}
          />
        </div>
        <h1>
          GLUTEN FRIENDLY, VEGETARIAN, VEGAN, HALAL &amp; KOSHER OFFERINGS
        </h1>
        <div className="icons">
          <StaticImage
            src="../images/icon-gluten.png"
            alt="glutten free"
            height={50}
          />
          <StaticImage
            src="../images/icon-veg.png"
            alt="vegetarian"
            height={50}
          />
          <StaticImage src="../images/icon-vegan.png" alt="vegan" height={50} />
          <StaticImage src="../images/icon-halal.png" alt="halal" height={50} />
          <StaticImage
            src="../images/icon-kosher.png"
            alt="kosher"
            height={50}
          />
        </div>
        <h2>Food Allergen Notice</h2>
        <p className="notice">
          Please inform our Concession Attendants of your allergy upon placing
          your order.
        </p>
        <p className="notice">
          Be advised we cannot guarantee that cross-contamination has not
          occurred during food preparation. If your allergy is severe, request
          to speak with a member of our Management team.{" "}
        </p>
        <p className="notice">
          Availability of specialty offerings is subject to change and during
          some concerts and special events, full menus may not be offered.
        </p>
        <div className="offerings" id="gluten">
          <div className="title">
            <h3>Gluten Friendly</h3>
            <StaticImage
              className="titleIcon"
              src="../images/icon-gluten.png"
              alt="gluten"
              height={60}
            />
          </div>
          <div className="eventGrid">
            <div className="level">
              <h4>EVENT LEVEL</h4>
            </div>
            <div className="content">
              <p>
                <strong>Hot Stove Carve</strong> – Carved Prime (exclude bun)
                served with GF potato chips
              </p>
              <p>
                <strong>EDO Sushi</strong> – Made to order upon request
              </p>
            </div>
          </div>

          <div className="eventGrid">
            <div className="level">
              <h4>100 LEVEL</h4>
            </div>
            <div className="content">
              <p>
                <strong>Mac &amp; Cheese Boutique (Section 103)</strong> –
                Classic Mac &amp; Cheese (request GF pasta), Bianco Mac &amp;
                Cheese (request GF pasta)
              </p>
              <p>
                <strong>EDO Sushi (Section 104)</strong> – Made to order upon
                request
              </p>
              <p>
                <strong>Hot Stove Carve (Section 117)</strong> – Carved Prime
                Rib (exclude bun), served with GF potato chips
              </p>
              <p>
                <strong>Porchetta &amp; Co. (Section 120)</strong> – House
                Special Porchetta Sandwich (exclude bun)
              </p>
              <p>
                <strong>Poutinerie/Pizza Pizza (Section 120)</strong> – Fries
                (request GF fries)
              </p>
              <p>
                <strong>St. Patties (Section 122)</strong> – Cheese Please
                Burger (request GF bun), Brazen Beef Burger (exclude onion
                straws, request GF bun)
              </p>
            </div>
          </div>

          <div className="eventGrid">
            <div className="level">
              <h4>300 LEVEL</h4>
            </div>
            <div className="content">
              <p>
                <strong>Cherry St. BBQ (Section 314)</strong> – Cherry Street
                Smoked Chicken Wings (Dry Rub option only), Smoked Pork Riblets
                (exclude sauce), Carved Prime Rib (exclude bun) served with GF
                potato chips
              </p>
              <p>
                <strong>Hot Stove Carve (Section 318)</strong> – Carved Prime
                Rib (exclude bun) served with GF potato chips
              </p>
              <p>
                <strong>Poutinerie (Section 322)</strong> – Fries (request GF
                fries)
              </p>
            </div>
          </div>

          <div className="eventGrid">
            <div></div>
            <div className="content">
              <p>
                <strong>Gluten Friendly Snacks</strong> — Popcorn, M&amp;M
                Peanuts
              </p>
              <p>
                <strong>Strongbow Cider</strong> is available at most bars and
                beer kiosks
              </p>
              {/* <p>
                <strong>Glutenberg Blonde Lager</strong> is available at World
                Class Bar on the Event Level, Molson Brewhouse at Section 108,
                Suds In The Six at Section 116 and Draught Deck at Section 314,
                as well as at bars located at Section 104, Section 118, Section
                311 and Section 323
              </p> */}
            </div>
          </div>
        </div>
        <div className="offerings" id="vegetarian">
          <div className="title">
            <h3>Vegetarian</h3>
            <StaticImage
              className="titleIcon"
              src="../images/icon-veg.png"
              alt="gluten"
              height={60}
            />
          </div>
          <div className="eventGrid">
            <div className="level">
              <h4>EVENT LEVEL</h4>
            </div>
            <div className="content">
              <p>
                <strong>EDO Sushi</strong> – Spicy Vegetarian Maki, Vegetarian
                Maki
              </p>
              <p>
                <strong>Aloette</strong> – Aloette Wedge Salad
              </p>
            </div>
          </div>
          <div className="eventGrid">
            <div className="level">
              <h4>100 LEVEL</h4>
            </div>
            <div className="content">
              <p>
                <strong>Grains &amp; Greens (Section 101)</strong> – Vegetarian
                options available
              </p>
              <p>
                <strong>Mac &amp; Cheese Boutique (Section 103)</strong> –
                Classic Grilled Cheese, Classic Mac &amp; Cheese, Bianco Mac
                &amp; Cheese
              </p>
              <p>
                <strong>EDO Sushi (Section 104)</strong> – Spicy Vegetarian
                Maki, Vegetarian Maki
              </p>
              <p>
                <strong>Food Junction (Section 107, 121)</strong> – Fries, Nacho
                Fries, Plant-Based Hot Dog
              </p>
              <p>
                <strong>Wicked Carib &amp; Doubles (Section 110)</strong> – Jerk
                Fritter Roti, Jerk Fritters
              </p>
              <p>
                <strong>Pizza Pizza (Section 111, Section 120)</strong> – Cheese
                Slice, Vegetarian Slice
              </p>
              <p>
                <strong>Hogtown (Section 112)</strong> – Plant-Based Hot Dog
              </p>
              <p>
                <strong>Tecolote (Section 120)</strong> – Mushroom Al Pastor
                Tacos, Nachos Tecolote
              </p>
              <p>
                <strong>Poutinerie/Pizza Pizza (Section 120)</strong> – Fries,
                Fries &amp; Gravy (ask for vegan gravy), Vegan Mushroom Poutine,
                Bruschetta Pizza Slice
              </p>
            </div>
          </div>
          <div className="eventGrid">
            <div className="level">
              <h4>300 LEVEL</h4>
            </div>
            <div className="content">
              <p>
                <strong>Pizza Pizza (Section 307 &amp; 321)</strong> – Cheese
                Slice, Vegetarian Slice
              </p>
              <p>
                <strong>Hogtown (Section 308 &amp; 320)</strong> – Plant-Based
                Hot Dog
              </p>
              <p>
                <strong>Food Junction (Section 311)</strong> – Fries, Nacho
                Fries
              </p>
              <p>
                <strong>Food Junction (Section 323)</strong> – Fries, Nacho
                Fries
              </p>
              <p>
                <strong>Poutinerie (Section 322)</strong> – Fries, Vegan
                Mushroom Poutine
              </p>
            </div>
          </div>
          <div className="eventGrid">
            <div></div>
            <div className="content">
              <p>
                <strong>Vegetarian Snacks</strong> – Nachos, Popcorn, M&amp;M
                Peanuts, Skittles, Salted Pretzel
              </p>
            </div>
          </div>
        </div>{" "}
        {/* ########### vegetarian ############*/}
        <div className="offerings" id="vegan">
          <div className="title">
            <h3>Vegan</h3>
            <StaticImage
              className="titleIcon"
              src="../images/icon-vegan.png"
              alt="gluten"
              height={60}
            />
          </div>
          <div className="eventGrid">
            <div className="level">
              <h4>
                EVENT
                <br />
                LEVEL
              </h4>
            </div>
            <div className="content">
              <p>
                <strong>EDO Sushi</strong> – Vegan options available upon
                request
              </p>
            </div>
          </div>
          <div className="eventGrid">
            <div className="level">
              <h4>100 LEVEL</h4>
            </div>
            <div className="content">
              <p>
                <strong>Grains &amp; Greens (Section 101)</strong> – other Vegan
                options available
              </p>
              <p>
                <strong>EDO Sushi (Section 104)</strong> – Vegan options
                available upon request
              </p>
              <p>
                <strong>Wicked Carib &amp; Doubles (Section 110)</strong> – Jerk
                Fritter Roti, Jerk Fritters
              </p>
              <p>
                <strong>Hogtown (Section 112)</strong> – Plant-Based Hot Dog
              </p>
              <p>
                <strong>TECOLOTE (Section 120)</strong> – Nachos Tecolote
                (exclude cheese), Mushroom Al Pastor Tacos
              </p>
              <p>
                <strong>Poutinerie/Pizza Pizza (Section 120)</strong> – Fries,
                Vegan Mushroom Poutine
              </p>
              <p>
                <strong>St. Patties (Section 122)</strong> – Vegan Burger
              </p>
              <p>
                <strong>Food Junction (Section 107, 121)</strong> – Plant-Based
                Hot Dog
              </p>
            </div>
          </div>
          <div className="eventGrid">
            <div className="level">
              <h4>300 LEVEL</h4>
            </div>
            <div className="content">
              <p>
                <strong>Hogtown (Section 308 &amp; 320)</strong> – Plant-Based
                Hot Dog
              </p>
              <p>
                <strong>Poutinerie (Section 322)</strong> – Fries, Vegan
                Mushroom Poutine
              </p>
              <p>
                <strong>Food Junction (Section 323)</strong> – Plant-Based Hot
                Dog
              </p>
            </div>
          </div>
          <div className="eventGrid">
            <div></div>
            <div className="content">
              <p>
                <strong>Vegan Snacks</strong> – Nachos (exclude cheese), Salted
                Pretzel
              </p>
            </div>
          </div>
        </div>{" "}
        {/* ########### Vegan ############*/}
        <div className="offerings" id="halal">
          <div className="title">
            <h3>Halal</h3>
            <StaticImage
              className="titleIcon"
              src="../images/icon-halal.png"
              alt="gluten"
              height={60}
            />
          </div>
          <div className="eventGrid">
            <div className="level">
              <h4>
                EVENT
                <br />
                LEVEL
              </h4>
            </div>
            <div className="content">
              <p>
                <strong>Hot Stove Carve</strong> – Carved Prime Rib served with
                potato chips
              </p>
            </div>
          </div>
          <div className="eventGrid">
            <div className="level">
              <h4>100 LEVEL</h4>
            </div>
            <div className="content">
              <p>
                <strong>Food Junction (Section 107, 121)</strong> – Jerk Tater
                Tots
              </p>
              <p>
                <strong>Noodle Bao (Section 106)</strong> – Thai Peanut Chicken
                Noodles
              </p>
              <p>
                <strong>Hot Stove Carve (Section 117)</strong> – Carved Prime
                Rib served with potato chips
              </p>
              <p>
                <strong>Wicked Carib (Section 110)</strong> – Curry Beef Roti,
                Jerk Chicken Roti, Jerk Chicken Sandwich, Jerk Fritter Roti,
                Jerk Fritters
              </p>
              <p>
                <strong>Poutinerie/Pizza Pizza (Section 120)</strong> –
                Rotisserie Chicken Poutine served with vegan gravy
              </p>
            </div>
          </div>
          <div className="eventGrid">
            <div className="level">
              <h4>300 LEVEL</h4>
            </div>
            <div className="content">
              <p>
                <strong>Food Junction (Section 311)</strong> – Jerk Tater Tots
              </p>
              <p>
                <strong>Cherry St. BBQ (Section 314)</strong> – Carved Prime Rib
                served with potato chips
              </p>
              <p>
                <strong>Hot Stove Carve (Section 318)</strong> – Carved Prime
                Rib served with potato chips
              </p>
              <p>
                <strong>Poutinerie (Section 322)</strong> – Rotisserie Chicken
                Poutine served with vegan gravy
              </p>
            </div>
          </div>
        </div>{" "}
        {/* ########### Halal ############*/}
        <div className="offerings" id="kosher">
          <div className="title">
            <h3>Kosher</h3>
            <StaticImage
              className="titleIcon"
              src="../images/icon-kosher.png"
              alt="gluten"
              height={60}
            />
          </div>
          <div className="eventGrid">
            <div className="level">
              <h4>100 LEVEL</h4>
            </div>
            <div className="content">
              <p>
                <strong>Bay St. Deli (Section 105)</strong> – Dedicated Kosher
                concession stand. Operating hours dependent on religious
                observation.
              </p>
            </div>
          </div>
        </div>{" "}
        {/* ########### Kosher ############*/}
        <div
          role="button"
          tabIndex={-1}
          onClick={clickHandler}
          onKeyDown={clickHandler}
          className="menuButton"
        >
          Menu
        </div>
        <FlyingMenuContainer className={menuState ? "active" : "inactive"}>
          <ul>
            <li>
              <a
                role="button"
                tabIndex={-2}
                onClick={clickHandler}
                onKeyDown={clickHandler}
                href="#gluten"
              >
                Gluten Friendly
              </a>
            </li>
            <li>
              <a
                role="button"
                tabIndex={-3}
                onClick={clickHandler}
                onKeyDown={clickHandler}
                href="#vegetarian"
              >
                Vegetarian
              </a>
            </li>
            <li>
              <a
                role="button"
                tabIndex={-4}
                onClick={clickHandler}
                onKeyDown={clickHandler}
                href="#vegan"
              >
                Vegan
              </a>
            </li>
            <li>
              <a
                role="button"
                tabIndex={-5}
                onClick={clickHandler}
                onKeyDown={clickHandler}
                href="#halal"
              >
                Halal
              </a>
            </li>
            <li>
              <a
                role="button"
                tabIndex={-5}
                onClick={clickHandler}
                onKeyDown={clickHandler}
                href="#kosher"
              >
                Kosher
              </a>
            </li>
          </ul>
        </FlyingMenuContainer>
      </Container>
    </Layout>
  );
};

export default SpecialtyPage;
