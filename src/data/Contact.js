import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { FaItchIo } from "react-icons/fa";

const CSS = "text-7xl hover:scale-110 duration-300";

export const CONTACT = [
  {
    icon: <SiLinkedin className={CSS} />,
    link: "https://www.linkedin.com/in/squia003",
  },
  {
    icon: <SiGithub className={CSS} />,
    link: "https://www.github.com/seanquiambao",
  },
  {
    icon: <MdEmail className={CSS} />,
    link: "mailto:squia003@ucr.edu",
  },
  {
    icon: <IoDocumentText className={CSS} />,
    link: "https://drive.google.com/file/d/1yaR0pxpPlE6xT_UKB5dgPMRO0d99R3jz/view?usp=sharing",
  },
];
