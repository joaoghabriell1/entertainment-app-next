"use client";
import { TailSpin } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="h-screen bg-slate-900 w-full flex justify-center items-center">
      <TailSpin height="80" width="80" color="white" ariaLabel="loading" />
    </div>
  );
};

export default Loading;
