import React from "react";
import { SearchOutline } from "react-ionicons";
import { CaretDownOutline } from "react-ionicons";
import { ChevronDownOutline } from "react-ionicons";
import { ChevronUpOutline } from "react-ionicons";

export default function RightSide() {
  return (
    <div className="bg-slate-100 pl-3  mb-0 py-3 mr-3  border-sky-500 h-screen w-1/4">
      {/* Titre */}
      <span className=" tracking-wider">NOM DE LA LISTE</span>
      {/* Barre de recherche */}
      <div className="mt-10 p-3 rounded-md bg-white mr-5 flex flex-row gap-5">
        <SearchOutline beat color={"#00000"} height="20px" width="20px" />
        <input
          placeholder="rechercher"
          className=" outline-none font-normal"
          type="search"
        />
      </div>
      <hr className="text-black my-5 -ml-3 w-4/4" />
      <div className="  flex flex-row  content-center ">
        <CaretDownOutline
          className="mt-1"
          color={"#00000"}
          height="20px"
          width="20px"
        />
        <span className=" cursor-pointer">name</span>
      </div>
      {/* Champs context */}
      <div className="mt-5 flex flex-row">
        <div className=" flex-1 p-3 rounded-l-md bg-slate-900 flex flex-row justify-between items-center content-center">
          <div className="flex flex-row gap-5 items-center">
            <div className=" rounded bg-white h-6 w-6"></div>
            <div className="text-white text-sm font-extralight tracking-wide ">
              context
            </div>
          </div>
        </div>
        <div className="flex flex-row w-10  content-center justify-center items-center text-white px-7 mr-5 bg-slate-900 border-l-[1px] rounded-r-md border-l-white">
          <div className="-mb-3">
            <ChevronDownOutline color={"#ffffff"} height="40px" width="40px" />
          </div>
        </div>
      </div>
      {/* Listes des radios */}
      <div className="flex flex-col py-10 mr-5 rounded-b-md bg-white gap-20">
        <div className=" flex gap-5  ">
          <input type="radio" className="ml-[15px] h-5 w-5 cursor-pointer" />
          <label>invalid</label>
        </div>
        <div className=" flex gap-5  ">
          <input type="radio" className="ml-[15px] h-5 w-5 cursor-pointer" />
          <label>apps</label>
        </div>
        <div className="  flex gap-5  ">
          <input type="radio" className="ml-[15px] h-5 w-5 cursor-pointer" />
          <label>config</label>
        </div>
      </div>
    </div>
  );
}
