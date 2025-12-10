"use client";
import Image from "next/image";
import React from "react";

const HomeHeaderLogo = () => {
  return (
    <div>
      <Image
        src="/logo/pemtek.png"
        alt="Logo divisi pengembangan teknologi BEM Fatisda UNS"
        width={100}
        height={1}
      />
    </div>
  );
};

export default HomeHeaderLogo;
