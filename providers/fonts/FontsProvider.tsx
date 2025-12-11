import React from "react";
import localFont from "next/font/local";

const PlusJakartaSans = localFont({
  src: [
    {
      path: "./PlusJakartaSans/PlusJakartaSans-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./PlusJakartaSans/PlusJakartaSans-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./PlusJakartaSans/PlusJakartaSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./PlusJakartaSans/PlusJakartaSans-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./PlusJakartaSans/PlusJakartaSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./PlusJakartaSans/PlusJakartaSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./PlusJakartaSans/PlusJakartaSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./PlusJakartaSans/PlusJakartaSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./PlusJakartaSans/PlusJakartaSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./PlusJakartaSans/PlusJakartaSans-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./PlusJakartaSans/PlusJakartaSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./PlusJakartaSans/PlusJakartaSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./PlusJakartaSans/PlusJakartaSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./PlusJakartaSans/PlusJakartaSans-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
  ],
});

const FontsProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <div className={PlusJakartaSans.className}>{children}</div>;
};

export default FontsProvider;
