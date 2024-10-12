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
              <p><strong>Hot Stove Carve (Event Level)</strong> - Hot Dog (request GF bun)</p>
              <p><strong>EDO Sushi (Event Level)</strong> - Made to order upon request (select events only)</p>
            </div>
          </div>

          <div className="eventGrid">
            <div className="level">
              <h4>100 LEVEL</h4>
            </div>
            <div className="content">
              <p><strong>Food Junction (Section 107)</strong> - Hot Dog (request GF bun)</p>
              <p><strong>Wicked Carib (Section 110)</strong> - Wicked Spiced Beef Roti Wrap, Wicked Vegan Roti Wrap, Doubles</p>
              <p><strong>Hogtown (Section 112)</strong> - Hot Dog (request GF bun), Chili Dog (request GF bun)</p>
              <p><strong>Food Junction (Section 120)</strong> - Hot Dog (request GF bun)</p>
              <p><strong>St. Patties Burgers + Poutine (Section 122)</strong> - Cheese Please Burger (request GF bun), Triple OT Burger (remove Onion Ring, request GF bun), Smokehouse Burger (request GF bun), Vegan Burger (request GF bun), Fries</p>
            </div>
          </div>

          <div className="eventGrid">
            <div className="level">
              <h4>300 LEVEL</h4>
            </div>
            <div className="content">
              <p><strong>Cherry Street Bar-B-Que (Section 314)</strong> - Brisket Sandwich (request GF bun), Pulled Pork Sandwich (request GF bun), Cherry Street Double Stack Burger (request GF bun)</p>
              <p><strong>Food Junction (Section 311)</strong> - Hot Dog (request GF bun)</p>
              <p><strong>EDO Sushi (Section 318)</strong> - Made to order upon request (select events only)</p>
              <p><strong>Hogtown (Section 320)</strong> - Hot Dog (request GF bun), Chili Dog (request GF bun)</p>
            </div>
          </div>

          <div className="eventGrid">
            <div></div>
            <div className="content">
              <p><strong>Gluten Friendly Snacks</strong> — Popcorn</p>
              <p><strong>Strongbow Cider</strong> is available at most bars and beer kiosks</p>
              <p><strong>Ancestral Quinoa Beer</strong> is available at Coors Light Chill Zone at Section 314, as well as at bars located at Section 104, Section 111 and Section 323.</p>
            </div>
          </div>

        </div>


        <div className="offerings" id="vegetarian">
          <div className="title">
            <h3>Vegetarian</h3>
            <StaticImage
              className="titleIcon"
              src="../images/icon-veg.png"
              alt="vegetarian"
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
              <p><strong>Aloette Go (Event Level)</strong> - Santa Fe Crunch</p>
            </div>
          </div>

          <div className="eventGrid">
            <div className="level">
              <h4>100 LEVEL</h4>
            </div>
            <div className="content">
              <p><strong>Food Junction (Section 107)</strong> - Fries, Nacho Fries, Plant-Based Hot Dog, Loaded Nachos</p>
              <p><strong>Pizza Pizza (Section 108, Section 111, Section 121)</strong> - Cheese Slice, Vegetarian Slice</p>
              <p><strong>Wicked Carib (Section 110)</strong> - Vegan Doubles, Wicked Vegan Roti Wrap</p>
              <p><strong>Hogtown (Section 112)</strong> - Plant-Based Hot Dog</p>
              <p><strong>Hot Stove Carve (Section 117)</strong> - Truffled Mac & Cheese, Truffled Grilled Cheese</p>
              <p><strong>Food Junction (Section 120)</strong> - Fries</p>
              <p><strong>St. Patties Burgers + Poutine (Section 122)</strong> - Vegan Burger, Fries, Vegan Mushroom Poutine, Fries & Gravy (ask for vegan gravy)</p>
            </div>
          </div>

          {/* <div className="eventGrid">
            <div className="level">
              <h4>GALLERY<br/>LEVEL</h4>
            </div>
            <div className="content">
              <p>
                <strong>Gallery Concessions</strong> - Cheese Slice
              </p>
            </div>
          </div> */}

          <div className="eventGrid">
            <div className="level">
              <h4>300 LEVEL</h4>
            </div>
            <div className="content">
              <p><strong>Pizza Pizza (Section 307 & 321)</strong> - Cheese Slice, Vegetarian Slice</p>
              <p><strong>EDO Sushi (Section 318)</strong> - Vegetarian Maki; Spicy Vegetarian Maki; Spicy Mango Maki (select events only)</p>
              <p><strong>Hogtown (Section 320)</strong> - Plant-Based Hot Dog</p>
              <p><strong>Food Junction (Section 311)</strong> - Fries, Nacho Fries, Loaded Nachos, Plant-Based Hot Dog</p>
              <p><strong>Poutinerie (Section 322)</strong> - Fries, Vegan Mushroom Poutine, Fries & Gravy (ask for vegan gravy)</p>
              <p><strong>Hot Stove Carve (Section 319)</strong> - Truffle Grilled Cheese</p>
            </div>
          </div>
          <div className="eventGrid">
            <div></div>
            <div className="content">
              <p><strong>Vegetarian Snacks</strong> - Popcorn, Salted Pretzel, Plant Based Drumstick (Section 321 only)</p>
            </div>
          </div>
        </div>{" "}



        {/* ########### vegan ############*/}
        <div className="offerings" id="vegan">
          <div className="title">
            <h3>Vegan</h3>
            <StaticImage
              className="titleIcon"
              src="../images/icon-vegan.png"
              alt="vegan"
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
              <p><strong>EDO Sushi (Event Level)</strong> - Vegan options available upon request</p>
            </div>
          </div>

          <div className="eventGrid">
            <div className="level">
              <h4>100 LEVEL</h4>
            </div>
            <div className="content">
              <p><strong>Molson Market (Section 101)</strong> - EDO Sushi vegan options available upon request</p>
              <p><strong>Hogtown (Section 112)</strong> - Plant-Based Hot Dog</p>
              <p><strong>Food Junction (Section 107)</strong> - Plant-Based Hot Dog</p>
              <p><strong>St. Patties Burgers + Poutine (Section 122)</strong> - Vegan Burger, Fries, Vegan Mushroom Poutine, Fries & Gravy (ask for vegan gravy)</p>
            </div>
          </div>
          <div className="eventGrid">
            <div className="level">
              <h4>300 LEVEL</h4>
            </div>
            <div className="content">
              <p><strong>Food Junction (Section 311)</strong> - Plant-Based Hot Dog</p>
              <p><strong>EDO Sushi (Section 318)</strong> - Vegan options available upon request</p>
              <p><strong>Hogtown (Section 320)</strong> - Plant-Based Hot Dog</p>
              <p><strong>Poutinerie (Section 322)</strong> - Fries, Vegan Mushroom Poutine, Fries & Gravy (ask for vegan gravy)</p>
              <p><strong>Food Junction (Section 323)</strong> - Plant-Based Hot Dog</p>
            </div>
          </div>
          <div className="eventGrid">
            <div></div>
            <div className="content">
              <p><strong>Vegan Snacks</strong> - Popcorn, Salted Pretzel, Plant Based Drumstick (Section 321 only)</p>
            </div>
          </div>
        </div>{" "}


        {/* ########### Halal ############*/}
        <div className="offerings" id="halal">
          <div className="title">
            <h3>Halal</h3>
            <StaticImage
              className="titleIcon"
              src="../images/icon-halal.png"
              alt="halal"
              height={60}
            />
          </div>

          <div className="eventGrid">
            <div className="level">
              <h4>EVENT<br/> LEVEL</h4>
            </div>
            <div className="content">
              <p><strong>Hot Stove Carve (Event Level)</strong> - Prime Rib Sandwich</p>
              <p><strong>Aloette Go (Event Level)</strong> - Fried Chicken Sandwich, Spicy Chicken Sandwich, Chicken Tenders</p>
            </div>
          </div>

          <div className="eventGrid">
            <div className="level">
              <h4>100 LEVEL</h4>
            </div>
            <div className="content">
              <p><strong>Wicked Carib (Section 110)</strong> - Prime Rib Sandwich, Wicked Jerk Chicken Sandwich, Doubles, Wicked Jerk Chicken Roti Wrap, Wicked Spiced Beer Roti Wrap, Wicked Vegan Roti Wrap</p>
              <p><strong>Gallery Bars (Section 108M, Section 117M)</strong> - Prime Rib Sandwich</p>
              <p><strong>St. Patties Burgers + Poutine (Section 122)</strong> - Rotisserie Chicken Poutine (sub vegan gravy), Vegan Mushroom Poutine, Classic Poutine (sub vegan gravy), Fries + Gravy (sub vegan gravy)</p>
            </div>
          </div>

          <div className="eventGrid">
            <div className="level">
              <h4>300 LEVEL</h4>
            </div>
            <div className="content">
              <p><strong>Cherry Street Bar-B-Que (Section 314)</strong> - Prime Rib Sandwich</p>
              <p><strong>Hot Stove Carve (Section 318)</strong> - Prime Rib Sandwich</p>
              <p><strong>Poutinerie (Section 322)</strong> - Rotisserie Chicken Poutine (sub vegan gravy), Vegan Mushroom Poutine, Classic Poutine (sub vegan gravy), Fries + Gravy (sub vegan gravy)</p>
              <p><strong>King's Hawaiian (Section 323)</strong> - Hot Honey Chicken, Buffalo Chicken, Fried Chicken Sandwich</p>
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
                <strong>Bay St. Deli (Section 105)</strong> - Dedicated Kosher concession stand. Operating hours dependent on religious observation.
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
