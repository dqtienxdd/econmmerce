import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold">Sign up for our newsletter</h3>
          <p className="text-sm text-gray-600 mt-2">
            Be the first to know about our special offers, new product launches, and events.
          </p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-4 py-2 border rounded-l-md"
            />
            <button className="px-4 py-2 bg-black text-white rounded-r-md">
              Sign Up
            </button>
          </form>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-bold">Shop</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/">Women</Link></li>
            <li><Link href="/">Men</Link></li>
            <li><Link href="/">Kids</Link></li>
            <li><Link href="/">Shoes</Link></li>
            <li><Link href="/">Equipment</Link></li>
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h3 className="text-lg font-bold">Help</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/">Help Center</Link></li>
            <li><Link href="/">Order Status</Link></li>
            <li><Link href="/">Returns & Warranty</Link></li>
            <li><Link href="/">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
