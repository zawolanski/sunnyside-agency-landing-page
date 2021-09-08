import Image from 'next/image';
import Cone from 'public/images/image-gallery-cone.jpg';
import Milkbottles from 'public/images/image-gallery-milkbottles.jpg';
import Orange from 'public/images/image-gallery-orange.jpg';
import Sugarcubes from 'public/images/image-gallery-sugarcubes.jpg';
import Styled from './galery.styled';

const Galery = (): JSX.Element => (
  <Styled.Grid>
    <Image alt="" src={Cone} />
    <Image alt="" src={Orange} />
    <Image alt="" src={Milkbottles} />
    <Image alt="" src={Sugarcubes} />
  </Styled.Grid>
);

export default Galery;
