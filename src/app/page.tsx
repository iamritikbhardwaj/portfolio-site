import {
  faReact,
  faJs,
  faGit,
  faNode,
  faJava,
  faLinkedin,
  faWhatsapp,
  faGithub,
  faAws,
  faEthereum,
} from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons/faCss3";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons/faHtml5";
import { faLinux } from "@fortawesome/free-brands-svg-icons/faLinux";
import { faCode, faEnvelope, faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-cyan-600">
      <header className="text-gray-300">
        <nav id="nav" aria-label="">
          <div className="justify-center p-2 flex justify-content-around">
            <div className="hidden md:block">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <div className="hidden md:block align-middle">
              <ul className="flex justify-around mx-4 sm:mx-20 sm:text-2xl border-2 rounded-full p-6">
                <li id="li1">
                  <Link href="#home">Home</Link>
                </li>
                <li id="li2">
                  <Link href="#about">About</Link>
                </li>
                <li id="li3">
                  <Link href="#work">Work</Link>
                </li>
                <li id="li4">
                  <Link href="#contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div
              id="socials"
              className=" hidden md:block text-2xl text-yellow-600"
            >
              <Link
                id="nava"
                className="m-1"
                href="https://www.linkedin.com/in/ritik-singh-10b333227"
                target="_blank"
                title="LinkedIn Profile"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-yellow-800"
                />
              </Link>
              <Link
                href="https://wa.me/9119060487
          "
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </Link>

              <Link
                id="nava1"
                className="m-1 text-2xl"
                href="https://github.com/iamritikbhardwaj"
                target="_blank"
                title="GitHub Profile"
              >
                <i className="fab fa-github"></i>
              </Link>
              <Link href="mailto:ritiklrt2@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* <!-- Home Section --> */}
      <section id="home">
        {/* <img src="/https://avatars.githubusercontent.com/u/87214866?v=4" alt="ritik" className="text-gray-300" /> */}
        <h1 className="text-4xl text-gray-300">
          Ritik Singh | Full Stack Developer
        </h1>
        <p>
          I speak in <code className="text-green-600 text-2xl">&lt;code&gt;</code> so you don't have to.
        </p>
      </section>

      {/* <!-- About Section --> */}
      <section id="about">
        <h2 className="text-4xl text-gray-300">About Me</h2>
        <p>
          I am a passionate Full-Stack Developer, based in India, creating
          innovative solutions with technologies like JavaScript, React,
          Node.js, and more. I enjoy using my skill-set to empower people to
          accomplish their goals.
        </p>
      </section>

      {/* <!-- Work Section --> */}
      <section id="work">
        <h2 className="text-4xl text-gray-300">Featured Projects</h2>
        <div className="bg-slate-800 flex flex-row justify-center p-2 mx-20">
          <div className="flex flex-col justify-center mx-20">
            <h3>Project 1: Scroll Animation</h3>
            <p>
              A smooth scrolling animation project with dynamic image
              transitions.
            </p>
          </div>
          <Link
            href="./scrollAni.html"
            title="Click to open scroll animation project"
          >
            <div className="hidden shadow-xs sm:block mx-20">
              <iframe
                src="scrollAni.html"
                title="Scroll Animation Project Preview"
              ></iframe>
            </div>
          </Link>
        </div>
        <div className="text-lg mt-6">
          <div className="flex justify-center mt-2 p-2">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/sword.png"
              alt="Icon representing Weapons for development tools"
            />

            <h3 id="weapons" className="text-6xl text-gray-300 mx-2">
              My Weapons
            </h3>
          </div>
          <div className="flex justify-around-center text-gray-300  p-2">
            <FontAwesomeIcon icon={faJs} className="text-yellow-300"/>

            <FontAwesomeIcon icon={faReact} className="text-cyan-500"/>

            <FontAwesomeIcon icon={faNode} className="text-green-500"/>

            <FontAwesomeIcon icon={faJava} />

            <FontAwesomeIcon icon={faGit} className="text-orange-500"/>

            <FontAwesomeIcon icon={faLinux} />

            <FontAwesomeIcon icon={faEthereum} className="text-purple-400" />

            <FontAwesomeIcon icon={faAws} />

            {/* add tailwind as well */}
          </div>
        </div>
      </section>

      {/* <!-- Contact Section --> */}
      <section id="contact">
        <h2 className="text-4xl text-gray-300">Contact</h2>
        <p>Get in touch if you want to work together!</p>
        <div className="flex justify-center text-gray-300 spacing-2 p-2">
          <Link href="mailto:ritiklrt2@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ritik-singh-10b333227"
            target="_blank"
            title="LinkedIn Profile"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link href="https://wa.me/9119060487">
            <FontAwesomeIcon icon={faWhatsapp} />
          </Link>
          <Link
            href="https://github.com/iamritikbhardwaj"
            target="_blank"
            title="GitHub Profile"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </div>
      </section>

      {/* <!-- Resume Section --> */}
      <section className="hidden sm:block">
        <h2 className="text-4xl text-gray-300">Get My Resume</h2>
        <p>Click the download button to get a copy of my resume.</p>
        <div className="flex flex-row justify-center">
          <iframe
            src="./Resume.pdf"
            width="600"
            height="400"
            title="Resume PDF Viewer"
          ></iframe>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer>
        <p className="text-sm text-gray-300">
          Designed and Developed by Ritik Singh<sup>&trade;</sup>
        </p>
      </footer>
    </div>
  );
}
