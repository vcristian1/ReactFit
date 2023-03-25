import { useState} from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";

type Props = {

}

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between";

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
                <div className={`${flexBetween} w-full`}>
                    {/* Inner Left Side (All Links) */}
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <p>Home</p>
                        <p>Benefits</p>
                        <p>Our Classes</p>
                        <p>Contact Us</p>
                    </div>
                    {/* Inner Right Side (Sign In and Become a Member buttons)*/}
                    <div className={`${flexBetween} gap-2 text-sm`}>
                        <button>Sign In</button>
                        <button>Become a Member</button>

                    </div>
                </div>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar