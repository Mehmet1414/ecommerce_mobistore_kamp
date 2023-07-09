import BestSeller from "../../components/BestSeller";
import LatestProduct from "../../components/LatestProduct";
import MobileShowCase from "../../components/Showcase";
import Slider from "../../components/Slider";

const MainPage = () => {
  return (
    <>
      <Slider />
      <MobileShowCase />
      <LatestProduct />
      <BestSeller />
    </>
  );
};
export default MainPage;
