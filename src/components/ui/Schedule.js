import Container from "../shared/Container";

const Schedule = () => {
  return (
   <div className="">
     <Container>
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
