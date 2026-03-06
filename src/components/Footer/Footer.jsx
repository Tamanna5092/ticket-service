import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { TiSocialLinkedin } from "react-icons/ti";

export default function Footer() {
  return (
    <footer className="bg-black text-base-content py-10">
      <div className="max-w-7xl mx-auto flex flex-col justify-between md:flex-row gap-6 text-white px-4 md:px-0">
        <div>
          <a className="text-xl md:text-2xl font-bold">CS — Ticket System</a>
          <p className=" text-[#A1A1AA] mt-2 md:max-w-sm">
            Manage, track, and resolve support tickets efficiently. Our platform
            provides real-time updates, automated workflows, and detailed
            analytics to help your team deliver exceptional customer service.
          </p>
        </div>
        <div>
          <h1 className="text-lg font-semibold mb-4">Company</h1>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-[#A1A1AA] hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-[#A1A1AA] hover:text-white">
                Our Mission
              </a>
            </li>
            <li>
              <a href="#" className="text-[#A1A1AA] hover:text-white">
                Contact Sales
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-semibold mb-4">Services</h1>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-[#A1A1AA] hover:text-white">
                Products & Services
              </a>
            </li>
            <li>
              <a href="#" className="text-[#A1A1AA] hover:text-white">
                Customer Stories
              </a>
            </li>
            <li>
              <a href="#" className="text-[#A1A1AA] hover:text-white">
                Download Apps
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-semibold mb-4">Information</h1>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-[#A1A1AA] hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-[#A1A1AA] hover:text-white">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-[#A1A1AA] hover:text-white">
                Join Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-semibold mb-4">Follow Us</h1>
          <ul className="space-y-2">
            <li>
              <a className="text-[#A1A1AA] hover:text-white flex items-center gap-2">
                <span>
                  <FaXTwitter className="w-5 h-5 rounded-full bg-white text-[#000000] p-1" />
                </span>
                @CS — Ticket System
              </a>
            </li>
            <li>
              <a className="text-[#A1A1AA] hover:text-white flex items-center gap-2">
                <span>
                  <TiSocialLinkedin className="w-5 h-5 rounded-full bg-white text-[#000000]" />
                </span>
                @CS — Ticket System
              </a>
            </li>
            <li>
              <a className="text-[#A1A1AA] hover:text-white flex items-center gap-2">
                <span>
                  <FaFacebookF className="w-5 h-5 rounded-full bg-white text-[#000000] p-1" />
                </span>
                @CS — Ticket System
              </a>
            </li>
            <li>
              <a className="text-[#A1A1AA] hover:text-white flex items-center gap-2">
                <span>
                  <MdOutlineMessage className="w-5 h-5 rounded-full bg-white text-[#000000] p-1" />
                </span>
                support@cst.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-10 max-w-7xl mx-auto" />
      <div className="footer sm:footer-horizontal footer-center w-max-7xl mx-auto text-white px-4 md:px-0">
        <aside>
          <p>© 2025 CS — Ticket System. All rights reserved.</p>
        </aside>
      </div>
    </footer>
  );
}
