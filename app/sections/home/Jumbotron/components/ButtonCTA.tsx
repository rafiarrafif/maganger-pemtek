import { Button } from "@heroui/react";
import React from "react";

const HomeJumbotronButtonCTA = () => {
  return (
    <div className="flex gap-2">
      <Button className="bg-primary-500 text-primary-50 rounded-md">
        Lihat anggota
      </Button>
      <Button
        variant="light"
        className="text-primary-500 font-medium rounded-md"
      >
        Lihat pengurus
      </Button>
    </div>
  );
};

export default HomeJumbotronButtonCTA;
