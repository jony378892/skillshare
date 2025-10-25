import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content p-10 ">
      <div className="footer sm:footer-horizontal mx-auto container">
        <aside>
          <h2 className="text-xl font-bold">SkillShare</h2>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <div>
          <h3 className="footer-title">Links</h3>
          <Link to={"/privacy-policy"}>Privacy Policy</Link>
        </div>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <FaTwitter size={24} />
            </a>
            <a>
              <FaYoutube size={26} />
            </a>
            <a>
              <FaFacebook size={24} />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}
