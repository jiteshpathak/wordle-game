import React from "react";
import { UserButton } from "@clerk/clerk-react";
export default function Header() {
  return (
    // <div>
    //   <div className="navbar bg-base-100 flex-auto ">
    //       <h1 className=" font-sans font-black flex text-4xl bg-slate-800 hover:subpixel-antialiased">
    //         TERMLE
    //       </h1>
    //     <div className="">
    //       <UserButton> </UserButton>
    //     </div>
    //   </div>
    // </div>
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <h1 className="font-sans font-black flex text-4xl bg-slate-900 hover:subpixel-antialiased  ">
          TERMLE
        </h1>
      </div>
      <div className="flex-none gap-2">
        <a className="gap-2 p-4 font-black text-xl font-sans" href="/leaderboard">
          Leaderboard
        </a>
        <UserButton></UserButton>
      </div>
    </div>
  );
}
