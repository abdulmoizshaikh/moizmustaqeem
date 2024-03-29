import React from 'react';

import {
  // Container,
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  // <Container>
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi all, I'm Moiz 👋
      </SectionTitle>
      <SectionText>
        A passionate Full Stack Software Developer 🚀 having an experience of
        building Web and Mobile applications with JavaScript / Reactjs / Nodejs
        / React Native and some other cool libraries and frameworks.
      </SectionText>
      {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      <Button onClick={props.handleClick}>Contact Me</Button>
    </LeftSection>
  </Section>
  // </Container>
);

export default Hero;
