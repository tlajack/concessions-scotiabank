import React from "react";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Scotiabank Arena Online Menu" />
      <StaticImage
        className="menuPhoto"
        src="../images/logo-scotiabankarena.png"
        alt="Scotiabank Arena Logo"
      />

      <p>Scotiabank Arena Online Menu:</p>
      <ul>
        <li>
          <a href="/draughtdeck">Molson Draught Deck</a>
        </li>
        <li>
          <a href="/specialty">Specialty Offerings </a>
        </li>
      </ul>
    </Layout>
  );
};

export default IndexPage;
