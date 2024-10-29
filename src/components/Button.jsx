const Button = ({ buttonText }) => {
  return (
    <p className="text-lg bg-slate-50 hover:bg-blue-200 hover:outline-2 hover:outline-slate-50 hover:scale-105 transition-all text-black text-center px-auto py-2 mx-2 rounded-xl cursor-pointer active:bg-teal-500 active:text-cyan-50">
      {buttonText}
    </p>
  );
};


//////// Second alternative below, both works

// const Button = ( props ) => {
//     return (
//       <p className="text-lg bg-slate-50 hover:bg-blue-200 hover:outline-2 hover:outline-slate-50 hover:scale-105 transition-all text-black text-center px-auto py-2 mx-2 rounded-xl cursor-pointer active:bg-teal-500 active:text-cyan-50">
//         {props.buttonText}
//       </p>
//     );
//   };

export default Button;
