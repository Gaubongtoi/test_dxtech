import icons from '../../../../assets/icons';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white p-10 rounded-t-[45px]">
            <div className="max-w-6xl mx-auto space-y-8">
                {/* Navigation + Social */}
                <div className="flex flex-col md:flex-row justify-between items-start">
                    {/* Logo + Contact Info */}
                    <div className="space-y-4">
                        <img src={icons.IconWhite} alt="" />
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex space-x-6 text-gray-300">
                        <a href="#" className="underline">
                            About us
                        </a>
                        <a href="#" className="underline">
                            Services
                        </a>
                        <a href="#" className="underline">
                            Use Cases
                        </a>
                        <a href="#" className="underline">
                            Pricing
                        </a>
                        <a href="#" className="underline">
                            Blog
                        </a>
                    </nav>

                    {/* Social Icons */}
                    <div className="flex space-x-4 text-gray-300 text-lg">
                        <a href="#" className="hover:text-white">
                            <img src={icons.LinkedWhiteIcon} alt="" />
                        </a>
                        <a href="#" className="hover:text-white">
                            <img src={icons.FaceWhiteIcon} alt="" />
                        </a>
                        <a href="#" className="hover:text-white">
                            <img src={icons.TwitterWhiteIcon} alt="" />
                        </a>
                    </div>
                </div>

                {/* Newsletter Subscription */}
                <div className="flex justify-between">
                    <div className="w-1/2 space-y-3">
                        <div className="bg-lime-400 text-black px-3 py-1 rounded-md font-semibold inline-block">
                            Contact us:
                        </div>
                        <p>Email: info@positivus.com</p>
                        <p>Phone: 555-567-8901</p>
                        <p>
                            Address: 1234 Main St <br />
                            Moonstone City, Stardust State 12345
                        </p>
                    </div>
                    <div className="p-4 flex-1 rounded-lg gap-6 flex items-center">
                        <input
                            type="email"
                            placeholder="Email"
                            className="bg-transparent border border-gray-400 text-white px-4 py-5 w-1/2 rounded-md"
                        />
                        <button className="bg-lime-400 text-black px-4 py-5 w-1/2 rounded-md font-semibold">
                            Subscribe to news
                        </button>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-700 pt-4 flex justify-between text-gray-400 text-sm">
                    <p>© 2023 Positivus. All Rights Reserved.</p>
                    <a href="#" className="hover:underline">
                        Privacy Policy
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
