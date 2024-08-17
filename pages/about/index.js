import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaLinux,
  FaFigma,
  FaPython,
  FaJava,
  FaWpforms,
  FaUnity,
  FaGitlab,
  FaDocker,
} from "react-icons/fa";

import { TbBrandCoinbase, TbBrandCpp, TbBrandCSharp } from "react-icons/tb";

import {
  BsMicrosoft,
  BsFillBootstrapFill,
  BsGithub,
  BsFiletypeSql,
} from "react-icons/bs";

import { BiLogoPostgresql } from "react-icons/bi";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiAssemblyscript,
  SiDjango,
  SiMui,
  SiMysql,
  SiSqlite,
  SiFastapi,
  SiMongodb,
  SiElasticsearch,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import SimpleBar from "simplebar-react";

// counter
import CountUp from "react-countup";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Programming Languages",
        icons: [
          <TbBrandCoinbase key={0} />,
          <TbBrandCpp key={1} />,
          <TbBrandCSharp key={2} />,
          <FaPython key={3} />,
          <FaJava key={4} />,
          <FaJs key={5} />,
          <FaHtml5 key={6} />,
          <FaCss3 key={7} />,
          <SiAssemblyscript key={8} />,
        ],
      },
      {
        title: "Frameworks & Libraries",
        icons: [
          <SiDjango key={0} />,
          <SiFastapi key={1} />,
          <BsMicrosoft key={2} />,
          <FaWpforms key={3} />,
          <FaReact key={4} />,
          <SiMui key={5} />,
          <BsFillBootstrapFill key={6} />,
        ],
      },
      {
        title: "Others",
        icons: [
          <FaUnity key={0} />,
          <BsGithub key={1} />,
          <FaGitlab key={2} />,
          <BiLogoPostgresql key={3} />,
          <SiMysql key={4} />,
          <SiSqlite key={5} />,
          <BsFiletypeSql key={6} />,
          <SiMongodb key={7} />,
          <SiElasticsearch key={8} />,
          <FaDocker key={9} />,
          <FaLinux key={10} />,
          <SiAdobephotoshop key={11} />,
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title:
          "National Entrance Exam For Graduate Schools, Ranking among the top 0.01% of the candidates.",
        stage: "2019",
      },
      {
        title: "Winning an award for being the 3rd top student.",
        stage: "2019",
      },
      {
        title:
          "Winning an award for being the best team of the GameHub of IUST",
        stage: "2024",
      },
      {
        title:
          "Winning an award for being the best team of the GameHub of IUST",
        stage: "2022",
      },
      {
        title:
          "Contributed to the Computer Engineering Scientific Association.",
        stage: "2022-Now",
      },
    ],
  },
  {
    title: "Experiences",
    info: [
      {
        title: "Backend (FastAPI, MongoDB, ElasticSearch) - Arman Rayan Sharif",
      },
      {
        title:
          "Backend (Unity, Blender, Virtual Reality, Django, Postgresql) - IUST",
      },
      {
        title: "Backend (Django, Django-REST, ASP.Net) - Freelancing",
      },
      {
        title: "Frontend (JavaScript, React, MUI) - Freelancing",
      },
      {
        title: "Backend (Django, Django-REST) - Andishe Negar Company",
      },
      {
        title: "GameDesign & GameDevelop (Unity) - Turned On Digital Company",
      },
      {
        title:
          "GameDesign & GameDevelop (Unity, Unreal Engine) - GameHub at IUST ",
      },
      {
        title:
          "Teaching (FCP, AP, Unity, Django, etc.) - Schools and Institutes ",
      },
    ],
  },
  {
    title: "Academic",
    info: [
      {
        title: "Software Engineering II TA",
        stage: "2023",
      },
      {
        title: "Software Engineering I TA",
        stage: "2023",
      },
      {
        title: "Compiler Design Principles TA",
        stage: "2022-2023",
      },
      {
        title: "Game Design & Development Head TA",
        stage: "2022-2023",
      },
      {
        title: "Algorithms Analysis TA",
        stage: "2023",
      },
      {
        title: "Digital Systems Design TA",
        stage: "2021-2022",
      },
      {
        title: "Database Design & Management",
        stage: "2021",
      },
      {
        title: "Advanced Programming Head TA",
        stage: "2019-2021",
      },
      {
        title: "Fundamental of computer programming Head TA",
        stage: "2019-2022",
      },
      {
        title: "Computer Architect TA",
        stage: "2020",
      },
      {
        title: "Logical Circuit TA",
        stage: "2019",
      },
    ],
  },
  {
    title: "Educations",
    info: [
      {
        title: "Iran University of Science and Technology",
        stage: "2023",
      },
      {
        title: "Seyed Al Shohada High School",
        stage: "2018",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="flex sm:flex-col sm:justify-between h-full bg-primary/30 py-32 text-center xl:text-left ">
      <Circles></Circles>
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit={"hidden"}
        className="hidden xl:flex absolute bottom-0 -left-[370px] top-[10rem]"
      >
        {/* <Avatar></Avatar> */}
      </motion.div>
      <div className=" container mx-auto h-full justify-center flex flex-col items-center xl:flex-row gap-x-6 sm:p-7">
        {/* text */}
        <div className="md:w-full h-96 md:h-auto w-11/12 flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="h2"
          >
            About <span className="text-accent">me </span>
          </motion.h2>
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="md:w-full w-11/12 mx-auto xl:mx-0 mb-10 xl:mb-16 max-h-40 md:max-h-24 xl:max-h-fit overflow-hidden scrollbar scrollbar-thumb-[#1b1738] scrollbar-thumb-rou   scrollbar-thin "
          >
            <SimpleBar className="w-full h-40 md:h-4/5">
              {
                "Four years ago, my journey as a developer commenced. Since then, I have successfully undertaken remote projects for various agencies, provided consulting services for startups, and participated in the development of digital products catering to both business and consumer needs. Additionally, I have gained valuable experience as a backend developer while working with different companies, where I had the opportunity to be part of collaborative group settings and engage in team-oriented projects. These experiences have not only enhanced my skills but also provided me with insights into the dynamics and benefits of teamwork."
              }
            </SimpleBar>
          </motion.div>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="hidden md:flex md:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text2xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={4} duration={9}></CountUp>+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]  ">
                  Years of experience
                </div>
              </div>
              {/* Clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text2xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={50} duration={9}></CountUp>+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]  ">
                  Finished Projects
                </div>
              </div>
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text2xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={5} duration={7}></CountUp>+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]  ">
                  winning awards
                </div>
              </div>
              {/* award */}
              <div className="relative flex-1  ">
                <div className="text2xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={7} duration={5}></CountUp>
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]  ">
                  IELTS
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit={"hidden"}
          className="flex flex-col w-full xl:max-w-[48%] h-[480px] "
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 md:overflow-x-hidden  overflow-x-auto overflow-hidden flex-wrap">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={
                    (index === itemIndex
                      ? "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300 "
                      : "after:bg-white ") +
                    " cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]  after:absolute after:-bottom-1 after:left-0 mb-4"
                  }
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <SimpleBar className="max-h-44 md:max-h-50 xl:max-h-96">
            <div className=" py-2 xl:py-6 flex flex-col gap-y-2  items-center xl:gap-y-4 xl:items-start xl:max-h-fit   md:overflow-x-hidden  scrollbar scrollbar-thumb-[#1b1738] scrollbar-thumb-rou   scrollbar-thin ">
              {aboutData[index].info.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                  >
                    <div className="font-light mb-2 md:mb-0 ">{item.title}</div>
                    <div className="hidden md:flex">-</div>
                    <div>{item.stage}</div>
                    <div className="flex gap-x-4 flex-wrap">
                      {item.icons?.map((icon, iconIndex) => {
                        return (
                          <div
                            className="text-2xl text-white mb-3"
                            key={iconIndex}
                          >
                            {icon}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </SimpleBar>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
