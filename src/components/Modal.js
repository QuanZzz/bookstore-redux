// import cx from "classnames"

// export const Modal = ({ className, setIsOpen, modalTitle, modalBody }) => {
//   return(
//     <div 
//       className={cx(className, "w-60 h-80 bg-gray-300 flex justify-center items-center text-black")}
//     >
//       <div className="w-54 h-80 rounded-xl bg-white shadow-lg flex flex-col p-6">
//         <button className="flex justify-end"> X </button>
//         <div className="inline-block items-center mt-2.5">
//           {modalTitle}
//         </div>
//         <div className="flex flex-1 justify-start items-left text-base text-left">
//           {modalBody}
//         </div>
//         <div className="flex justify-center items-center ">
//           <button 
//             className="flex justify-end bg-transparent text-base text-rose-800 
//             cursor-pointer" 
//             onClick={() => setIsOpen(false)}
//           >
//             Cancel
//           </button>
//           <button 
//             className="w-36 h-11 m-2.5 bg-sky-600 text-white"
//           >
//             Continue
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }