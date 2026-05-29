import "./style/Hero.css";
import Navbar from "./Navbar";
import heroBg from "../assets/herobg.webp";
import Button from "./button";



function Hero() {
  return (
    <div className="h-screen">
      <Navbar></Navbar>
      <div className="h-[calc(100vh-100px)] bg-no-repeat bg-fill bg-right flex justify-between">
        <div className=" w-3/6 min-h-full flex  items-center">
          <div className="w-3/4 pl-11">
            <h2 className="text-8xl font-extrabold leading-20">Be The Change</h2>
            <p className="pt-6 pl-2">
              We don't ask for much, just help us with what you can- Be it
              Money, Skill or Your Time
            </p>
<Button className="mt-2" onClick={() => window.open('https://www.google.com', '_blank', 'noopener,noreferrer')}>
  Donate
</Button>
          </div>
        </div>
        <div className=" w-3/6 min-h-full flex justify-center items-center ">
          <div className="h-96 w-80">
            <img
              src={heroBg}
              alt=""
              className="object-cover w-full h-full border-4 rounded-2xl border-gray-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
