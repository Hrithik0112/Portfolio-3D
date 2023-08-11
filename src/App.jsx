import Spline from "@splinetool/react-spline";
import { useState } from "react";
import { IoMenu, IoLogoGithub } from "react-icons/io5";
import Pfp from "./assets/Avater.png";
import { Projects } from "./data";

function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="flex flex-col w-screen min-h-screen justify-center items-center relative bg-primary pb-10">
        {/* Navigation */}
        <nav className="w-full inset-x-0 fixed z-50 flex justify-center items-center px-6 top-2">
          <div className="w-full md:w-880 bg-navBar p-4 flex items-center rounded-2xl">
            <p className="text-lg text-slate-200 font-medium">Hrithik Dutta</p>
            <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
              <a
                href="#home"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Projects
              </a>
              <a
                href="#contacts"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Contact
              </a>
              <a
                href="#"
                className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in"
              >
                Download
              </a>
            </div>
            <div
              className="block md:hidden  ml-auto cursor-pointer text-white"
              onClick={() => setIsActive(!isActive)}
            >
              <IoMenu />
            </div>
            {isActive && (
              <div
                // initial={{ opacity: 0, scale: 0.5 }}
                // animate={{ opacity: 1, scale: 1.1 }}
                // exit={{ opacity: 0, scale: 0.5 }}
                // transition={{ delay: "0.1s", type: "spring" }}
                className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6"
              >
                <a
                  href="#home"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Projects
                </a>
                <a
                  href="#contacts"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Download
                </a>
              </div>
            )}
          </div>
        </nav>
        <div className="relative" id="home">
          {/* <Spline scene="https://prod.spline.design/Gj81hfRZg1qEbrmb/scene.splinecode" /> */}
          <Spline scene="https://prod.spline.design/oo6IxFu8UDjFUmjD/scene.spline" />
          <div className="absolute bottom-10 w-full flex justify-center items-center">
            <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl ">
              <p className="text-white">Press and drag to orbit</p>
            </div>
          </div>
        </div>
        {/* main section */}
        <main className="w-[80%] mt-4">
          <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24" id="about">
            <div className="w-full h-420 flex items-center justify-center">
              <div className="w-275 h-340 relative bg-emerald-200 rounded-md">
                <img
                  src={Pfp}
                  alt="Profile Picture"
                  className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg drop-shadow-2xl bg-black"
                />
              </div>
            </div>
            <div className="w-full h-420 flex flex-col items-center justify-center ">
              <p className="text-lg text-textBase text-center">
                As an aspiring Frontend and Fullstack Developer student, my passion lies in crafting
                immersive digital experiences. Eagerly seeking opportunities to merge creativity
                with technical prowess, I strive to bridge user-centric design with seamless
                functionality. With a commitment to continuous learning, I'm poised to contribute
                innovative solutions and enhance user engagement in the dynamic world of web
                development.
              </p>

              <button
                class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center 
              p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group 
              bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400
               group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4
                focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg 
                hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80"
              >
                <span
                  class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75
                 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                >
                  Download
                </span>
              </button>
            </div>
          </section>
          {/* React vertical time line to be added when i got some experience */}
          {/* Projects Section */}
          <section className="flex flex-wrap items-center justify-evenly my-24 gap-4" id="projects">
            {Projects &&
              Projects.map((n, i) => (
                <div
                  key={n.id}
                  className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out"
                >
                  <p className="text-lg text-textBase font-medium uppercase">
                    {n.name.length > 25 ? `${n.name.slice(0, 25)}...` : n.name}
                  </p>

                  <img
                    src={n.imageSrc}
                    className="w-full h-full object-cover rounded-md my-4"
                    alt=""
                  />

                  <div className="flex flex-1 items-center justify-between">
                    <p className="text-lg text-gray-300">
                      Technologies
                      <span className="block text-sm text-gray-500">{n.techs}</span>
                    </p>
                    <a href={n.github}>
                      <div>
                        <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                      </div>
                    </a>
                  </div>
                </div>
              ))}
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
