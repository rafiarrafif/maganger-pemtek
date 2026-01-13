import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import medkomExpand from "../../assets/medkomExpand.svg";
import pemtekExpand from "../../assets/pemtekExpand.svg";

interface BarItem {
  type: "text" | "icon";
  content?: string;
  variant?: "medkomExpand" | "pemtekExpand";
}

interface ScrollingBarProps {
  items: BarItem[];
  backgroundColor: string;
}

const ScrollingBar = ({ items, backgroundColor }: ScrollingBarProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const content = container.querySelector(
      ".scrolling-content"
    ) as HTMLElement | null;
    if (!content) return;

    const singleSetWidth = content.scrollWidth / 3;

    gsap.set(content, { x: 0 });

    const animation = gsap.to(content, {
      x: -singleSetWidth,
      duration: 30,
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

  const renderItem = (item: BarItem, index: number) => {
    if (item.type === "text") {
      return (
        <span
          key={index}
          className="text-[#E6E6E6] text-[28px] font-semibold leading-[38px] tracking-[-0.84px] whitespace-nowrap"
        >
          {item.content}
        </span>
      );
    }

    if (item.type === "icon") {
      const src = item.variant === "pemtekExpand" ? pemtekExpand : medkomExpand;
      return (
        <div key={index} className="flex-shrink-0">
          <img src={src} alt={item.variant} className="h-12 w-12" />
        </div>
      );
    }

    return null;
  };

  return (
    <div
      ref={containerRef}
      className="relative h-[82px] overflow-hidden"
      style={{ backgroundColor }}
    >
      <div className="scrolling-content absolute flex items-center gap-4 h-full px-4">
        {items.map(renderItem)}
        {items.map((item, index) => renderItem(item, index + items.length))}
        {items.map((item, index) =>
          renderItem(item, index + items.length * 2)
        )}
      </div>
    </div>
  );
};

export default ScrollingBar;