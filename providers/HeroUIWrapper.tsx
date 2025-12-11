"use client";
import { HeroUIProvider } from "@heroui/react";
import React from "react";
import FontsProvider from "./fonts/FontsProvider";

const HeroUIWrapper = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <FontsProvider>
        <HeroUIProvider>{children}</HeroUIProvider>
      </FontsProvider>
    </div>
  );
};

export default HeroUIWrapper;
