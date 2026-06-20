function Home() {
  return (
    <div className="font-bold">
      <nav>
        <div className="justify-center items-center space-y-3">
          <h1
            style={{fontFamily: "Bitcount Grid Double"}}
            className="font-normal mx-auto text-3xl"
          >
            <span className="font-[none] text-6xl font-bold px-2 text-green-400">
              Sammy
              <br className="md:hidden" />
            </span>
            BRIGHT
          </h1>
          <p className="w-50 h-50 mx-auto">
            <img
              className="w-full h-full border-2  border-green-400 rounded-[100px]"
              src="/images/sam.jpeg"
            ></img>
          </p>
        </div>
        <p></p>
      </nav>
    </div>
  );
}

export default Home;
