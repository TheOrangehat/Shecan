import "./style/Hero.css";
import Navbar from "./Navbar";
import heroBg from "../assets/herobg.webp";
import heroBg2 from "../assets/2.webp";
import heroBg3 from "../assets/3.webp";
import Button from "./button";

import Photos from "./Photos";
  const images = [
  { id: 1, url: heroBg2 },
  { id: 2, url: heroBg },
  { id: 3, url: heroBg3 }
];

function Hero() {
  return (
    <div className="h-screen">
      <Navbar></Navbar>

      <div className="h-[calc(100vh-100px)] bg-no-repeat bg-fill bg-right flex ">
        <div className=" w-3/6 min-h-full flex  items-center">
          <div className="w-3/4 pl-11">
            <h2 className="text-8xl font-extrabold leading-20">Be The Change</h2>
            <p className="pt-6 pl-2">
              We don't ask for much, just help us with what you can- Be it
              Money, Skill or Your Time
            </p>
<Button className="mt-2" onClick={() => window.open('https://pages.razorpay.com/shecanfoundation', '_blank', 'noopener,noreferrer')}>
  Donate
</Button>
          </div>
        </div>
        <div className=" w-3/6 min-h-full flex justify-center items-center ">
          
            <Photos images={images} />
          
        </div>
      </div>
    </div>
  );
}

export default Hero;
