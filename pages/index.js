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
            className="h1"
          >
            Hi Im Dog <br /> Into{" "}
            <span className="text-accent">Computer Engineering </span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            {
              "I'm currently working on Front end websites in university and out of it. I'm looking to collaborate with game developers. I'm currently learning Unity. Ask me about what you want. (don't tell anyone but I want to people use what I created)"
            }
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
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
          <Avatar></Avatar>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
