import Link from "next/link";
import logo from '../../assets/images/logo.png'
import { FaFacebookF, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
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
    <div className="text-center relative bg-primary pt-28 rounded-t-full">
      <div className="max-w-[1240px] mx-auto text-white">
        <div className=" ">
          <div className=" flex flex-col xl:flex-row gap-8 xl:justify-around justify-center items-center border-b-2 border-r-4 p-5 border-dashed">
            <div className="">
              <h2 className="text-3xl font-medium mb-5 justify-center flex items-center gap-3">
                <span>Yogi</span>
                <Image
                  src={logo}
                  alt="logo"
                  className=" bg-white rounded-full h-12 w-12"
                />
              </h2>
              <h3>5123 Market St. #22B Charlottesville, California 44635</h3>
              <p>Phn - +999333222</p>
              <p>email - harmonyHavenYoga@gamil.com</p>
            </div>
            <div className="flex flex-col">
              <h6 className="text-xl font-semibold">You Can Learn</h6>
              <a className="link link-hover">Yoga Practices and Techniques</a>
              <a className="link link-hover">Community Building</a>
              <a className="link link-hover">Personalized Guidance</a>
              <a className="link link-hover">Engagement and Inspiration</a>
            </div>
          </div>

          <div className="flex gap-12 xl:justify-around justify-center items-center border-t-2 border-l-4 p-5 border-dashed text-start">
            <div>
              <h6 className="text-2xl font-bold">Links</h6>
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={item.pathName}
                  className="flex  mx-auto items-center font-medium gap-6"
                >
                  <button className="text-gray-300 font-semibold mb-1">
                    {item.route}
                  </button>
                </Link>
              ))}
            </div>
            <div className="mb-4 md:mb-0 text-center">
              <h2 className="text-2xl font-bold">Nadus Yoga Studio</h2>
              <p className="text-sm">Transforming Lives, One Pose at a Time</p>
            </div>
          </div>
          <div className=" flex items-center flex-col pb-16">
            <span className="text-2xl font-semibold"> Follow us on -</span>
            <hr />
            <nav className="flex justify-center items-center mt-5">
              <div className="flex justify-start lg:items-center   lg:justify-center gap-3">
                <a
                  href="https://www.facebook.com/"
                  className="hover:-translate-y-2 duration-300 bg-secondary text-black p-2 hover:bg-transparent hover:text-secondary"
                  target="blank"
                >
                  <FaFacebookF></FaFacebookF>
                </a>
                <a
                  href="https://www.dribbble.com/"
                  className="hover:-translate-y-2 duration-300 bg-secondary text-black p-2 hover:bg-transparent hover:text-secondary"
                  target="blank"
                >
                  <FaLinkedin></FaLinkedin>
                </a>
                <a
                  href="https://www.twitter.com/"
                  className="hover:-translate-y-2 duration-300 bg-secondary text-black p-2 hover:bg-transparent hover:text-secondary"
                  target="blank"
                >
                  <FaTwitter></FaTwitter>
                </a>
              </div>
            </nav>
          </div>
          <div className="flex justify-center gap-4 absolute bottom-0 left-0 right-0 text-center mb-1">
            <p>
              Copyright &copy; {new Date().getFullYear()} All Rights Reserved
              Here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
