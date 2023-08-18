import OutfitPicker from "../components/OutfitPicker";
import Wardrobe from "../components/Wardrobe"

const Home = () => {
  return (
    <div className="home">
      <h1 className="font-semibold leading-6 text-gray-900">My wardrobe</h1>
      <OutfitPicker />
      <Wardrobe />
    </div>
  );
}

export default Home;