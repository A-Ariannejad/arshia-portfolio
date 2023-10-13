import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
import About from "./about/index"
const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 toblack/10">
        {/* title */}
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto z-10 relative">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="lg:h1 text-xl "
          >
            {"Hi, I'm Arshia Ariannejad"} <br /> Into{" "}
            <span className="text-accent">Computer Engineering </span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="max-w-sm xl:max-w-4xl mx-auto xl:mx-0 mb-10 xl:mb-16 max-h-52 xl:max-h-fit overflow-auto scrollbar scrollbar-thumb-[#1b1738] scrollbar-thumb-rou   scrollbar-thin "
            style={{
              
            }}
          >
            {
              "I am an experienced Backend Developer specializing in Websites and Video Games. I am passionate about seeking new opportunities to expand my knowledge and create innovative projects. As a dedicated and fast learner, I thrive in dynamic environments where I can continuously learn and grow.My ultimate goal is to develop products that resonate with users and provide them with an enjoyable experience. I am driven by the desire to create something that people will love and use on a daily basis. I am open to exciting challenges and collaborations that allow me to push the boundaries of what's possible in the world of technology. If you are looking for a talented and motivated developer to join your team, I would love to connect and discuss how my skills and passion can contribute to your projects. Let's create something amazing together!"
            }
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative ">
            <ProjectsBtn></ProjectsBtn>
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            className="hidden xl:flex"
            exit={"hidden"}
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* img */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0 ">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          transition={{ duration: 1, ease: "easeInOut" }}
          exit={"hidden"}
          className=" bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
        ></motion.div>
        <ParticlesContainer />
        <motion.div
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%] "
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          transition={{ duration: 1, ease: "easeInOut" }}
          exit={"hidden"}
        >
          {/* <Avatar></Avatar> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
