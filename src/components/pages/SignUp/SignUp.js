import HeroSection from '../../HeroSection';
import Pricing from '../../Pricing';
import { homeObjThree } from './Data';

const SignUp = () => {
  return (
    <>
      <HeroSection {...homeObjThree} />
      <Pricing />
    </>
  );
};

export default SignUp;
