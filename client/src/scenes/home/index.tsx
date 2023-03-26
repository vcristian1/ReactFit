import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../shared/ActionButton";
import HomePageText from "../../assets/HomePageText.png";
import HomePageGraphic from "../../assets/HomePageText.png";
import SponsorRedbull from "../../assets/HomePageText.png";
import SponsorForbes from "../../assets/HomePageText.png";
import SponsorFortune from "../../assets/HomePageText.png";
import { SelectedPage } from '../../shared/types';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
     id="home"
     className="gap -16 bg-gray-20 py-10 md:h-full"
    >

    </section>
  )
}

export default Home