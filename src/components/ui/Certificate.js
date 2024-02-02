import Image from "next/image";
import tabImg from "../../assets/images/certificates-ipad.webp";
import certificate from "../../assets/images/certificates.webp";
import SectionTitle from "../shared/SectionTitle";
import Container from "../shared/Container";
const Certificate = () => {
  return (
    <Container>
      <SectionTitle heading={"Certification"} />
      <div className="grid grid-cols-1 md:grid-cols-2 my-12 justify-center items-center">
        <div className="relative flex  justify-center">
          <Image src={certificate} className="w-1/2" alt="certificateImg" />
          <Image
            src={tabImg}
            className=" -mb-20 -ml-12 w-1/2"
            alt="certificateImg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-semibold mx-auto">
            COLLECT CERTIFICATES FOR THE COURSES AND CHALLENGES YOU COMPLETE
          </h1>
        </div>
      </div>
    </Container>
  );
};

export default Certificate;
