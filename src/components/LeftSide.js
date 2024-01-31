import React from "react";
import { SearchOutline } from "react-ionicons";
import { CaretDownOutline } from "react-ionicons";
import { ChevronDownOutline } from "react-ionicons";
import { ChevronUpOutline } from "react-ionicons";

export default function LeftSide() {
  return (
    <div className=" bg-slate-100 ml-2 rounded-tr-xl pl-10 py-3 px-10 h-screen w-3/4">
      <span className="tracking-wider ">NOM DE LA LISTE</span>
      <div className="mt-10 rounded-md p-3 flex bg-white flex-row gap-5">
        <SearchOutline beat color={"#00000"} height="20px" width="20px" />
        <input
          placeholder="rechercher"
          className=" outline-none font-normal"
          type="search"
        />
      </div>
      {/* Liste name - scope - methodes */}
      <hr className="text-black -ml-10 -mr-10 my-5 w-4/4" />
      <div className="   flex flex-row justify-around">
        <div className="flex flex-row -ml-[280px] content-center ">
          <CaretDownOutline
            className="mt-1"
            color={"#00000"}
            height="20px"
            width="20px"
          />
          <span className=" cursor-pointer">name</span>
        </div>
        <div className="flex flex-row gap-72">
          <div className="flex flex-row ">
            <CaretDownOutline
              className="mt-1"
              color={"#00000"}
              height="20px"
              width="20px"
            />
            <span className="  cursor-pointer">scope</span>
          </div>
          <div className="flex flex-row">
            <CaretDownOutline
              className="mt-1"
              color={"#00000"}
              height="20px"
              width="20px"
            />

            <span className=" cursor-pointer">methodes</span>
          </div>
        </div>
      </div>
      {/* Champs bleu de context/ontologies */}
      <div className="mt-5 flex flex-row">
        <div className=" flex-1 p-3 rounded-l-md bg-slate-900 flex flex-row justify-between items-center content-center">
          <div className="flex flex-row gap-5 items-center">
            {/* Caré blanc de context/ontologies */}
            <div className=" rounded bg-white h-6 w-6"></div>
            <div className="text-white text-sm font-extralight tracking-wide ">
              context /ontologies
            </div>
          </div>
        </div>
        <div className="flex flex-row w-10  content-center justify-center items-center text-white px-7 bg-slate-900 border-l-[1px] rounded-r-md border-l-white">
          <div className="  -mb-3">
            <ChevronDownOutline color={"#ffffff"} height="40px" width="40px" />
          </div>
        </div>
      </div>
      {/* Liste des radios api */}
      <div className="flex flex-col bg-white gap-y-20 py-8 justify-start">
        <div className=" flex flex-row justify-around">
          <div className="-ml-[330px] flex gap-5  ">
            <input type="radio" className="ml-6 h-5 w-5 cursor-pointer" />
            <label>/api/v1/context/list/test/Update2</label>
          </div>
          <div className="flex -ml-[290px] gap-[310px]">
            <span>read</span>
            <span>GET</span>
          </div>
        </div>
        <div className=" flex flex-row justify-around">
          <div className="-ml-[330px] flex gap-5  ">
            <input type="radio" className="ml-6 h-5 w-5 cursor-pointer" />
            <label>/api/v1/context/list/test/Update2</label>
          </div>
          <div className="flex -ml-[290px] gap-[310px]">
            <span>read</span>
            <span>GET</span>
          </div>
        </div>
        <div className=" flex flex-row justify-around">
          <div className="-ml-[330px] flex gap-5  ">
            <input type="radio" className="mb-5 ml-6 h-5 w-5 cursor-pointer" />
            <label>/api/v1/context/list/test/Update2</label>
          </div>
          <div className="flex -ml-[290px] gap-[310px]">
            <span>read</span>
            <span>GET</span>
          </div>
        </div>
      </div>
      {/* Listes des  nodes  */}
      <div className="flex flex-col gap-[1px]">
        <div className=" flex flex-row">
          <div className=" flex-1 p-3 rounded-l-md bg-slate-900 flex flex-row justify-between items-center content-center">
            <div className="text-white ml-3 text-sm font-extralight tracking-wide ">
              nodes
            </div>
          </div>
          <div className="flex flex-row w-10  content-center justify-center items-center text-white px-7 bg-slate-900 border-l-[1px] rounded-r-md border-l-white">
            <div className="  ">
              <ChevronUpOutline color={"#ffffff"} height="40px" width="40px" />
            </div>
          </div>
        </div>
        <div className=" flex flex-row">
          <div className=" flex-1 p-3 rounded-l-md bg-slate-900 flex flex-row justify-between items-center content-center">
            <div className="text-white ml-3 text-sm font-extralight tracking-wide ">
              nodes attribut categories
            </div>
          </div>
          <div className="flex flex-row w-10  content-center justify-center items-center text-white px-7 bg-slate-900 border-l-[1px] rounded-r-md border-l-white">
            <div className="  ">
              <ChevronUpOutline color={"#ffffff"} height="40px" width="40px" />
            </div>
          </div>
        </div>
        <div className=" flex flex-row">
          <div className=" flex-1 p-3 rounded-l-md bg-slate-900 flex flex-row justify-between items-center content-center">
            <div className="text-white ml-3 text-sm font-extralight tracking-wide ">
              nodes attribut group
            </div>
          </div>
          <div className="flex flex-row w-10  content-center justify-center items-center text-white px-7 bg-slate-900 border-l-[1px] rounded-r-md border-l-white">
            <div className="  ">
              <ChevronUpOutline color={"#ffffff"} height="40px" width="40px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
