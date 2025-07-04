import Logo from "@/assets/Logo";
import { Link } from "react-router";
import { ModeToggle } from "../mood-toggle";

const Navbar = () => {
  return (
    <header className="shadow-sm">
      <div className="container mx-auto px-5 py-3 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <Logo />
          <h1 className="text-xl font-bold dark:text-white text-gray-800">
            <span className="text-green-600">Task</span> Master
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-3">
          {/* <Link
            to="/task"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-md transition duration-200"
          >
            Task
          </Link> */}
          <Link
            to="/users"
            className="bg-blue-500 ml-[1180px] hover:bg-blue-600 text-white px-4 py-1.5 rounded-md transition duration-200"
          >
            Users
          </Link>
        </nav>
        <ModeToggle></ModeToggle>
      </div>
    </header>
  );
};

export default Navbar;
