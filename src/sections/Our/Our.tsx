import { useRef } from "react";
import { CircleDashedIcon, Code, TerminalIcon } from "lucide-react";
import gsap from "gsap";

const Our = () => {
  // ===== MEDKOM =====
  const medkomCardRef = useRef<HTMLDivElement>(null);
  const medkomIconRef = useRef<HTMLDivElement>(null);
  const medkomTitleRef = useRef<HTMLDivElement>(null);
  const medkomDescRef = useRef<HTMLDivElement>(null);
  const medkomFooterRef = useRef<HTMLDivElement>(null);

  // ===== PEMTEK =====
  const pemtekCardRef = useRef<HTMLDivElement>(null);
  const pemtekIconRef = useRef<HTMLDivElement>(null);
  const pemtekTitleRef = useRef<HTMLDivElement>(null);
  const pemtekDescRef = useRef<HTMLDivElement>(null);
  const pemtekFooterRef = useRef<HTMLDivElement>(null);

  // ===== GLOBAL GSAP =====
  gsap.defaults({ overwrite: "auto" });

  // ===== HELPER (RESPONSIVE) =====
  const moveIconToRight = (
    card: HTMLDivElement | null,
    icon: HTMLDivElement | null
  ) => {
    if (!card || !icon) return 0;

    const cardRect = card.getBoundingClientRect();
    const iconRect = icon.getBoundingClientRect();

    const padding = 40; // p-10 tailwind
    return cardRect.width - iconRect.width - padding;
  };

  /* ================= MEDKOM ================= */
  const handleMedkomEnter = () => {
    const tl = gsap.timeline();

    tl.to(
      medkomCardRef.current,
      {
        backgroundColor: "#f97316",
        borderColor: "#f97316",
        duration: 0.3,
      },
      0
    );

    tl.to(
      medkomIconRef.current,
      {
        y: -30,
        x: () =>
          moveIconToRight(
            medkomCardRef.current,
            medkomIconRef.current
          ),
        rotation: 1080,
        scale: 0.85,
        duration: 0.6,
        ease: "none",
      },
      0
    );

    tl.to(
      medkomTitleRef.current,
      {
        y: -102,
        duration: 0.7,
        ease: "power3.out",
      },
      0
    );

    tl.to(
      medkomDescRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
      },
      0.2
    );

    tl.to(
      [medkomTitleRef.current, medkomDescRef.current, medkomFooterRef.current],
      {
        color: "#ffffff",
        duration: 0.3,
      },
      0
    );
  };

  const handleMedkomLeave = () => {
    gsap.timeline()
      .to(medkomCardRef.current, {
        backgroundColor: "#ffffff",
        borderColor: "#e5e7eb",
        duration: 0.4,
      })
      .to(
        medkomIconRef.current,
        {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 0.6,
        },
        0
      )
      .to(
        medkomTitleRef.current,
        {
          y: 0,
          color: "#000000",
          duration: 0.4,
        },
        0
      )
      .to(
        medkomDescRef.current,
        {
          opacity: 0,
          y: 24,
          color: "#4b5563",
          duration: 0.3,
        },
        0
      )
      .to(
        medkomFooterRef.current,
        {
          color: "#9ca3af",
          duration: 0.3,
        },
        0
      );
  };

  /* ================= PEMTEK ================= */
  const handlePemtekEnter = () => {
    const tl = gsap.timeline();

    tl.to(
      pemtekCardRef.current,
      {
        backgroundColor: "#3b82f6",
        borderColor: "#3b82f6",
        duration: 0.3,
      },
      0
    );

    tl.to(
      pemtekIconRef.current,
      {
        y: -30,
        x: () =>
          moveIconToRight(
            pemtekCardRef.current,
            pemtekIconRef.current
          ),
        scale: 0.85,
        duration: 0.6,
        ease: "power3.out",
      },
      0
    );

    tl.to(
      pemtekTitleRef.current,
      {
        y: -102,
        duration: 0.7,
        ease: "power3.out",
      },
      0
    );

    tl.to(
      pemtekDescRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
      },
      0.2
    );

    tl.to(
      [pemtekTitleRef.current, pemtekDescRef.current, pemtekFooterRef.current],
      {
        color: "#ffffff",
        duration: 0.3,
      },
      0
    );
  };

  const handlePemtekLeave = () => {
    gsap.timeline()
      .to(pemtekCardRef.current, {
        backgroundColor: "#ffffff",
        borderColor: "#e5e7eb",
        duration: 0.4,
      })
      .to(
        pemtekIconRef.current,
        {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.6,
        },
        0
      )
      .to(
        pemtekTitleRef.current,
        {
          y: 0,
          color: "#000000",
          duration: 0.4,
        },
        0
      )
      .to(
        pemtekDescRef.current,
        {
          opacity: 0,
          y: 24,
          color: "#4b5563",
          duration: 0.3,
        },
        0
      )
      .to(
        pemtekFooterRef.current,
        {
          color: "#9ca3af",
          duration: 0.3,
        },
        0
      );
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
    {/* Title */}
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Our Core Divisions
            </h1>
            <p className="mt-4 text-gray-500 text-base md:text-lg">
            Dua pilar utama penggerak inovasi BEM FATISDA
            </p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* MEDKOM */}
        <div
          ref={medkomCardRef}
          onMouseEnter={handleMedkomEnter}
          onMouseLeave={handleMedkomLeave}
          className="rounded-3xl border border-gray-200 p-10 overflow-hidden"
        >
          <div ref={medkomIconRef} className="mb-8 text-gray-300 w-fit">
            <CircleDashedIcon size={72} strokeWidth={2.8} />
          </div>

          <div className="relative h-[110px] mb-6">
            <div ref={medkomTitleRef}>
              <h2 className="text-4xl font-bold mb-2">Medkom</h2>
              <p className="italic">"The Voice & The Vision"</p>
            </div>

            <div
              ref={medkomDescRef}
              className="absolute top-0 left-0 opacity-0 translate-y-6 text-sm"
            >
              Bertanggung jawab atas branding, desain grafis, videografi, dan manajemen media sosial.
            </div>
          </div>

          <div ref={medkomFooterRef} className="flex gap-2 text-sm">
            <CircleDashedIcon size={16} />
            <span>Social Media & Branding</span>
          </div>
        </div>

        {/* PEMTEK */}
        <div
          ref={pemtekCardRef}
          onMouseEnter={handlePemtekEnter}
          onMouseLeave={handlePemtekLeave}
          className="rounded-3xl border border-gray-200 p-10 overflow-hidden"
        >
          <div ref={pemtekIconRef} className="mb-8 text-gray-300 w-fit">
            <TerminalIcon size={72} strokeWidth={1.2} />
          </div>

          <div className="relative h-[110px] mb-6">
            <div ref={pemtekTitleRef}>
              <h2 className="text-4xl font-bold mb-2">Pemtek</h2>
              <p className="italic">
                "The Architects of Digital Ecosystem"
              </p>
            </div>

            <div
              ref={pemtekDescRef}
              className="absolute top-0 left-0 opacity-0 translate-y-6 text-sm"
            >
              Fokus pada pengembangan website, aplikasi, UI/UX, dan pemeliharaan sistem informasi. Mereka adalah inovator yang membangun infrastruktur digital untuk kemudahan mahasiswa.
            </div>
          </div>

          <div ref={pemtekFooterRef} className="flex gap-2 text-sm">
            <Code size={16} />
            <span>Web & App Development</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Our;
