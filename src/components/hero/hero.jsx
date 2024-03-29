import { Section, Container, Title, Descr, Btn } from "./hero.styled";
import Stats from "../stats/stats";



const Hero = () => {
  return (
    <Section>
      <Container>
        <Title>The Future Decentralized Reserve Currency</Title>
        <Descr>
          Olympus is building OHM, a community-owned, decentralized and
          censorship-resistant reserve currency that is asset-backed, deeply
          liquid and used widely across Web3.
        </Descr>
        <Btn>Discover How</Btn>
        <Stats />
      </Container>
    </Section>
  );
};

export default Hero;
