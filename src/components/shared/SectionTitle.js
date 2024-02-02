const SectionTitle = ({ heading }) => {
  return (
      <div className="flex justify-center items-center">
        <h3 className=" text-2xl md:text-3xl lg:text-4xl text-primary font-bold  text-center  rounded-sm md:my-8  my-6">
        {heading}
      </h3>
      <div className="text-2xl w-1/4 bg-primary h-1 rounded-full"></div>
      </div>
  );
};

export default SectionTitle;
