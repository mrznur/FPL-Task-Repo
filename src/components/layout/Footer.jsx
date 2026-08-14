import { images } from "../../assets/images";
import { navigationItems } from "../../data/content";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-accent bg-black" id="contact">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-350 py-12 sm:py-14 lg:pt-14 lg:pb-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.55fr_.95fr_1.15fr_1fr] lg:gap-8">
          <div className="flex min-h-40 flex-col justify-between">
            <div className="flex items-center gap-3">
              <img src={images.headerMark} alt="" className="h-auto w-14 md:w-20" />
              <img
                src={images.headerLogoText}
                alt="TUFFCORE"
                className="h-auto w-32"
              />
            </div>
            <p className="max-w-54 text-[13px] font-light leading-[1.65] text-white">
              Oxford's No.1 Women-Only Small Group Weight & Strength Training
              Fitness Studio
            </p>
          </div>

          <div>
            <h3 className="font-bolder mb-4 tracking-[-0.01rem] uppercase text-[32px] text-accent scale-y-140">
              Menu
            </h3>
            <ul className="flex flex-col gap-2">
              {navigationItems.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[13px] uppercase tracking-[-0.04em] text-white/45 transition-colors hover:text-white font-light"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="text-[13px] font-light uppercase tracking-[-0.04em] text-white/45 transition-colors hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bolder mb-4 tracking-[-0.01rem] uppercase text-[32px] text-accent scale-y-140">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-2.5 font-light">
              <li className="flex items-start gap-2.5 text-[15px] font-light leading-[1.45] text-white/90">
                <MdLocationOn
                  aria-hidden="true"
                  className="mt-0.5 size-4.25 shrink-0"
                />
                <span>
                  134 Oxford Road
                  <br />
                  Oxford, OX4 2DU
                </span>
              </li>
              <li className="flex items-center gap-2.5 text-[15px] text-white/90">
                <MdPhone aria-hidden="true" className="size-[17px] shrink-0" />
                07904 122815
              </li>
              <li className="flex items-center gap-2.5 text-[15px] text-white/90">
                <MdEmail aria-hidden="true" className="size-[17px] shrink-0" />
                info@teamtuffcore.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bolder uppercase mb-4 tracking-[-0.01rem] text-[32px] text-accent scale-y-140">
              Opening Times
            </h3>
            <ul className="flex flex-col gap-1 text-[15px] font-light text-white">
              <li>MON-FRI: 6AM - 10PM</li>
              <li>SATURDAY: 8AM - 3PM</li>
            </ul>
            <div className="mt-6 flex items-center gap-5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white transition-opacity hover:opacity-70"
              >
                <FaFacebookF className="size-5" />
              </a>
              <a
                href="https://www.instagram.com/tuffcorefitness_ox"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white transition-opacity hover:opacity-70"
              >
                <AiOutlineInstagram className="size-6" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-white transition-opacity hover:opacity-70"
              >
                <FaYoutube className="size-6" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="text-white transition-opacity hover:opacity-70"
              >
                <FaXTwitter className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr className="text-accent mb-14"></hr>
      </div>
      <div>
        <div className="mx-auto flex w-[calc(100%-2.5rem)] max-w-[1400px] flex-col items-start justify-between gap-4 pb-12 text-[12px] font-normal text-white/60 sm:flex-row sm:items-center">
          <div className="flex gap-14">
            <a
              href="#"
              className="transition-colors hover:text-white font-light"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="transition-colors font-light hover:text-white"
            >
              Privacy Policy
            </a>
          </div>
          <p className="text-[12px] font-light text-white/60">
            © {year} by Tuffcore Fitness. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
