import Image from "next/image";
import Container from "../shared/Container";
import ContactImg from "../../assets/images/c5.jpg";
import LogoImg from "../../assets/images/logo.png";

export default function Contact() {
  return (
    <Container>
      <div className="flex "> 
        <Image
          src={ContactImg}
          className=" w-3/4 lg:w-3/4 md:w-1/2 mx-auto"
          alt="ContactImg"
        />
      </div>
      <div>
        <Image
          src={LogoImg}
          className=" w-3/4 lg:w-3/4 md:w-1/2 mx-auto"
          alt="LogoImg"
        />
        <h2>Schedule a call with me to see if I can help.</h2>
        <p>
          We are here to help you on your yoga journey. Whether you have
          questions about our classes, need assistance with booking, or just
          want to say hello, we would love to hear from you.
        </p>
        <hr />

      </div>
    </Container>
  );
}
