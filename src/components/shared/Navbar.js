import Link from "next/link";
import logo from "../../assets/images/logo.png";
import Image from "next/image";

const Navbar = () => {
  const navItems = [
    {
      route: "Home",
      pathName: "/",
    },
    {
      route: "Courses",
      pathName: "/",
    },
    {
      route: "Meditations",
      pathName: "/",
    },
    {
      route: "Articles",
      pathName: "/",
    },
    {
      route: "Contact",
      pathName: "/",
    },
  ];

  return (
    <div className="max-w-[1240px] px-4 mx-auto rounded-full py-4 shadow-2xl fixed left-0 z-10 mb-12 right-0 navbar bg-primary text-white">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems.map((item) => (
              <Link key={item} href={item.pathName}>
                <button className="text-black"> {item.route} </button>
              </Link>
            ))}
          </ul>
        </div>
        <a className="btn hidden md:flex btn-ghost text-xl  justify-center">
          <Image
            src={logo}
            alt="logo"
            className=" bg-white rounded-full h-12 w-12"
          />
          <span>Yogi</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item) => (
            <Link key={item} href={item.pathName}>
              <button className="text-white mr-6 text-medium">
                | {item.route} |
              </button>
            </Link>
          ))}
        </ul>
      </div>
      <div className="navbar-end ">
        <a className="btn flex md:hidden btn-ghost text-xl  justify-center">
          <Image
            src={logo}
            alt="logo"
            className=" bg-white rounded-full h-12 w-12"
          />
          <span>Yogi</span>
        </a>
        <button className="border-4 hidden md:flex bg-white rounded-full border-transparent px-5 py-1 text-primary hover:bg-secondary  font-semibold hover:text-white me-5 transition-all duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
