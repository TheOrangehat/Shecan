import Button from "./button";


function Footer() {
  return (
    <footer className="bg-amber-600 text-white px-8 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Logo & Socials */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Your Logo</h2>
          <p className="text-sm mb-4">
            Together we can change the world
          </p>

          <div className="flex gap-4 text-xl">
            <a href="#">📘</a>
            <a href="#">📸</a>
          </div>
        </div>

        {/* Column 1 */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Explore</h3>
          <ul className="space-y-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Certificates</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Get Involved</h3>
          <ul className="space-y-2">
            <li><a href="#">Get In Touch</a></li>
            <li><a href="#">Join Us</a></li>
            <li><a href="#">Volunteer</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Support</h3>
          <Button className="mt-2 bg-black text-amber-600" onClick={() => window.open('https://pages.razorpay.com/shecanfoundation', '_blank', 'noopener,noreferrer')}>
            Donate
          </Button>
        </div>

      </div>

      <div className="border-t border-amber-500 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} She Can Foundation. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
