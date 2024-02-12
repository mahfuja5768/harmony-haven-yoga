import Container from "../shared/Container";

export default function Review() {
  return (
    <div>
      <Container>
        <div className=" bg-primary text-white text-center p-12 rounded-xl">
         <p className=" text-2xl  my-2 font-medium"> Ask me anything or give a review...........</p>
         <div className="flex justify-center md:flex-row flex-col my-5 items-center gap-2">
          <input
            placeholder="Write here.."
            className="md:py-3 py-2 rounded-md px-5 mb-3 md:mb-0 outline-4 outline-primary"
          />
          <button className="border-4 hidden md:flex bg-white rounded-full border-transparent px-5 py-1 text-primary hover:bg-secondary  font-semibold hover:text-white me-5 transition-all duration-300">
         Send</button>
        </div>
        </div>
      </Container>
    </div>
  );
}
