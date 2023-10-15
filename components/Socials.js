import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiDribbbleLine,
  RiPinterestLine,
  RiGithubLine,
  RiLinkedinLine,
  RiTwitterLine,
  RiFilePaper2Fill
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {/* <Link href={""} className="hover:text-accent transiotn-all duration-300">
        <RiYoutubeLine />
      </Link>
      <Link href={""} className="hover:text-accent transiotn-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={""} className="hover:text-accent transiotn-all duration-300">
        <RiFacebookBoxLine />
      </Link>
      <Link href={""} className="hover:text-accent transiotn-all duration-300">
        <RiDribbbleLine />
      </Link>
      <Link href={""} className="hover:text-accent transiotn-all duration-300">
        <RiPinterestLine />
      </Link> */}
      {/* <Link href={"erfan.es1381@gmail.com"} className="hover:text-accent transiotn-all duration-300">
        <HiOutlineMail />
      </Link> */}
      <Link className="text-accent" href={"https://drive.google.com/file/d/15gZqNUv6U6TL1p1URlEcO-Ntth6HdUOX/view?usp=sharing"} download>
        {/* <RiFilePaper2Fill /> */}
        Download my CV
      </Link>
      <Link href={"https://github.com/A-Ariannejad"} className="hover:text-accent transiotn-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href={"https://www.linkedin.com/in/arshia-ariannejad-585475195/"} className="hover:text-accent transiotn-all duration-300">
        <RiLinkedinLine />
      </Link>
      <Link href={"https://twitter.com/AArian193134"} className="hover:text-accent transiotn-all duration-300">
        <RiTwitterLine />
      </Link>
    </div>
  );
};

export default Socials;
