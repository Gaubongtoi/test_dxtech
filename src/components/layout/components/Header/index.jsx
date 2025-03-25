import icons from '../../../../assets/icons';

function Header() {
    return (
        <header className="mt-11 mb-[68px] flex items-center justify-between">
            <div>
                <img src={icons.Icon} alt="Logo" />
            </div>
            <div className="h-full">
                <a href="#" className="px-3 text-xl">
                    About us
                </a>
                <a href="#" className="px-3 ml-4 text-xl">
                    Services
                </a>
                <a href="#" className="px-3 ml-4 text-xl">
                    Use Cases
                </a>
                <a href="#" className="px-3 ml-4 text-xl">
                    Pricing
                </a>
                <a href="#" className="px-3 ml-4 text-xl">
                    Blog
                </a>
                <button className="px-9 py-5 border border-black  rounded-[14px] ml-6 text-xl">Request a quote</button>
            </div>
        </header>
    );
}

export default Header;
