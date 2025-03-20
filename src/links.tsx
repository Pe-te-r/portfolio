import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

// social media links
export const socialMediaLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="w-6 h-6" />,
      link: "https://github.com/yourusername",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-6 h-6" />,
      link: "https://linkedin.com/in/yourusername",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="w-6 h-6" />,
      link: "https://twitter.com/yourusername",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="w-6 h-6" />,
      link: "https://instagram.com/yourusername",
    },
    {
      name: "TikTok",
      icon: <FaTiktok className="w-6 h-6" />,
      link: "https://tiktok.com/@yourusername",
    },
  ];



  export const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Skills Set", path: "/skills" },
    { name: "Contact", path: "/contact" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blogs" },
  ];