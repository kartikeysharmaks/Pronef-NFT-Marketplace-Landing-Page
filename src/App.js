import "./App.css";
import { SectionWrapper, Features, Download } from "./components";
import styles from './styles/Global';
import assets from "./assets";

function App() {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTs. Start Selling & Growing"
        description="Buy, store and collect NFTs,exchange & earn crypto. Join 25+ million people using Pronef MarketPlace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface MarketPlace"
        description="Experience a Buttery UI of Pronef NFT MarketPlace. Smooth UI design with vibrants color and design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployement"
        description="ProNef is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with love by <span className="bold">Kartikey Sharma</span>
        </p>
      </div>
    </>
  );
};

export default App;
