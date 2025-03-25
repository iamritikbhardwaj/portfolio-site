import {
  faReact,
  faJs,
  faGit,
  faNode,
  faJava,
  faLinkedin,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons/faCss3";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons/faHtml5";
import { faLinux } from "@fortawesome/free-brands-svg-icons/faLinux";
import { faCode, faEnvelope, faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div className="text-yellow-400">
      <header className="text-gray-300">
        <nav id="nav" aria-label="Main Navigation ">
          <div className=" align-items-center p-2 flex justify-content-around">
            <div className="hidden md:block">
              <p>
                <FontAwesomeIcon icon={faCode} />
              </p>
            </div>
            <div className="hidden md:block align-middle">
              <ul className="nav-links mx-4 sm:mx-20 sm:text-2xl border-2 rounded-full p-3">
                <li id="li1">
                  <a href="#home">Home</a>
                </li>
                <li id="li2">
                  <a href="#about">About</a>
                </li>
                <li id="li3">
                  <a href="#work">Work</a>
                </li>
                <li id="li4">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div
              id="socials"
              className=" hidden md:block text-2xl text-yellow-600"
            >
              <a
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
              </a>
              <a
                href="https://wa.me/9119060487
          "
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a
                id="nava1"
                className="m-1 text-2xl"
                href="https://github.com/iamritikbhardwaj"
                target="_blank"
                title="GitHub Profile"
              >
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:ritiklrt2@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* <!-- Home Section --> */}
      <section id="home">
        <h1 className="text-4xl text-gray-300">
          Ritik Singh | Full Stack Developer
        </h1>
        <p>
          I speak in <code>&lt;code&gt;</code> so you don't have to.
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
        <div className="bg-gray-400 flex flex-row justify-center p-2 mx-20">
          <div className="flex flex-col justify-center mx-20">
            <h3>Project 1: Scroll Animation</h3>
            <p>
              A smooth scrolling animation project with dynamic image
              transitions.
            </p>
          </div>
          <a
            href="scrollAni.html"
            title="Click to open scroll animation project"
          >
            <div className="hidden sm:block mx-20">
              <iframe
                src="scrollAni.html"
                title="Scroll Animation Project Preview"
              ></iframe>
            </div>
          </a>
        </div>
        <div className="container">
          <div className="flex justify-center p-2">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/sword.png"
              alt="Icon representing Weapons for development tools"
            />

            <h3 id="weapons" className="text-6xl text-gray-300 mx-2">
              My Weapons
            </h3>
          </div>
          <div className="logos flex flex-row justify-center text-gray-300 spacing-2 p-2">
            <i className="fa-brands fa-java text-8xl align-self-center mx-2"></i>

            <img
              src="https://img.icons8.com/color/100/000000/mongodb.png"
              alt="MongoDB Logo"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30"
              height="30"
            >
              {/* <!-- SVG content here --> */}
            </svg>
            <FontAwesomeIcon icon={faJs} />

            <FontAwesomeIcon icon={faHtml5} />

            <FontAwesomeIcon icon={faCss3} />

            <FontAwesomeIcon icon={faReact} />
            
            <FontAwesomeIcon icon={faNode} />

            <FontAwesomeIcon icon={faJava} />

            <FontAwesomeIcon icon={faLeaf} />

            <FontAwesomeIcon icon={faGit} />

            <FontAwesomeIcon icon={faLinux} />

            {/* <FontAwesomeIcon icon={faMySql} /> */}

            {/* add tailwind as well */}
          </div>
        </div>
      </section>

      {/* <!-- Contact Section --> */}
      <section id="contact">
        <h2 className="text-4xl text-gray-300">Contact</h2>
        <p>Get in touch if you want to work together!</p>
        <div className="social-icons text-2xl">
          <a href="mailto:ritiklrt2@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
          </a>
          <a
            href="https://www.linkedin.com/in/ritik-singh-10b333227"
            target="_blank"
            title="LinkedIn Profile"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://wa.me/9119060487
          "
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            href="https://github.com/iamritikbhardwaj"
            target="_blank"
            title="GitHub Profile"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </section>

      {/* <!-- Resume Section --> */}
      <section className="hidden sm:block">
        <h2 className="text-4xl text-gray-300">Get My Resume</h2>
        <p>Click the download button to get a copy of my resume.</p>
        <div className="flex flex-row justify-center">
          <iframe
            src="/portfolio-site/public/Resume.pdf"
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
