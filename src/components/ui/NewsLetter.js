import Container from "../shared/Container";
import CustomButton from "../shared/CustomButton";

const NewsLetter = () => {
  return (
    <Container>
      
      <div className=" bg-secondary rounded-lg p-12  flex justify-center flex-col items-center">
        <h2 className="text-3xl text-primary font-semibold md:text-4xl">
          Subscribe to Wellness Newsletter
        </h2>
        <h3 className=" text-primary text-sm my-1">
          Stay Informed, Stay Inspired
        </h3>
        <div className="flex justify-center md:flex-row flex-col my-5 items-center gap-2">
          <input
            placeholder="Your Email"
            className="py-3 rounded-md px-5 outline-4 outline-primary"
          />
          <CustomButton isFill text={"Subscribe"} />
        </div>
      </div>
    </Container>
  );
};

export default NewsLetter;
