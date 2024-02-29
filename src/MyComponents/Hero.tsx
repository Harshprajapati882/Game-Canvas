import HeroVideo from "@/assets/hero-opener.mp4";

function Hero() {
  return (
    <div className="absolute w-full h-full">
      <video
        muted
        autoPlay
        loop
        className="absolute inset-0 w-full h-full object-cover object-center"
        src={HeroVideo}
      ></video>
      <div className="absolute text-white flex flex-col font-[600] text-[3vw] left-[2vw] bottom-[10vw] opacity-100 z-10">
        <h2>Play Any Type of Games Online</h2>
        <h2>Without Overhead of Downloading</h2>
      </div>
      <div className="absolute hover:shadow-[0px_0px_10px_5px_#bc3360] border-2 border-[#bc3360] text-white flex justify-center items-center left-[2vw] bottom-[5vw] opacity-100 z-10">
        <button className="px-[1vw] py-[0.3vw] text-[2vw] font-[700]">Play Now</button>
      </div>
    </div>
  );
}

export default Hero;
