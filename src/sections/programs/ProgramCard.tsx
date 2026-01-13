interface ProgramCardProps {
  category: string;
  title: string;
  description: string;
  image: string;
  titleColor: "blue" | "orange";
}

const ProgramCard = ({
  category,
  title,
  description,
  image,
  titleColor,
}: ProgramCardProps) => {
  const titleColorClass =
    titleColor === "blue" ? "text-[#2249CA]" : "text-[#C15E20]";

  return (
    <div className="program-card relative w-[366px] h-[457px] flex-shrink-0">
      {/* Card Background */}
      <div className="absolute inset-0 bg-white rounded-[25px]" />

      {/* Category Header */}
      <div className="absolute top-0 left-0 right-0 h-[39px]">
        <div className="absolute inset-0 bg-[#FBF9FF] rounded-t-[25px]" />
        <p className="absolute inset-0 flex items-center justify-center text-[#B2B2B2] text-xs font-semibold leading-[18px]">
          {category}
        </p>
      </div>

      {/* Title */}
      <h3
        className={`absolute top-[57px] left-0 right-0 text-center text-[28px] font-bold leading-[38px] px-8 ${titleColorClass}`}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="absolute top-[104px] left-[26px] right-[26px] text-[#B2B2B2] text-center text-base font-semibold leading-6">
        {description}
      </p>

      {/* Gradient Line Separator */}
      <svg
        className="absolute top-[229px] left-0"
        width="366"
        height="7"
        viewBox="0 0 366 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0"
          y1="3.5"
          x2="366"
          y2="3.5"
          stroke="url(#gradient)"
          strokeWidth="7"
        />
        <defs>
          <linearGradient
            id="gradient"
            x1="0"
            y1="3.5"
            x2="366"
            y2="3.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2249CA" />
            <stop offset="1" stopColor="#C15E20" />
          </linearGradient>
        </defs>
      </svg>

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="absolute bottom-0 left-0 w-full h-[232px] rounded-b-[25px] object-cover"
      />

      {/* Image Gradient Overlay */}
      <div
        className="absolute bottom-0 left-0 w-full h-[232px] rounded-b-[25px] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.80) 100%)",
        }}
      />
    </div>
  );
};

export default ProgramCard;