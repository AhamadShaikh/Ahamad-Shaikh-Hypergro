import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-[#007bff] p-4 flex justify-between items-center shadow-md z-50">
            <div className="flex items-center">
                <img src={logo} alt="Video Clone" className="h-8 w-auto mr-2" />
                <h1 className="text-xl font-bold text-white ">
                    SnapFlix
                </h1>
            </div>
            <div>
                <ul className="flex space-x-6">
                    <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
                    <li><a href="#" className="text-white hover:text-gray-300">About</a></li>
                    <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
