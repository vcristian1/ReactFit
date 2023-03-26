import { useState} from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../shared/ActionButton";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: ( value: SelectedPage) => void;
};

const Navbar = ({  selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

  return (
    <nav>
        <div
         className={`${flexBetween} fixed top-0 z-30 w-full py-6`} 
        >
          <div className={`${flexBetween} mx-auto w-5/6`}>
            {/* Name and Menu Icon within this container */}
            <div className={`${flexBetween} w-full gap-16`}>
                {/* Left Side */}
                <img src={Logo} alt="logo" />
                {/* Right Side */}

                {isAboveMediumScreens ? (
                    <div className={`${flexBetween} w-full`}>
                        {/* Inner Left Side (All Links) */}
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        </div>
                        {/* Inner Right Side (Sign In and Become a Member buttons)*/}
                        <div className={`${flexBetween} gap-2 text-sm`}>
                            <button>Sign In</button>
                            <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                        </div>
                    </div>
                    ) : (
                        // If it is not aboveModeiumScreen then the below code will render for mobile screens
                        <button className="rounded-full bg-secondary-500 p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <Bars3Icon className="h-6 w-6 text-white"/>
                        </button>
                    )}
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar