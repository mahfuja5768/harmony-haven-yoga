import Image from "next/image";
import bannerImg from "../../assets/images/yoga-coach.png";
import Container from "../shared/Container";

const Banner = () => {
  return (
    <div className=" bg-[#d1d5cc] py-2">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-3 items-center">
          <div className=" space-y-5">
            <h1 className=" text-5xl w-full text-[#51603c] font-semibold">
              Transform Your Life Through Yoga
            </h1>
            <h3 className="text-2xl">
              Discover Inner Peace, Strength, and Balance
            </h3>
            <p className="text-[#484848] text-justify">
              Welcome to Nadus Yoga Studio, where wellness meets mindfulness.
              Embrace a healthier lifestyle and embark on a transformative
              journey with our expert-led yoga sessions. Whether you are a
              beginner or an experienced practitioner, our classes cater to all
              levels.
            </p>
            <div className="flex items-center gap-3">
              <button className="bg-[#51603c] px-5 py-2 text-white border-4 border-transparent hover:border-[#667354] font-semibold hover:text-black hover:bg-transparent rounded-md transition-all duration-300">
                Book online yoga now
              </button>
              <button className="border-4 border-[#667354] px-5 py-2 hover:bg-[#667354]  font-semibold hover:text-white rounded-md transition-all duration-300">
                View courses
              </button>
            </div>
          </div>
          <div>
            <Image src={bannerImg} className=" w-3/2" alt="bannerImg" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
