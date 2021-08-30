import type { NextPage } from 'next';

const Home: NextPage = () => (
  <div>
    <h1>Next.js template</h1>
    <h2 id="setup__with">Setup with: </h2>
    <ul aria-labelledby="setup__with">
      <li>Next.js</li>
      <li>Typescript</li>
      <li>
        styled-components
        <ul>
          <li>styled-normalize</li>
          <li>styled-reset</li>
        </ul>
      </li>
      <li>eslint (Airbnb config)</li>
      <li>prettier</li>
    </ul>
    <h2 id="available__commands">Available commands: </h2>
    <ul aria-labelledby="available__commands">
      <li>
        <code>npm run dev</code>
      </li>
      <li>
        <code>npm start</code>
      </li>
      <li>
        <code>npm run build</code>
      </li>
      <li>
        <code>npm lint</code>
      </li>
      <li>
        <code>npm lint:fix</code>
      </li>
    </ul>
  </div>
);

export default Home;
