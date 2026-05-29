import "./style/Navbar.css";

function Navbar() {
  return (
    <>
      <div className=" h-20 flex justify-between self-center p-1 bg-[#fe592d6b]">
        <div className="logo">
          <img className="h-16 rounded-full self-center"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/Aq2NJ23MzBH2rx2j/she-YlenJon1O7ieeEoa.jpg"
            alt="logo"
          />
        </div>
        <div className="nav-content flex w-fit pr-4 pl-4 self-center justify-center text-black">
            <div className="navlink w-fit pr-4 pl-4 ">Home</div>
            <div className="navlink w-fit pr-4 pl-4 ">Our Story</div>
            <div className="navlink w-fit pr-4 pl-4 ">Our Certificate</div>
            <div className="navlink w-fit pr-4 pl-4 ">Donate</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
