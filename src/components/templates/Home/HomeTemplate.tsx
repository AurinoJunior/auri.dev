import { Container } from "../../atoms/Container/Container.styles";

import { Header } from "../../molecules/Header/Header";

import { Hero } from "./Hero/Hero";

export const HomeTemplate = () => {
  return (
    <Container>
      <Header />
      <Hero />
    </Container>
  );
};