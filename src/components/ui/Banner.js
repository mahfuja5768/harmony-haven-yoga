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
            <h1 className=" text-5xl w-full text-[#51603c] font-semibold">
              Transform Your Life Through Yoga
            </h1>
            <h3 className="text-2xl">
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


// import Link from "next/link";
// import { FaBars } from "react-icons/fa";
// import CustomButton from "./CustomButton";

// const Navbar = () => {
//   return (
//     <nav className="max-w-[1240px] mx-auto px-12 rounded-full mb-12 shadow-2xl h-18 lg:h-[12vh] sticky top-0 z-50 bg-primary text-textBlue">
//       <div className="max-w-[1240px] mx-auto h-full py-1 flex items-center justify-between">
//         <Link href="/" className="text-white text-lg font-bold">
//           Harmony-Haven-Yoga
//         </Link>

//         <div className="hidden md:flex space-x-4">
//           <Link href="/about" className="text-white text-lg font-medium">
//             Home
//           </Link>
//           <Link href="/about" className="text-white text-lg font-medium">
//             Courses
//           </Link>
//           <Link href="/contact" className="text-white text-lg font-medium">
//             Meditations
//           </Link>
//           <Link href="/contact" className="text-white text-lg font-medium">
//             Articles
//           </Link>
//         </div>

//         <div className="md:hidden">
//           <FaBars className="text-white text-2xl cursor-pointer" />
//         </div>

//         <div className="hidden md:flex space-x-4">
//           <button className="border-4 bg-white  border-transparent px-5 py-1 hover:bg-secondary  font-semibold hover:text-white rounded-md transition-all duration-300">
//             Book Now
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
