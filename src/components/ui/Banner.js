import Image from "next/image";
import bannerImg from "../../assets/images/yoga-coach.png";
import Container from "../shared/Container";
import CustomButton from "../shared/CustomButton";

const Banner = () => {
  return (
    <div className=" bg-[#d1d5cc] py-2">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center md:justify-between gap-6 items-center">
          <div className=" space-y-5">
            <h1 className=" text-5xl w-full text-[#51603c] font-bold">
              Transform Your Life Through Yoga
            </h1>
            <h3 className="text-2xl text-primary">
              Discover Inner Peace, Strength, and Balance
            </h3>
            <p className="text-gray text-justify">
              Welcome to Nadus Yoga Studio, where wellness meets mindfulness.
              Embrace a healthier lifestyle and embark on a transformative
              journey with our expert-led yoga sessions. Whether you are a
              beginner or an experienced practitioner, our classes cater to all
              levels.
            </p>
            <div className="flex items-center gap-3">
              <CustomButton isFill text={"Book online yoga now"} />
              <CustomButton text={"View courses"} />
            </div>
          </div>
          <div>
            <Image src={bannerImg} className=" w-3/2 mx-auto" alt="bannerImg" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
