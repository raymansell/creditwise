import HeroSection from '../../HeroSection';
import Pricing from '../../Pricing';
import { homeObjTwo } from './Data';

const Products = () => {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjTwo} />
    </>
  );
};

export default Products;
