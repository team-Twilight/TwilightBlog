import React from "react";
import { Bottom } from "../components/home/Bottom/Bottom";
import { Header } from "../components/home/Header/Header";
import { Section } from "../components/home/Section/Section";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Section />
      <Bottom />
    </>
  );
};

export default Home;
