import Image from "next/image";
import Container from "../shared/Container";
import ContactImg from "../../assets/images/c5.jpg";
import LogoImg from "../../assets/images/logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

import { IoMailSharp } from "react-icons/io5";
import SectionTitle from "../shared/SectionTitle";

export default function Contact() {
  return (
    <Container>
      <SectionTitle heading={"Get in touch"} />
      <div className="flex justify-between items-center flex-col lg:flex-row gap-6">
        <div>
          <Image src={ContactImg} className=" rounded-xl " alt="ContactImg" />
        </div>
        <div className=" p-6 pb-8 bg-secondary flex justify-center rounded-xl items-center text-center flex-col">
          <Image src={LogoImg} className="w-52 h-52 " alt="LogoImg" />
          <h2 className=" text-3xl my-3 font-medium text-primary -mt-12">
            Schedule a call with me to see if I can help.
          </h2>
          <p className="w-3/4 text-[14px]">
            We are here to help you on your yoga journey. Whether you have
            questions about our classes we would love to hear from you.
          </p>
          <div className=" border-t-2 text-start my-4 pb-4">
            <h3 className="mt-4 flex justify-center items-center gap-2">
              <span>
                <FaLocationDot />
              </span>
              <span>
                5123 Market St. #22B Charlottesville, California 44635
              </span>
            </h3>
            <p className="flex justify-center items-center gap-2">
              <span>
                <FaPhoneAlt />
              </span>
              <span>+999333222</span>
            </p>
            <p className="flex justify-center items-center gap-2">
              <span>
                <IoMailSharp />
              </span>
              <span>yogai@gamil.com </span>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
