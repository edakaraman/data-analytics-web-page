import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-5 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">

        {/* CARD 1 */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8"> Single User</h2>
          <p className="text-center text-4xl font-bold"> $100 </p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8"> 250 GB Storage </p>
            <p className="py-2 border-b mx-8"> 1 Granted User </p>
            <p className="py-2 border-b mx-8"> Send up to 2GB </p>
          </div>
          <button className='bg-[#00df9a] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-black'> Start Trial </button>

        </div>

         {/* CARD 2 */}
         <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white bg-transparent"
            src={Double}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8"> Double User</h2>
          <p className="text-center text-4xl font-bold"> $190 </p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8"> 500 GB Storage </p>
            <p className="py-2 border-b mx-8"> 2 Granted User </p>
            <p className="py-2 border-b mx-8"> Send up to 4GB </p>
          </div>
          <button className='text-[#00df9a] bg-black w-[150px] rounded-md font-medium my-6 mx-auto py-3'> Start Trial </button>
        </div>

         {/* CARD 3 */}
         <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8"> Triple User</h2>
          <p className="text-center text-4xl font-bold"> $275 </p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8"> 1 TB Storage </p>
            <p className="py-2 border-b mx-8"> 3 Granted User </p>
            <p className="py-2 border-b mx-8"> Send up to 8GB </p>
          </div>
          <button className='bg-[#00df9a] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-black'> Start Trial </button>
        </div>


      </div>
    </div>
  );
};

export default Cards;
