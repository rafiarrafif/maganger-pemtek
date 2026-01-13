import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ProgramCard from "./ProgramCard";
import ScrollingBar from "./ScrollingBar";

interface Program {
  category: string;
  title: string;
  description: string;
  image: string;
  titleColor: "blue" | "orange";
}

const programsData: Program[] = [
  {
    category: "Pengembangan Teknologi",
    title: "IT4SCHOOL",
    description:
      "Seminar online dengan mengundang beberapa pembicara di bidang IT guna meningkatkan pemahaman IT di kalangan..",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL5s2M3bX2GjeJoXuvXCO4rUXkSKXCDhkXrw&s",
    titleColor: "blue",
  },
  {
    category: "Pengembangan Teknologi",
    title: "Website Maganger",
    description:
      "Seminar online dengan mengundang beberapa pembicara di bidang IT guna meningkatkan pemahaman IT di kalangan..",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL5s2M3bX2GjeJoXuvXCO4rUXkSKXCDhkXrw&s",
    titleColor: "blue",
  },
  {
    category: "Media Teknologi",
    title: "Design IT4SCHOOL",
    description:
      "Seminar online dengan mengundang beberapa pembicara di bidang IT guna meningkatkan pemahaman IT di kalangan..",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL5s2M3bX2GjeJoXuvXCO4rUXkSKXCDhkXrw&s",
    titleColor: "orange",
  },
  {
    category: "Pengembangan Teknologi",
    title: "Website Maganger",
    description:
      "Seminar online dengan mengundang beberapa pembicara di bidang IT guna meningkatkan pemahaman IT di kalangan..",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL5s2M3bX2GjeJoXuvXCO4rUXkSKXCDhkXrw&s",
    titleColor: "blue",
  },
  {
    category: "Media Teknologi",
    title: "Design IT4SCHOOL",
    description:
      "Seminar online dengan mengundang beberapa pembicara di bidang IT guna meningkatkan pemahaman IT di kalangan..",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL5s2M3bX2GjeJoXuvXCO4rUXkSKXCDhkXrw&s",
    titleColor: "orange",
  },
];

const topBarItems = [
  { type: "icon", variant: "medkomExpand" },
  { type: "text", content: "Maganger BEM" },
  { type: "icon", variant: "medkomExpand" },
  { type: "text", content: "Maganger Medtek 2025" },
  { type: "icon", variant: "medkomExpand" },
  { type: "text", content: "Media Teknologi" },
  { type: "icon", variant: "medkomExpand" },
  { type: "text", content: "Design" },
  { type: "icon", variant: "medkomExpand" },
  { type: "text", content: "Social Media" },
] as const;

const bottomBarItems = [
  { type: "icon", variant: "pemtekExpand" },
  { type: "text", content: "Maganger BEM" },
  { type: "icon", variant: "pemtekExpand" },
  { type: "text", content: "Maganger Pemtek 2025" },
  { type: "icon", variant: "pemtekExpand" },
  { type: "text", content: "Pengembangan Website" },
  { type: "icon", variant: "pemtekExpand" },
  { type: "text", content: "IT4SCHOOL" },
] as const;

const Programs = () => {
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = cardsContainerRef.current;
    if (!container) return;

    const firstCard = container.children[0] as HTMLElement | undefined;
    if (!firstCard) return;

    const gap = 25;
    const cardWidth = firstCard.offsetWidth;
    const singleSetWidth = (cardWidth + gap) * programsData.length;

    gsap.set(container, { x: 0 });

    const animation = gsap.to(container, {
      x: -singleSetWidth,
      duration: programsData.length * 4,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (value) => {
          const xValue = parseFloat(value);
          const wrapped = xValue % singleSetWidth;
          return `${wrapped}px`;
        },
      },
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="programs-section relative">
      <ScrollingBar items={[...topBarItems]} backgroundColor="#F17628" />

      <div className="bg-[#132971] py-16 pb-24">
        <div className="text-center px-4">
          <h2 className="text-white text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Program Kerja Maganger
          </h2>
          <p className="text-[#EAEFFF] text-2xl font-medium leading-8 max-w-[920px] mx-auto">
            Langkah kecil untuk dampak besar. Intip serangkaian program kerja
            yang telah kami eksekusi selama periode magang.
          </p>
        </div>

        <div className="overflow-hidden mt-16">
          <div
            ref={cardsContainerRef}
            className="flex gap-6 pl-6"
            style={{ width: "fit-content" }}
          >
            {programsData.map((program, index) => (
              <ProgramCard key={`set1-${index}`} {...program} />
            ))}
            {programsData.map((program, index) => (
              <ProgramCard key={`set2-${index}`} {...program} />
            ))}
            {programsData.map((program, index) => (
              <ProgramCard key={`set3-${index}`} {...program} />
            ))}
          </div>
        </div>
      </div>

      <ScrollingBar items={[...bottomBarItems]} backgroundColor="#2A5BFC" />
    </section>
  );
};

export default Programs;