import { Instagram, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Top amber slash line */}
      <div className="w-full h-2 bg-amber-200 slash-line"></div>

      {/* Main Footer Section */}
      <div className="bg-[#132971] py-14 backdrop-blur-xl">
        <div className="max-w-400 mx-auto flex justify-between items-start">
          {/* Left Section - Brand Info */}
          <div className="max-w-142">
            <h2 className="text-white text-6xl font-extrabold leading-none tracking-tight mb-5">
              Medtek
            </h2>
            <p className="text-[#EAEFFF] text-4.5 font-medium leading-7.5">
              Dibuat dengan dedikasi oleh Maganger Pemtek Medkom. Landing page
              ini adalah hasil kolaborasi dan pembelajaran tim teknis kami untuk
              memajukan digitalisasi organisasi.
            </p>
          </div>

          {/* Right Section - CTA */}
          <div className="max-w-115">
            <h3 className="text-white text-4xl font-extrabold leading-none tracking-tight mb-12">
              Ready to collaborate and innovate with us?
            </h3>
            
            {/* Contact Button and Social Icons */}
            <div className="flex items-center gap-7.5">
              {/* Contact Button */}
              <a
                href="https://wa.me/6281255125600"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full px-6 py-4.5 flex items-center justify-center hover:scale-[1.03] transition-transform"
              >
                <span className="text-[#2249CA] text-4.5 font-semibold leading-5.75">
                  Contact Us
                </span>
              </a>

              {/* Social Media Icons */}
              <div className="flex gap-4.25">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-12.5 h-12.5 rounded-full bg-white/11 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Instagram className="w-6 h-6 text-[#B2B2B2]" />
                </a>

                <a
                  href="#"
                  aria-label="Email"
                  className="w-12.5 h-12.5 rounded-full bg-white/11 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Mail className="w-6 h-6 text-[#B2B2B2]" />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-12.5 h-12.5 rounded-full bg-white/11 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-[#B2B2B2]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="bg-[#193797] py-6.75 backdrop-blur-xl">
        <div className="max-w-400 mx-auto flex justify-between items-center">
          <p className="text-[#FEF1EA] text-4.5 font-medium leading-6.75">
            © 2025 Maganger Kemenko Media & Teknologi - Pemtek Division.
          </p>
          <p className="text-[#FEF1EA] text-4.5 leading-6.75">
            <span className="font-medium">Built with </span>
            <span className="font-bold">React</span>
            <span className="font-medium"> & passion </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
