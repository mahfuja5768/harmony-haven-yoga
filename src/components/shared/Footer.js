import Link from "next/link";
import Container from "./Container";
import { FaFacebookF, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa";

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
    <div className=" relative bg-secondary py-2 mt-12 text-primary">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-5 justify-center md:justify-between gap-6 items-center">
          <div className=" col-span-2">
            <h2 className="text-3xl font-medium mb-5">Harmony-Haven-Yoga</h2>
            <h3>5123 Market St. #22B Charlottesville, California 44635</h3>
            <p>Phn - +999333222</p>
            <p>email - harmonyHavenYoga@gamil.com</p>
          </div>
          <div className="flex flex-col">
            <h6 className="text-xl font-semibold text-primary">You Can Learn</h6>
            <a className="link link-hover">Yoga Practices and Techniques</a>
            <a className="link link-hover">Community Building</a>
            <a className="link link-hover">Personalized Guidance</a>
            <a className="link link-hover">Engagement and Inspiration</a>
          </div>
          <div>
            <h6 className="text-xl font-semibold">Links</h6>
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
          <div className=" flex items-center flex-col">
            <span className="text-2xl font-semibold"> Follow us on -</span>
            <hr />
            <nav className="flex justify-center items-center mt-5">
              <div className="flex justify-start md:items-center   md:justify-center gap-3">
                <a
                  href="https://www.facebook.com/"
                  className="hover:-translate-y-2 duration-300 bg-primary text-white p-2 hover:bg-transparent hover:text-primary"
                  target="blank"
                >
                  <FaFacebookF></FaFacebookF>
                </a>
                <a
                  href="https://www.dribbble.com/"
                  className="hover:-translate-y-2 duration-300 bg-primary text-white p-2 hover:bg-transparent hover:text-primary"
                  target="blank"
                >
                  <FaLinkedin></FaLinkedin>
                </a>
                <a
                  href="https://www.twitter.com/"
                  className="hover:-translate-y-2 duration-300 bg-primary text-white p-2 hover:bg-transparent hover:text-primary"
                  target="blank"
                >
                  <FaTwitter></FaTwitter>
                </a>
              </div>
            </nav>
          </div>
        </div>
        <div className="flex justify-center gap-4 absolute bottom-0 left-0 right-0 text-center mb-4">
          <p>
            Copyright &copy; {new Date().getFullYear()} All Rights Reserved
            Here.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
