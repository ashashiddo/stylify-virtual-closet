import OutfitPicker from "../components/OutfitPicker";
import Wardrobe from "../components/Wardrobe"

const Home = () => {
  return (
    <div className="home">
      <h1>My wardrobe</h1>
      <OutfitPicker />
      <Wardrobe />
    </div>
  );
}

export default Home;