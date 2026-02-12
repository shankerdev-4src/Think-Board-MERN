import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md border-b border-gray-200 fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          {/* Logo / App Name */}
          <h1 className="text-3xl font-bold text-blue-600 font-mono tracking-tight">
            ThinkBoard
          </h1>

          {/* Add Note Button */}
          <div className="flex items-center gap-4">
            <Link
              to={"/create"}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              <PlusIcon className="w-5 h-5" />
              <span className="font-medium">New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
