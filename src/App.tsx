import {Home, NavBar} from "./component";

function App() {
  return (
    <>
      <section className="justify-center text-white items-center md:py-10 text-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src="/images/sam.mp4" type="video/mp4" />
        </video>
        <NavBar />
        <Home />
        <div className="text-center py-3 px-1 md:p-5">
          <button
            style={{fontFamily: "Manufacturing Consent"}}
            className="py-2 px-3 rounded-[20px] bg-gray-900 border-2 border-gray-500 md:text-4xl text-white animate-bounce font-bold"
          >
            ABOUT
          </button>
          <p
            style={{fontFamily: "Lobster"}}
            className="md:font-medium h-fit hyphens-auto md:text-2xl w-fit md:w-250 mx-auto wrap-break-words"
          >
            Hey!!, I'm Emmanuel Samuel, a passionate frontend developer who
            enjoys building modern, responsive, and user-friendly web
            applications. I specialize in React, TypeScript, Tailwind CSS, and
            JavaScript, and I love turning ideas into clean, interactive digital
            experiences. I am constantly learning new technologies and improving
            my skills through personal projects.
            <span className="text-gray-400">
              My goal is to create websites that are not only visually appealing
              but also fast, accessible, and easy to use. When I'm not coding,
              you'll usually find me exploring new tools, learning about web
              development, or working on projects that challenge me to grow as a
              developer. I'm always excited to collaborate, learn, and build
              impactful solutions.
            </span>
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
