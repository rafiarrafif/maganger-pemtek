"use client";
import React from "react";
import HomeJumbotronTitle from "./components/Title";
import HomeJumbotronSubtitle from "./components/Subtitle";
import HomeJumbotronButtonCTA from "./components/ButtonCTA";
import HomeJumbotronBigPicture from "./components/BigPicture";

const HomeJumbotron = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-3">
        <HomeJumbotronTitle />
        <HomeJumbotronSubtitle />
        <div className="mt-4">
          <HomeJumbotronButtonCTA />
        </div>
      </div>
      <div>
        <HomeJumbotronBigPicture />
      </div>
    </div>
  );
};

export default HomeJumbotron;
