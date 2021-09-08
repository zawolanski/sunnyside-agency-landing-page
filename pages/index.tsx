import Comments from 'components/Comments';
import Galery from 'components/Galery';
import Introduction from 'components/Introduction';
import Tiles from 'components/Tiles';
import type { NextPage } from 'next';

const Home: NextPage = () => (
  <>
    <Introduction />
    <Tiles />
    <Comments />
    <Galery />
  </>
);

export default Home;
