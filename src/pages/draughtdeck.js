import React, { useState } from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const MenuItem = styled.div`
  display: grid;

  * {
    margin: 0;
  }

  grid-template-columns: 5fr 1fr;
  margin-bottom: 2rem;

  h2 {
    align-self: center;
    font-size: 1.2rem;
  }
  .price {
    align-self: center;
    font-family: "Proza Libre", sans-serif;
  }

  .description {
    grid-column: 1/2;
  }
  .menuPhoto {
    grid-column: 1/3;
    margin-bottom: 1em;
  }
`;

const Drinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  h1 {
    text-align: left !important;
  }
  .photo {
    grid-column: 1/2;
  }
  .description {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .drinkType {
    /* text-align: right; */
  }
  .wide {
    grid-column: 1/3;
    margin-right: 1em;
  }
  .drinkPrice {
    /* text-align: right; */
    padding-right: 1em;
  }

  @media (max-width: 768px) {
    font-size: 0.8em !important;
    line-height: 1em;
    p {
      margin: 0 0 1em;
      font-size: 1.1em !important;
      line-height: 1.4em;
    }
    h1 {
      font-size: 1.5em !important;
      line-height: 1.5em !important;
    }
  }
`;

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

const DraughtDeck = styled.div`
  background-color: #eee;
  color: black;
  .notes {
    margin: 0 1em;
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

const Liquor = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  .liquorTitle {
    grid-column: 1/2;
    text-align: center;
  }
  .liquorPrice {
    grid-column: 2/3;
    margin-left: 1em;
  }
  h2 {
    color: var(--red);
    grid-column: 1/3;
    text-align: center;
  }
`;

const CherryPage = () => {
  const [menuState, setMenuState] = useState(false);

  function clickHandler() {
    setMenuState(!menuState);
  }

  return (
    <Layout bgColour={"#341a0f"}>
      <Seo title="Cherry St Online Menu" />
      <MenuContainer>
        <StaticImage
          className="logo"
          src="../images/logo-CherrySt.png"
          alt="Cherry St. Logo"
        />
        <h1 id="entree">Entrée</h1>
        <MenuItem>
          <StaticImage
            className="menuPhoto"
            src="../images/CherrySt-.jpg"
            alt="Prime Rib Sandwich"
          />
          <h2>Prime Rib Sandwich</h2>
          <p className="price">19.75</p>
          <div className="description">
            <p>
              Hand Carved AAA Prime Rib Sandwich served on a Fresh Onion Bun
              with Kettle Chips
            </p>
          </div>
        </MenuItem>
        <MenuItem>
          <StaticImage
            className="menuPhoto"
            src="../images/CherrySt-7.jpg"
            alt="Prime"
          />
          <h2>Brisket Sandwich</h2>
          <p className="price">18.00</p>
          <div className="description">
            <p>
              Texas Style Beef Brisket smoked over white oak, Pickles, Onions
              and House BBQ sauce on a Toasted Potato Scallion Bun
            </p>
          </div>
        </MenuItem>
        <MenuItem>
          <StaticImage
            className="menuPhoto"
            src="../images/CherrySt-2.jpg"
            alt="Prime"
          />
          <h2>Pulled Pork Sandwich</h2>
          <p className="price">16.00</p>
          <div className="description">
            <p>
              Slow Smoked Pork Shoulder, Slaw, Pickle and BBQ Sauce on a Toasted
              Potato Scallion Bun
            </p>
          </div>
        </MenuItem>
        <MenuItem>
          <StaticImage
            className="menuPhoto"
            src="../images/CherrySt-3.jpg"
            alt="Prime"
          />
          <h2>Cherry Street Smoked Chicken&nbsp;Wings</h2>
          <p className="price">16.00</p>
          <div className="description">
            <p>
              24hr Brined with your choice of sauce: Regular, Spicy or Dry Rub
              (4 pieces)
            </p>
          </div>
        </MenuItem>
        <MenuItem>
          <StaticImage
            className="menuPhoto"
            src="../images/CherrySt-4.jpg"
            alt="Prime"
          />
          <h2>Smoked Pork Riblets</h2>
          <p className="price">15.00</p>
          <div className="description">
            <p>Slow Smoked Spare Ribs tossed in our Signature Sauce</p>
          </div>
        </MenuItem>
        <MenuItem>
          <StaticImage
            className="menuPhoto"
            src="../images/CherrySt-5.jpg"
            alt="Prime"
          />
          <h2>Burnt End Chili Cheese Fries</h2>
          <p className="price">14.00</p>
          <div className="description">
            <p>
              Homestyle Fried Potatoes, Brisket Chili and Cheddar Queso Sauce
            </p>
          </div>
        </MenuItem>
        <MenuItem>
          <StaticImage
            className="menuPhoto"
            src="../images/CherrySt-6.jpg"
            alt="Prime"
          />
          <h2>Frito Pie</h2>
          <p className="price">9.00</p>
          <div className="description">
            <p>Think Loaded Nachos in a Bag</p>
          </div>
        </MenuItem>
        <p className="notes">Prices exclude all applicable taxes</p>
        <h1 id="nonalcoholic">NON-ALCOHOLIC</h1>
        <MenuItem>
          <h2>Collector Cup</h2>
          <p className="price">10.00</p>
          <div className="description">
            <p>Coke, Diet Coke, Sprite, Coke Zero Sugar, Fanta</p>
          </div>
        </MenuItem>
        <MenuItem>
          <h2>Coca-Cola Fountain Beverages</h2>
          <p className="price">6.50</p>
          <div className="description">
            <p>Coke, Diet Coke, Sprite, Coke Zero Sugar, Fanta</p>
          </div>
        </MenuItem>
        <MenuItem>
          <h2>Coca-Cola Bottled Beverages</h2>
          <p className="price">6.50</p>
          <div className="description">
            <p>Root Beer, Nestea, Apple Juice, AHA&nbsp;Sparkling Water</p>
          </div>
        </MenuItem>
        <MenuItem>
          <h2>smartwater</h2>
          <p className="price">6.00</p>
        </MenuItem>
        <MenuItem>
          <h2>Red Bull</h2>
          <p className="price">6.75</p>
          <div className="description">
            <p>Regular or Sugar Free</p>
          </div>
        </MenuItem>
        <p className="notes">Prices exclude all applicable taxes</p>
        <h1 id="snacks">SNACKS</h1>
        <MenuItem>
          <h2>Bagged Popcorn</h2>
          <p className="price">8.75</p>
        </MenuItem>
        <MenuItem>
          <h2>Bagged Chocolate</h2>
          <p className="price">9.75</p>
        </MenuItem>
        <MenuItem>
          <h2>Bagged Candy</h2>
          <p className="price">7.75</p>
        </MenuItem>
        <p className="notes">Prices exclude all applicable taxes</p>
        <DraughtDeck id="alcohol">
          <StaticImage
            className="logo"
            src="../images/draughtDeck.png"
            alt="A kitten"
          />
          <p className="notes">
            You must be 19 years of age or older to purchase and consume
            alcohol. Please have your ID ready. Scotiabank Arena has a 2-drink
            limit.
          </p>
          <Drinks>
            <div>
              <StaticImage src="../images/drink-01.png" alt="Drink" />
            </div>
            <div>
              <h1>Molson Canadian</h1>
              <div className="description">
                <p className="drinkType">DRAUGHT</p>
                <p className="drinkPrice">
                  20oz - $13.00
                  <br />
                  28oz - $16.50
                </p>
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$11.75</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <StaticImage src="../images/drink-01a.png" alt="Drink" />
            </div>
            <div>
              <h1>Coors Light</h1>
              <div className="description">
                <p className="drinkType">DRAUGHT</p>
                <p className="drinkPrice">
                  20oz - $13.00
                  <br />
                  28oz - $16.50
                </p>
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$11.75</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <StaticImage src="../images/drink-02.png" alt="Drink" />
            </div>
            <div>
              <h1>Coors Original</h1>
              <div className="description">
                <p className="drinkType">DRAUGHT</p>
                <p className="drinkPrice">
                  20oz - $13.75
                  <br />
                  28oz - $17.25
                </p>
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$12.75</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <StaticImage src="../images/drink-03.png" alt="Drink" />
            </div>
            <div>
              <h1>BELGIAN MOON</h1>
              <div className="description">
                <p className="drinkType">DRAUGHT</p>
                <p className="drinkPrice">
                  20oz - $13.75
                  <br />
                  28oz - $17.25
                </p>
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$12.75</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <StaticImage src="../images/drink-04.png" alt="Drink" />
            </div>
            <div>
              <h1>Hop Valley IPA</h1>
              <div className="description">
                <p className="drinkType">DRAUGHT</p>
                <p className="drinkPrice">
                  20oz - $13.75
                  <br />
                  28oz - $17.25
                </p>
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$12.75</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <StaticImage src="../images/drink-05.png" alt="Drink" />
            </div>
            <div>
              <h1>CREEMORE LAGER</h1>
              <div className="description">
                <p className="drinkType">DRAUGHT</p>
                <p className="drinkPrice">
                  20oz - $13.75
                  <br />
                  28oz - $17.25
                </p>
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$12.75</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <StaticImage src="../images/drink-06.png" alt="Drink" />
            </div>
            <div>
              <h1>CREEMORE IPA</h1>
              <div className="description">
                <p className="drinkType">DRAUGHT</p>
                <p className="drinkPrice">
                  20oz - $13.75
                  <br />
                  28oz - $17.25
                </p>
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$12.75</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <StaticImage src="../images/drink-07.png" alt="Drink" />
            </div>
            <div>
              <h1>Coors Organic</h1>
              <div className="description">
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$12.75</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <StaticImage src="../images/drink-08.png" alt="Drink" />
            </div>
            <div>
              <h1>Sol</h1>
              <div className="description">
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$12.75</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <StaticImage src="../images/drink-09.png" alt="Drink" />
            </div>
            <div>
              <h1>HEINEKEN</h1>
              <div className="description">
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$13.25</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <StaticImage src="../images/drink-10.png" alt="Drink" />
            </div>
            <div>
              <h1>strongbow cider</h1>
              <div className="description">
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$13.25</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <StaticImage src="../images/drink-11.png" alt="Drink" />
            </div>
            <div>
              <h1>Vizzy</h1>
              <div className="description">
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$13.00</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <StaticImage src="../images/drink-12.png" alt="Drink" />
            </div>
            <div>
              <h1>Rickard’s Red</h1>
              <div className="description">
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$12.75</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <StaticImage src="../images/drink-13.png" alt="Drink" />
            </div>
            <div>
              <h1>Miller Lite</h1>
              <div className="description">
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$11.75</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <StaticImage src="../images/drink-14.png" alt="Drink" />
            </div>
            <div>
              <h1>Miller High Life</h1>
              <div className="description">
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$12.75</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <StaticImage src="../images/drink-15.png" alt="Drink" />
            </div>
            <div>
              <h1>Smirnoff Ice</h1>
              <div className="description">
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$13.00</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <StaticImage src="../images/drink-16.png" alt="Drink" />
            </div>
            <div>
              <h1>Murphy’s Irish Stout</h1>
              <div className="description">
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$13.25</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <StaticImage src="../images/drink-17.png" alt="Drink" />
            </div>
            <div>
              <h1>Molson Ultra</h1>
              <div className="description">
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$11.75</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <StaticImage src="../images/drink-18.png" alt="Drink" />
            </div>
            <div>
              <h1>Glutenberg Blonde</h1>
              <div className="description">
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$13.25</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <StaticImage src="../images/drink-19.png" alt="Drink" />
            </div>
            <div>
              <h1>Coors Edge</h1>
              <div className="description">
                <p className="drinkType">Non-Alcoholic Beer</p>
                <p className="drinkPrice"></p>
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$7.50</p>
              </div>
            </div>
          </Drinks>
          <h1 className="sectionTitle">Liquor</h1>

          <Drinks>
            <div>
              <StaticImage src="../images/drink-20.png" alt="Drink" />
            </div>
            <div>
              <h1>Lemon Zinger</h1>
              <div className="description">
                <p className="drinkType wide">
                  CȊROC Vodka, Ginger Beer, Lemonade, Lemon
                </p>
                <p className="drinkPrice">$17.75</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <StaticImage src="../images/drink-21.png" alt="Peach Punch" />
            </div>
            <div>
              <h1>Peach Punch</h1>
              <div className="description">
                <p className="drinkType wide">
                  CȊROC Peach, Cranberry Juice, Orange Juice, Lime
                </p>
                <p className="drinkPrice">$17.75</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <StaticImage src="../images/drink-22.png" alt="Buzzer Beater" />
            </div>
            <div>
              <h1>Buzzer Beater</h1>
              <div className="description">
                <p className="drinkType wide">
                  Smirnoff Vodka, Watermelon Red Bull, Lime
                </p>
                <p className="drinkPrice">$17.75</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <StaticImage src="../images/drink-23.png" alt="Citrus Sling" />
            </div>
            <div>
              <h1>Citrus Sling</h1>
              <div className="description">
                <p className="drinkType wide">
                  Seedlip, Non-Alcoholic Spirits, Lemonade, Tonic, Lemon
                </p>
                <p className="drinkPrice">$17.75</p>
              </div>
            </div>
          </Drinks>
          <hr />
          <Liquor>
            <p className="liquorTitle">PREMIUM</p>
            <p className="liquorPrice">
              1oz - $11.00
              <br />
              2oz - $19.75
            </p>
            <p className="liquorTitle">DELUXE</p>
            <p className="liquorPrice">
              1oz - $11.75
              <br />
              2oz - $21.50
            </p>
            <p className="liquorTitle">ULTRA-PREMIUM</p>
            <p className="liquorPrice">
              1oz - $12.75
              <br />
              2oz - $23.50
            </p>
            <h1 className="sectionTitle">WINE</h1>
            <p className="liquorTitle">HOUSE</p>
            <p className="liquorPrice">
              6oz - $12.50
              <br />
              9oz - $18.00
            </p>
            <p className="liquorTitle">PREMIUM</p>
            <p className="liquorPrice">
              6oz - $14.50
              <br />
              9oz - $21.00
            </p>
          </Liquor>
        </DraughtDeck>
        <p className="notes">Prices exclude all applicable taxes</p>
        &nbsp;
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
                href="#entree"
              >
                Entreé
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

export default CherryPage;
