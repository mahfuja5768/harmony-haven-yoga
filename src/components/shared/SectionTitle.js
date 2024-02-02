const SectionTitle = ({ heading }) => {
  return (
      <h3 className="text-2xl md:text-3xl lg:text-5xl text-primary font-bold  text-center py-3 px-7 rounded-sm my-12">
        {heading}
      </h3>
  );
};

export default SectionTitle;
