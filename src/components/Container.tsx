import React from "react";

type ContainerType = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerType) {
  return (
    <div className="flex flex-col max-w-7xl mx-auto min-h-screen bg-white/[2%]">
      {children}
    </div>
  );
}
