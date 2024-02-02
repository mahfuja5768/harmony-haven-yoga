import Image from "next/image";
import client1 from "../../assets/images/c1.jpg";
import client2 from "../../assets/images/c2.jpg";
import client3 from "../../assets/images/c5.jpg";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";

const Client = () => {
  return (
    <Container>
      <SectionTitle heading={"Testimonials"} />
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-24 pt-16">
        <div className=" flex flex-col  relative justify-center items-center bg-secondary p-5 rounded-md">
          <Image
            src={client1}
            className=" -mt-24 w-32 h-32 rounded-full mx-auto"
            alt="client1"
          />
          <h2 className="text-2xl font-medium my-2 text-primary">Sarah M.</h2>
          <p className=" mx-auto text-justify text-gray">
            Joining Nadus Yoga Studio has been a game-changer for me. The
            personalized guidance and nurturing environment have helped me find
            not only physical strength but also inner peace. Grateful for this
            transformative journey!
          </p>
        </div>
        <div className=" flex flex-col  relative justify-center items-center  bg-secondary p-5 rounded-md">
          <Image
            src={client2}
            className=" -mt-24  w-32 h-32 rounded-full mx-auto"
            alt="client2"
          />
          <h2 className="text-2xl  font-medium my-2 text-primary">Alexa P</h2>
          <p className=" mx-auto text-justify text-gray">
            I have tried various yoga studios, but none compare to the authentic
            and welcoming atmosphere here. The instructors are not just experts
            but compassionate guides. Every class feels like a step towards a
            healthier, happier me.
          </p>
        </div>
        <div className=" flex flex-col  relative justify-center items-center  bg-secondary p-5 rounded-md">
          <Image
            src={client3}
            className="-mt-24 w-32 h-32 rounded-full mx-auto"
            alt="client2"
          />
          <h2 className="text-2xl  font-medium my-2 text-primary">Emily R.</h2>
          <p className=" mx-auto text-justify text-gray">
            As a beginner, I was a bit apprehensive, but the supportive
            community at Nadus Studio made me feel right at home. The positive
            energy is contagious, and I look forward to each session with
            excitement.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Client;
