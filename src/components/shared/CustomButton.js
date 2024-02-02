const CustomButton = ({isFill, text }) => {
  return (
    <>
      {isFill ? (
        <button className="bg-[#51603c] px-5 py-1 md:py-2 text-white border-4 border-transparent hover:border-[#667354] font-semibold hover:text-primary hover:bg-transparent rounded-md transition-all duration-300">
          {text}
        </button>
      ) : (
        <button className="border-4 border-[#667354] px-5 py-1 md:py-2 hover:bg-[#667354]  font-semibold hover:text-white text-primary rounded-md transition-all duration-300">
          {text}
        </button>
      )}
    </>
  );
};

export default CustomButton;
