import "./style/Navbar.css";

function Navbar() {
  return (
    <>
      <div className=" h-20 flex justify-between self-center p-1 bg-amber-600 text-white">
        <div className="logo">
          <img className="h-16 rounded-full self-center"
            src="/icon.png"
            alt="logo"
          />
        </div>
        <div className="nav-content flex w-fit pr-4 pl-4 self-center justify-center text-white">
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
