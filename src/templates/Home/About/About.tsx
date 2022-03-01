import React from "react";

import { Skillset } from "./Skillset/Skillset";

import { SubTitle, Paragraph, Box } from "./About.styles";

export const About = () => {
  return (
    <Box id="about">
      <div>
        <h2>
          Salve galera! <br />
          Aurino Junior aqui.
        </h2>
        <SubTitle>
          Não importa quanto tempo você tem, mas como você o usa. - Ekko
        </SubTitle>
        <Paragraph>
          Atualmente sou desenvolvedor web front-end no GetNinjas, me formei em
          ciência da computação em 2019 e desde então tenho desbravado esse
          mundo da programação web, metodologias ágeis e cultura devops.
        </Paragraph>
        <Paragraph>
          Possuo experiência em teste AB, criação de design system, melhoria de
          métricas em web core vitals e criação de testes automatizados.
        </Paragraph>
        <Paragraph>
          Bom, espero conseguir compartilhar um pouco dos meus estudos com vocês
          e aprender bastante durantes esse processo, bora aprender juntos 🚀
        </Paragraph>
      </div>
      <Skillset />
    </Box>
  );
};
