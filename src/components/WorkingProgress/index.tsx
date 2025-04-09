import React from "react";
import ProgrammingIcon from "@/undraw_programming_65t2.svg";
import Image from "next/image";

const WorkingProgress: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        <h1>add user page</h1>
        <strong>working in progress</strong>
        <Image src={ProgrammingIcon} alt="ProgrammingIcon" className="w-1/2" />
      </div>
    </>
  );
};

export default WorkingProgress;
