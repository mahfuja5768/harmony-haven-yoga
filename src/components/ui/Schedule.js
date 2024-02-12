import Container from "../shared/Container";
import LogoImg from "../../assets/images/logo.png";
import Image from "next/image";

const Schedule = () => {
  return (
    <div className="">
      <Container>
        <div className=" flex justify-center flex-col items-center mb-12">
          <Image src={LogoImg} className="w-52 h-52 " alt="LogoImg" />
          <h2 className=" -mt-12 w-3/4 leading-10 mx-auto text-center text-2xl lg:text-3xl py-3 font-medium">
            Join me on a beautiful joruney to your body and soul reaching for
            the top performance of your physical and mental health.
          </h2>
        </div>
        <div className=" bg-secondary grid grid-cols-1 md:grid-cols-3 justify-around text-center border-2 rounded-lg border-secondary p-6 items-center">
          <div>
            <h3 className=" font-bold text-gray mb-3 text-xl">Every Sunday</h3>
            <h2 className=" font-bold text-2xl">7am - 10am</h2>
          </div>
          <div>
            <h3 className=" font-bold text-gray mb-3 text-xl">Location</h3>
            <h2 className=" font-bold text-2xl">Live streaming</h2>
          </div>
          <div>
            <h3 className=" font-bold text-gray mb-3 text-xl">Yoga Day</h3>
            <h2 className=" font-bold text-2xl">10th August</h2>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Schedule;
