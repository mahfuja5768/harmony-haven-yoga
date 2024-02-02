import Container from "./Container";
import { FaFacebookF, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
      <div className=" relative bg-primary py-2 mt-12 text-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 justify-center md:justify-between gap-6 items-center">
            <div>
              <h2 className="text-3xl font-medium ">Harmony-Haven-Yoga</h2>
              <h3>5123 Market St. #22B Charlottesville, California 44635</h3>
              <p>Phn - +999333222</p>
              <p>email - harmonyHavenYoga@gamil.com</p>
            </div>
            <div></div>
            <div className=" flex items-center">
              <span> Follow on-</span>
              <nav className="flex justify-center items-center">
                <div className="flex justify-start md:items-center   md:justify-center gap-3">
                  <a
                    href="https://www.facebook.com/"
                    className="hover:-translate-y-2 duration-300"
                    target="blank"
                  >
                    <FaFacebookF ></FaFacebookF>
                  </a>
                  <a
                    href="https://www.dribbble.com/"
                    className="hover:-translate-y-2 duration-300"
                    target="blank"
                  >
                    <FaLinkedin></FaLinkedin>
                  </a>
                  <a
                    href="https://www.twitter.com/"
                    className="hover:-translate-y-2 duration-300"
                    target="blank"
                  >
                    <FaTwitter></FaTwitter>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </Container>
          <div className=" absolute left-0 right-0 bottom-0 text-center mb-4">
            <p>
              Copyright &copy; {new Date().getFullYear()} All Rights Reserved
              Here.
            </p>
          </div>
      </div>
    );
};

export default Footer;