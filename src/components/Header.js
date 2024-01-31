import React from "react";
import { SettingsOutline } from "react-ionicons";

export default function Header() {
  return (
    <div className=" bg-white flex flex-row w-1/4 shadow-lg   rounded-r-3xl  gap-10 p-10">
      <div className=" ml-10 font-bold">Logo</div>
      <div className=" flex flex-row gap-3">
        <div>
          <SettingsOutline rotate color={"#00000"} height="20px" width="20px" />
        </div>
        <div className="flex flex-col gap-2 -mt-6 uppercase">
          <div className=" text-[10px] ">Application</div>
          <div className=" tracking-wide">Ajouter un profil D'appli...</div>
        </div>
      </div>
    </div>
  );
}
