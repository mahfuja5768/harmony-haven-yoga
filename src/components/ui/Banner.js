import Image from "next/image";
import bannerImg from "../../assets/images/yoga-coach.png";
import Container from "../shared/Container";
import CustomButton from "../shared/CustomButton";
import { FaFacebookF, FaLinkedin, FaTwitter , FaDribbble, FaInstagram , } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";


const Banner = () => {
  return (
    <div className=" bg-[#d1d5cc] py-2 rounded-b-full border-b-4 border-r-primary ">
      <Container>
        <div className="grid grid-cols-1  px-6  xl:grid-cols-2 justify-center md:justify-between gap-6 items-center">
            <div className=" pl-16">
              <h1 className=" text-5xl w-full text-[#51603c] font-bold">
                Transform Your Life Through Yoga
              </h1>
              <h3 className="text-2xl text-primary my-2">
                Discover Inner Peace, Strength, and Balance
              </h3>
              <p className="text-gray text-justify">
                Welcome to Nadus Yoga Studio, where wellness meets mindfulness.
                Embrace a healthier lifestyle and embark on a transformative
                journey with our expert-led yoga sessions. Whether you are a
                beginner or an experienced practitioner, our classes cater to
                all levels.
              </p>
              <div className="flex items-center gap-3 mt-6">
                <CustomButton isFill text={"Book now"} />
                <CustomButton text={"View courses"} />
              </div>
            </div>
          <div className="flex justify-center   items-center gap-6 space-y-5">
            <div className="flex  flow-row gap-5">
              <Image
                src={bannerImg}
                className=" w-3/4 lg:w-3/4 md:w-1/2 mx-auto"
                alt="bannerImg"
              />
            </div>
            <div className=" hidden xl:flex  flex-col justify-evenly text-primary gap-3 text-2xl">
              <a
                href="https://www.facebook.com/"
                className="hover:-translate-y-2 duration-300 bg-secondary text-black p-2 hover:bg-transparent hover:text-secondary"
                target="blank"
              >
                <FaFacebookF className="text-primary"></FaFacebookF>
              </a>
              <a
                href="https://www.dribbble.com/"
                className="hover:-translate-y-2 duration-300 bg-secondary text-black p-2 hover:bg-transparent hover:text-secondary"
                target="blank"
              >
                <FaLinkedin className="text-primary"></FaLinkedin>
              </a>
              <a
                href="https://www.twitter.com/"
                className="hover:-translate-y-2 duration-300 bg-secondary text-black p-2 hover:bg-transparent hover:text-secondary"
                target="blank"
              >
                <FaTwitter className="text-primary"></FaTwitter>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
