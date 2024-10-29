import Button from "./Button";
import { FaCookieBite } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ styling }) => {
  return (
    <section
      className={`${styling} text-white bg-black rounded-3xl p-5 max-w-72 grid grid-rows-[auto,1fr,2fr,auto]`}
    >
     
      <IoCloseOutline className="w-6 h-6 justify-self-end transition-all cursor-pointer hover:text-blue-200  hover:scale-110 active:text-teal-500" />
      <FaCookieBite className="w-10 h-10 scale-x-[-1]" />
      {/* <div className="mx-2 grid grid-cols-2 pb-4">
       
        <IoCloseOutline className="w-6 h-6 justify-self-end"/>
        </div> */}
      <h2 className=" text-2xl mx-2 place-self-end py-5 ">
        We use cookies to improve your experience.
      </h2>
      <Button />
    </section>
  );
};

export default Popup;
