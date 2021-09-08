import Comments from 'components/Comments';
import Introduction from 'components/Introduction';
import Tiles from 'components/Tiles';
import type { NextPage } from 'next';

const Home: NextPage = () => (
  <>
    <Introduction />
    <Tiles />
    <Comments />
  </>
);

export default Home;
