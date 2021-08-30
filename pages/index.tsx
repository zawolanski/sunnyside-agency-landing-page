import type { NextPage } from 'next';
import {
  ListItem,
  List,
  Header,
  Content,
  Container,
  ListHeader,
  Code,
} from 'styles/pages';

const Home: NextPage = () => (
  <Container>
    <Content>
      <Header>Next.js template</Header>
      <ListHeader id="setup__with">Setup with: </ListHeader>
      <List isCircle aria-labelledby="setup__with">
        <ListItem>Next.js</ListItem>
        <ListItem>Typescript</ListItem>
        <ListItem>styled-components</ListItem>
        <ListItem>styled-normalize</ListItem>
        <ListItem>styled-reset</ListItem>
        <ListItem>eslint (Airbnb config)</ListItem>
        <ListItem>prettier</ListItem>
      </List>
      <ListHeader id="available__commands">Available commands: </ListHeader>
      <List aria-labelledby="available__commands">
        <ListItem>
          <Code>npm run dev</Code>
        </ListItem>
        <ListItem>
          <Code>npm start</Code>
        </ListItem>
        <ListItem>
          <Code>npm run build</Code>
        </ListItem>
        <ListItem>
          <Code>npm lint</Code>
        </ListItem>
        <ListItem>
          <Code>npm lint:fix</Code>
        </ListItem>
      </List>
    </Content>
  </Container>
);

export default Home;
